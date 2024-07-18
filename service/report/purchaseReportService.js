const connection = require('../../config/connection');
const logger = require('../../logs');
const getpurchaseProductreport = async (storage) => {
  // console.log(product);
  let sql = `SELECT  product_master.Product_Name,product_master.sku_id as Product_Skuid,sum(purchase_products.quantity) as Total_Products ,avg(purchase_products.unit_price) as Product_BuyPrice FROM product_master left join purchase_products on product_master.id =purchase_products.product_id left join products_details on product_master.id =products_details.product_id `;
  // console.log(sql);
  if (storage) {
    return await connection.execute(
      `${sql} where products_details.storage_id=? group by product_master.id  order by Total_Products DESC;`,
      [storage]
    );
  } else {
    return await connection.execute(
      `${sql} group by product_master.id  order by Total_Products DESC;`
    );
  }
  return await connection.execute(sql, [storage]);
};
module.exports = { getpurchaseProductreport };
