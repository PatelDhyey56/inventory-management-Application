const { name } = require('ejs');
const connection = require('../../config/connection.js');
const logger = require('../../logs.js');
const { getCityStateId } = require('../commonFunctions/commonFunctions.js');

async function insertStoreQuery(body) {
  try {
    const insertStore = `INSERT INTO storage_space_master (name,storage_type,location_id) VALUES(?,?,?);`;
    const cityStateId = await getCityStateId(body.state, body.city);
    const [result] = await connection.execute(insertStore, [
      body.storageName,
      body.storeType,
      cityStateId[0].city_id,
    ]);
    // console.log(result);
  } catch (error) {
    logger.logError('Insert Store: ' + error);
  }
}

async function getStoreQuery() {
  try {
    const getStores = `SELECT s.id as storeId ,s.name as StorageName, s.is_delete , option_master.value as StorageType , city_master.city_name as Location,s.created_at as CreatedTime FROM storage_space_master as s left join option_master on s.storage_type = option_master.id left join city_master on city_master.city_id=s.location_id`;

    const [result] = await connection.execute(getStores);
    // console.log(result)
    return result; //return array
  } catch (error) {
    logger.logError('Get Stores: ' + error);
    return [];
  }
}

async function checkStoreExistQuery(storeId) {
  try {
    const checkStore = `SELECT s.id as storeId ,s.name as Storagename , option_master.value as StorageType ,option_master.id as StorageTypeId ,state_master.state_name as state,city_master.city_name as city FROM storage_space_master as s left join option_master on s.storage_type = option_master.id left join city_master on city_master.city_id=s.location_id left join state_master on state_master.state_id=city_master.state_id WHERE s.id=?;`;
    const [result] = await connection.execute(checkStore, [storeId]);
    // console.log(result);
    // console.log(storeId);
    return result;
  } catch (error) {
    logger.logError('Check store: ' + error);
    throw error;
  }
}

async function updateStoreQuery(body, storeId) {
  try {
    // console.log(storeId);
    const updateStore = `UPDATE storage_space_master as s SET s.name=?, s.storage_type = ?, s.location_id=? WHERE s.id=?;`;
    const cityStateId = await getCityStateId(body.state, body.city);
    const [result] = await connection.execute(updateStore, [
      body.storageName,
      body.storeType,
      cityStateId[0].city_id,
      storeId,
    ]);
    // console.log(result, "result");
    return true;
  } catch (error) {
    logger.logError('Update Customer: ' + error);
    throw error;
  }
}

async function deleteStoreQuery(storeId) {
  // console.log("queryid",storeId);
  try {
    const deleteStore = `update storage_space_master set is_delete = '1' where id = ?`;
    const deleteManager = `update manager_details set is_delete = '1' where storage_id = ?`;
    const deletePurchase = `update purchase_order set is_delete = '1' where storage_id = ?`;
    const deleteSales = `update sales_order set is_delete = '1' where storage_id = ?`;
    const deleteProduct = `update products_details set is_delete='1' where storage_id = ?`;
    // console.log(deleteStore);
    const [result] = await connection.execute(deleteStore, [storeId]);
    const [result1] = await connection.execute(deleteManager, [storeId]);
    const [result2] = await connection.execute(deletePurchase, [storeId]);
    const [result3] = await connection.execute(deleteSales, [storeId]);
    const [result4] = await connection.execute(deleteProduct, [storeId]);
    // console.log(result4);
  } catch (error) {
    logger.logError('Delete Store: ' + error);
  }
}

async function deleteStoreProductQuery(storeId, productId) {
  try {
    const deleteStoreProduct = `update products_details set is_delete = '1' where storage_id = ? and product_id =?;`;
    const [result] = await connection.execute(deleteStoreProduct, [
      storeId,
      productId,
    ]);
  } catch (error) {
    logger.logError('Delete Store Product: ' + error);
  }
}

async function storeProductQuery(storeId) {
  try {
    const storeProducts = `SELECT users.firstname, storage_space_master.name, product_master.id,product_name AS Productname,sku_id AS SKUid,option_master.value AS Category,cost AS Cost,description AS Description, products_details.stock,products_details.is_delete FROM product_master LEFT JOIN products_details ON product_master.id = products_details.product_id LEFT JOIN option_master ON product_master.category_id = option_master.id left join storage_space_master on storage_space_master.id = products_details.storage_id left join manager_details on storage_space_master.id = manager_details.storage_id left join users on users.id = manager_details.user_id where products_details.storage_id=? ;`;
    const [storeResult] = await connection.execute(storeProducts, [storeId]);
    return storeResult;
  } catch (error) {
    logger.logError('Store Product : ' + error);
  }
}
module.exports = {
  insertStoreQuery,
  getStoreQuery,
  updateStoreQuery,
  deleteStoreQuery,
  checkStoreExistQuery,
  deleteStoreProductQuery,
  storeProductQuery,
};
