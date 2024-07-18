const connection = require('../../config/connection');
const logger = require('../../logs.js');
const logError = require('../../logs.js').logError;

async function getAllSuppliers() {
  try {
    const [results] = await connection.execute('SELECT * FROM supplier_master');
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function getAllProducts() {
  try {
    const [results] = await connection.execute(
      'SELECT id, product_name, is_delete as deleted FROM product_master'
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function getProductsByCategory(id) {
  try {
    const [results] = await connection.execute(
      'SELECT `id`, `product_name`, is_delete as deleted FROM product_master WHERE `category_id` = ?',
      [id]
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function getAllWarehouses() {
  try {
    const [results] = await connection.execute(
      `SELECT
        s.id,
        s.name,
        s.storage_type,
        c.city_name,
        o.value,
        s.is_delete
      FROM
        storage_space_master as s
          join
        city_master as c
          on
        s.location_id = c.city_id
          join
        option_master as o
          on
        o.id = s.storage_type
      `
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function fetchPurchaseOrder(data) {
  try {
    const [results] = await connection.execute(
      `SELECT
          po.*,
          pm.category_id as category_id,
          pp.id as product_purchase_id,
          pp.product_id,
          pp.unit_price,
          pp.quantity
	  	  FROM
          purchase_order as po
            left join
          purchase_products as pp
            ON po.id = pp.purchase_id AND pp.is_delete != 1
            left join
          product_master as pm
            ON pp.product_id = pm.id
        WHERE
          po.id = ?
            AND
          po.is_delete != 1
		`,
      [data.id]
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function createPurchaseOrder(data) {
  try {
    const [results] = await connection.execute(
      'INSERT INTO purchase_order (name, supplier_id, storage_id, payment_status, date) VALUES (?, ?, ?, ?, ?)',
      [
        data.name || '',
        data.supplier_id,
        data.storage_id,
        data.payment_status,
        data.date,
      ]
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }

  // {
  // 	"fieldCount": 0,
  // 	"affectedRows": 1,
  // 	"insertId": 2,
  // 	"info": "",
  // 	"serverStatus": 2,
  // 	"warningStatus": 0,
  // 	"changedRows": 0
  // }
}

async function updatePurchaseOrder(data) {
  try {
    const [results] = await connection.execute(
      'UPDATE purchase_order SET name = ?, date = ?, payment_status = ? WHERE id = ?',
      [data.name, data.date, data.payment_status, data.id]
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function addProductInPurchaseOrder(data) {
  try {
    const [results] = await connection.execute(
      `
      INSERT INTO purchase_products (purchase_id, product_id, unit_price, quantity) VALUES (?, ?, ?, ?);
      `,
      [data.purchase_id, data.product_id, data.unit_price, data.quantity]
    );

    if (results?.insertId) {
      const exists = await connection.execute(
        `
        SELECT
          COUNT(product_id) as count
        FROM
          products_details
        WHERE
          product_id = ?
            AND
          storage_id = ?
      `,
        [data.product_id, data.storage_id]
      );

      if (Number(exists[0][0]?.count) > 0) {
        await connection.execute(
          `
          UPDATE products_details
            SET
              stock = stock + ?
            WHERE
              product_id = ?
                AND
              storage_id = ?
        `,
          [data.quantity, data.product_id, data.storage_id]
        );
      } else {
        await connection.execute(
          `
          INSERT INTO products_details
            (product_id, storage_id, stock)
          VALUES
            (?, ?, ?)
        `,
          [data.product_id, data.storage_id, data.quantity]
        );
      }
    }
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function updateProductInPurchaseOrder(data) {
  try {
    const [result] = await connection.execute(
      `
      SELECT
        (? - quantity) as diff
      FROM
        purchase_products
      WHERE
        id = ?
    `,
      [data.quantity, data.id]
    );

    const [results] = await connection.execute(
      `
      UPDATE
        purchase_products
          SET
            unit_price = ?,
            quantity = ?
          WHERE
            id = ?
    `,
      [data.unit_price, data.quantity, data.id]
    );

    await connection.execute(
      `  
      UPDATE
        products_details
          SET
            stock = stock + ?
          WHERE
            product_id = ?
              AND
            storage_id = ?`,
      [result[0].diff, data.product_id, data.storage_id]
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function deleteProductFromPurchaseOrder(data) {
  try {
    const [result] = await connection.execute(
      `  
      SELECT
        product_id, quantity
      FROM
        purchase_products
      WHERE
        id = ?`,
      [data.id]
    );

    await connection.execute(
      `
      UPDATE
        products_details
          SET
            stock = stock - ?
          WHERE
            product_id = ?
              AND
            storage_id = ?`,
      [result[0].quantity, result[0].product_id, data.storage_id]
    );

    const [results] = await connection.execute(
      'UPDATE purchase_products SET is_delete = 1 WHERE id = ?',
      [data.id]
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function fetchPurchaseOrders(data) {
  try {
    const [results] = await connection.execute(
      `SELECT
        purchase.id,
        purchase.name as oname,
        supplier.firstname as fname,
        supplier.companyname as company,
        supplier.phonenumber as phone,
        supplier.gst as gst,
        purchase.amount as amount,
        payment_status,
        purchase.\`is_delete\`,
        purchase.\`date\` as date
      FROM
        purchase_order AS purchase
            JOIN
        supplier_master AS supplier ON purchase.supplier_id = supplier.id
      WHERE
        purchase.storage_id = ${data.storage_id}
          AND
        payment_status = ${data.payment_status}
      ORDER BY
        ${data?.field ? `\`${data.field}\` ${data.order}` : ''}
      `
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function deletePurchaseOrder(data) {
  try {
    const [results] = await connection.execute(
      'UPDATE purchase_order SET is_delete = 1 WHERE id = ?',
      [data.id]
    );
    return results;
  } catch (error) {
    logError(error);
    return [];
  }
}

async function fetchPurchaseOrderView(req) {
  try {
    if ((req.user.storageId = null)) {
      req.user['storageId'] = req.query.storageId;
    }
    const [results] = await connection.execute(
      'select supplier_master.*,purchase_order.id as order_id,(select city_name from city_master where city_id = supplier_master.city_id)as city_name,(select state_name from state_master where state_id = supplier_master.state_id) as state_name,purchase_order.amount,(select value from option_master where id = purchase_order.payment_status) as payment_status,purchase_order.date as order_date from purchase_order join supplier_master on purchase_order.supplier_id = supplier_master.id where  purchase_order.id = ?;',
      [req.query.invoiceId]
    );
    const [products] = await connection.execute(
      `select
        purchase_products.id,
        purchase_products.quantity,
        product_master.product_name,
        product_master.sku_id,
        product_master.cost
      from
        purchase_products
          join
        product_master
          on
        purchase_products.product_id = product_master.id
      where
        purchase_products.purchase_id = ?
          and
        purchase_products.is_delete = 0;
      `,
      [req.query.invoiceId]
    );
    return [results, products];
  } catch (error) {
    logError(error);
  }
}

module.exports = {
  getAllSuppliers,
  createPurchaseOrder,
  updatePurchaseOrder,
  addProductInPurchaseOrder,
  updateProductInPurchaseOrder,
  deleteProductFromPurchaseOrder,
  getAllProducts,
  getAllWarehouses,
  fetchPurchaseOrder,
  getProductsByCategory,
  fetchPurchaseOrders,
  deletePurchaseOrder,
  fetchPurchaseOrderView,
};
