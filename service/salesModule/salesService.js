const connection = require('../../config/connection');
const logger = require('../../logs');

async function selectOrders(orderby, order, col, value, storageId) {
  if (order == undefined) {
    order = 'desc';
  }
  if (orderby == undefined) {
    orderby = 'id';
  }
  if (orderby == 'firstname' || orderby == 'lastname') {
    orderby = 'customer_master.firstname';
  } else {
    orderby = `sales_order.${orderby}`;
  }

  if (col == undefined || value == undefined) {
    col = '1';
    value = '1';
  }

  sql = `select 
    sales_order.id,
    sales_order.customer_id,
    customer_master.firstname,
    customer_master.lastname,
    sales_order.amount,
		option_master.value as type,
    sales_order.shipping_address,
    sales_order.payment_status,
    sales_order.storage_id,
    sales_order.created_at,
    sales_order.is_delete,
    sales_order.order_date
  from sales_order join customer_master
  on sales_order.customer_id = customer_master.id
  join
    option_master ON  sales_order.type=option_master.id
  where ${col} = '${value}' and storage_id = ? order by ${orderby} ${order} ;`;
  try {
    return await connection.execute(sql, [storageId]);
  } catch (error) {
    console.log(error);
    logger.logError(error);
  }
}

async function insertOrder(input) {
  sql = `insert into sales_order (id, customer_id, type, shipping_address, payment_status, order_date,storage_id) values (default,?,?,?,?,?,?);`;
  logger.info(input);
  return await connection.execute(sql, input);
}

async function insertProduct(input) {
  sql = `insert into sales_products (id, order_id, product_id, order_type, quantity) values (default,?,?,?,?);`;

  return await connection.execute(sql, input);
}

async function updateOrder(input) {
  let sql = `update sales_order set 
    customer_id = ?,
    type = ?,
    shipping_address= ?,
    payment_status = ?,
		order_date = ?
  where id = ?`;

  return await connection.execute(sql, input);
}
async function productList(input) {
  let sql = `select sales_products.id as id, product_master.product_name , option_master.value as Category , sales_products.quantity,sales_products.order_type,product_master.cost as UnitPrice ,(sales_products.quantity * product_master.cost ) as Total from sales_products join product_master on sales_products.product_id = product_master.id join option_master on option_master.id = product_master.category_id where sales_products.order_id = ? and sales_products.is_delete = 0;`;

  return await connection.execute(sql, input);
}
async function deleteQuery(table, input) {
  let sql = `update ${table} set is_delete = 1 where id = ?`;

  return await connection.execute(sql, input);
}
async function updateProduct(req) {
  const [prevQuantity] = await connection.execute(
    `select sales_products.product_id,sales_products.quantity,sales_products.order_type ,products_details.stock from sales_products join products_details on sales_products.product_id = products_details.product_id where sales_products.id = ? and products_details.storage_id = ?;`,
    [req.body.id, req.user.storageId]
  );

  let total_stock = 0;
  // console.log(prevQuantity[0].order_type, req.body.orderType);
  //Sales To return
  if (prevQuantity[0].order_type == 8 && req.body.orderType == 9) {
    console.log('Sales To return');
    total_stock =
      parseInt(prevQuantity[0].stock) +
      parseInt(prevQuantity[0].quantity) +
      parseInt(req.body.quantity);
  } else if (prevQuantity[0].order_type == 9 && req.body.orderType == 9) {
    //return to return
    console.log('return to return');
    total_stock =
      parseInt(prevQuantity[0].stock) -
      parseInt(prevQuantity[0].quantity) +
      parseInt(req.body.quantity);
  } else if (prevQuantity[0].order_type == 9 && req.body.orderType == 8) {
    //return to sales
    console.log('return to sales');
    total_stock =
      parseInt(prevQuantity[0].stock) -
      parseInt(prevQuantity[0].quantity) -
      parseInt(req.body.quantity);
  } else {
    //sales to sales OR Delete
    // if (req.body.quantity == 0 && req.body.orderType == 9) {
    //   total_stock =
    //     parseInt(prevQuantity[0].stock) -
    //     parseInt(prevQuantity[0].quantity) +
    //     parseInt(req.body.quantity);
    // }
    // else {
    console.log('sales to sales');
    total_stock =
      parseInt(prevQuantity[0].stock) +
      parseInt(prevQuantity[0].quantity) -
      parseInt(req.body.quantity);
    // }
  }

  if (total_stock > 0 || req.body.orderType == 9) {
    const [result] = await connection.execute(
      `update products_details set stock = ? where product_id = ? and storage_id = ?;`,
      [total_stock, prevQuantity[0].product_id, req.user.storageId]
    );
    const [data] = await connection.execute(
      `update sales_products set quantity = ? ${
        req.body.orderType ? ',order_type = ' + req.body.orderType : ''
      } where id = ?`,
      [req.body.quantity, req.body.id]
    );
    return [true, 0];
  } else if (prevQuantity[0].order_type == 9) {
    return [
      false,
      parseInt(prevQuantity[0].quantity) +
        parseInt(prevQuantity[0].stock) -
        req.body.quantity,
    ];
  } else {
    return [
      false,
      parseInt(prevQuantity[0].quantity) + parseInt(prevQuantity[0].stock),
    ];
  }
}

async function updateAmount(input) {
  try {
    return await connection.execute(
      `update sales_order set amount = ?,type = ? where id = ?;`,
      input
    );
  } catch (e) {
    logger.logError(e);
  }
}

async function checkQuanitiy(req, type) {
  try {
    const [result] = await connection.execute(
      `select stock from products_details where product_id = ? and storage_id = ?`,
      [req.body.product, req.user.storageId]
    );
    if (result[0] == undefined) {
      return 0;
    } else {
      return result[0].stock;
    }
  } catch (e) {
    logger.logError(e);
  }
}

async function updateStock(req, stock) {
  const [data] = await connection.execute(
    `update products_details set stock = ? where product_id = ? and storage_id = ?`,
    [
      req.body.ordertype == 8
        ? parseInt(stock) - parseInt(req.body.quantity)
        : parseInt(stock) + parseInt(req.body.quantity),
      req.body.product,
      req.user.storageId,
    ]
  );
  return data;
}

async function getOrderDetail(req) {
  try {
  sql = `select customer_master.*,sales_order.id as order_id,(select city_name from city_master where city_id = customer_master.city_id)as city_name,(select state_name from state_master where state_id = customer_master.state_id) as state_name,sales_order.amount,sales_order.shipping_address,(select value from option_master where id = sales_order.type) as type,(select value from option_master where id = sales_order.payment_status) as payment_status,sales_order.order_date from sales_order join customer_master on sales_order.customer_id = customer_master.id where  sales_order.id = ?;`;

  let productQuery = `SELECT sales_products.id,sales_products.order_type,sales_products.quantity,product_master.product_name,product_master.sku_id,product_master.cost FROM sales_products join product_master on sales_products.product_id = product_master.id where order_id = ? and sales_products.is_delete = 0`;
  const [result] = await connection.execute(sql, [req.query.invoiceId]);
  const [products] = await connection.execute(productQuery, [
    req.query.invoiceId,
  ]);
  return [result, products];
  } catch (err) {
    logger.logError(err);
  }
}

module.exports = {
  selectOrders,
  insertOrder,
  insertProduct,
  updateOrder,
  productList,
  deleteQuery,
  updateProduct,
  updateAmount,
  checkQuanitiy,
  updateStock,
  getOrderDetail,
};
