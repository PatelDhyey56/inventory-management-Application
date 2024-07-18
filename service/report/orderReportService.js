const connection = require('../../config/connection');
const logger = require('../../logs');
const getOrderreport = async (storage) => {
  // console.log(queryDate);
  let sql = `SELECT sales_order.id as Order_Id ,sales_name as Order_Name ,customer_master.firstname as Customer_Name,option_master.value as Order_Status,amount as Order_Amount,pay.value as Payment_Status ,order_date as Order_Time,sales_order.created_at as Created_Time  FROM sales_order left join customer_master on sales_order.customer_id=customer_master.id left join option_master on sales_order.type=option_master.id left join option_master as pay on sales_order.payment_status=pay.id`;
  if (storage) {
    return await connection.execute(
      `${sql} where storage_id=? order by Order_Time desc;`,
      [storage]
    );
  } else {
    return await connection.execute(`${sql} order by Order_Time desc;`);
  }
};

const getApiordersProduct = async (id) => {
  let sql = `SELECT product_master.product_name as Product_Name,option_master.value as Category, product_master.cost as Product_Cost,sales_products.quantity as Quantity FROM sales_products left join sales_order on sales_products.order_id=sales_order.id left join product_master on sales_products.product_id=product_master.id left join option_master on product_master.category_id=option_master.id where sales_products.is_delete=0 and sales_order.id=?`;

  return await connection.execute(sql, [id]);
};

const getOrderreportBydate = async (fromDate, toDate, storage) => {
  let sql = `	SELECT sales_order.id as Order_Id ,sales_name as Order_Name ,customer_master.firstname as Customer_Name,option_master.value as Order_Status,amount as Order_Amount,pay.value as Payment_Status ,sales_order.order_date as Order_Time ,sales_order.created_at as Created_Time  FROM sales_order left join customer_master on sales_order.customer_id=customer_master.id left join option_master on sales_order.type=option_master.id left join option_master as pay on sales_order.payment_status=pay.id where sales_order.order_date BETWEEN ? and ? `;
  // console.log(sql);
  if (storage) {
    return await connection.execute(
      `${sql}  and storage_id=? order by Order_Time desc;`,
      [fromDate, toDate, storage]
    );
  } else {
    return await connection.execute(`${sql} order by Order_Time desc;`, [
      fromDate,
      toDate,
    ]);
  }
};
const getOrderDayreportDay = async (date, storage) => {
  let sql = `SELECT sales_order.id as Order_Id ,sales_name as Order_Name ,
  customer_master.firstname as Customer_Name,
  option_master.value as Order_Status,amount as Order_Amount,pay.value as Payment_Status ,
  order_date,sales_order.order_date as Order_Time  FROM sales_order 
  left join customer_master on sales_order.customer_id=customer_master.id 
  left join option_master on sales_order.type=option_master.id
  left join option_master as pay on sales_order.payment_status=pay.id 
  where (sales_order.order_date > DATE(NOW()) - INTERVAL ? DAY) and sales_order.type=8 and sales_order.payment_status=11 `;
  if (storage) {
    return await connection.execute(
      `${sql}  and storage_id=? order by Order_Time desc;`,
      [date, storage]
    );
  } else {
    return await connection.execute(`${sql} order by Order_Time desc;`, [date]);
  }
};
const getOrderDayreportMonth = async (month, storage) => {
  let sql = `SELECT sales_order.id as Order_Id ,sales_name as Order_Name ,customer_master.firstname as Customer_Name,option_master.value as Order_Status,amount as Order_Amount,pay.value as Payment_Status ,sales_order.created_at,sales_order.order_date as Order_Time  FROM sales_order left join customer_master on sales_order.customer_id=customer_master.id left join option_master on sales_order.type=option_master.id left join option_master as pay on sales_order.payment_status=pay.id where month(sales_order.order_date)=? and sales_order.type=8 and sales_order.payment_status=11`;
  if (storage) {
    return await connection.execute(
      `${sql}  and storage_id=? order by Order_Time desc;`,
      [month, storage]
    );
  } else {
    return await connection.execute(`${sql} order by Order_Time desc;`, [
      month,
    ]);
  }
};
module.exports = {
  getOrderreport,
  getApiordersProduct,
  getOrderreportBydate,
  getOrderDayreportDay,
  getOrderDayreportMonth,
};
