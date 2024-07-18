const connection = require('../../config/connection.js');
const logger = require('../../logs.js');

const getProductStock = async (storage) => {
  let Query =
    'SELECT product_name as Product,stock as Stock FROM product_master left join products_details on products_details.product_id=product_master.id';
  if (storage) {
    return await connection.execute(
      `${Query}  where storage_id=? order by stock;`,
      [storage]
    );
  } else {
    return await connection.execute(`${Query} order by stock`);
  }
};

module.exports = { getProductStock };
