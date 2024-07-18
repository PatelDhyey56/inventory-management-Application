const connection = require('../../config/connection');
const getProductreport = async (storage) => {
  let sql =
    'SELECT product_master.product_name as Product_Name,product_master.sku_id as Product_Skuid,product_master.cost as  Seling_Price,avg(purchase_products.unit_price) as Product_Cost,sum(sales_products.quantity) as Product_Sales FROM product_master left join sales_products on product_master.id =sales_products.product_id left join products_details on product_master.id =products_details.product_id left join purchase_products on product_master.id =purchase_products.product_id';

  if (storage) {
    return await connection.execute(
      `${sql} where products_details.storage_id=? group by product_master.id order by Product_Sales DESC`,
      [storage]
    );
  } else {
    return await connection.execute(
      `${sql} group by product_master.id order by Product_Sales DESC;`
    );
  }
};
const getCategotyreport = async (storage) => {
  let sql =
    'SELECT option_master.value as Category_Name,count(*) as Products,sum(sales_products.quantity) as Sales FROM product_master left join option_master on product_master.category_id=option_master.id left join sales_products on product_master.id =sales_products.product_id left join products_details on product_master.id =products_details.product_id';
  if (storage) {
    return await connection.execute(
      `${sql} where products_details.storage_id=? group by option_master.id order by Products DESC;`,
      [storage]
    );
  } else {
    return await connection.execute(
      `${sql} group by option_master.id order by Products DESC;`
    );
  }
};
module.exports = { getProductreport, getCategotyreport };
