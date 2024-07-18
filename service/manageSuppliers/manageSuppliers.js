const connection = require('../../config/connection.js');
const logger = require('../../logs.js');
const { getCityStateId } = require('../commonFunctions/commonFunctions.js');

async function insertSupplierQuery(body) {
  try {
    const insertSupplier = `INSERT INTO supplier_master(firstname,lastname,email,phonenumber,companyname,gst,address,zipcode,city_id,state_id) VALUES(?,?,?,?,?,?,?,?,?,?);`;

    const cityStateId = await getCityStateId(body.state, body.city); //array contain object

    const [result] = await connection.execute(insertSupplier, [
      body.firstname,
      body.lastname,
      body.email,
      body.phonenumber,
      body.companyname,
      body.gst,
      body.address,
      body.zipcode,
      cityStateId[0].city_id,
      cityStateId[0].state_id,
    ]);
  } catch (error) {
    logger.logError('Insert Supplier: ' + error);
    throw error;
  }
}

async function insertSupplierFromFileQuery(supplierArray) {
  try {
    const insertCustomer =
      'INSERT INTO supplier_master(firstname,lastname,email,phonenumber,companyname,gst,address,zipcode,city_id,state_id) VALUES (?,?,?,?,?,?,?,?,?,?)';

    for (let element of supplierArray) {
      const [result] = await connection.execute(insertCustomer, [
        element[0],
        element[1],
        element[2],
        element[3],
        element[4],
        element[5],
        element[6],
        element[7],
        element[8],
        element[9],
      ]);
    }
  } catch (error) {
    logger.logError('Insert Suppliers: ' + error);
    throw error;
  }
}

async function getSupplierQuery(supplierStatus) {
  try {
    const getSuppliers = `SELECT  s.id as SupplierId,s.firstname as Firstname,s.lastname as Lastname,s.email as Email,s.phonenumber as Phonenumber,s.companyname as Companyname,s.gst as GST,s.address as Address,s.zipcode as Zipcode,city_master.city_name as City,state_master.state_name as State,s.created_at as Created,s.updated_at as Updated 
    FROM supplier_master as s
    LEFT JOIN city_master ON s.city_id = city_master.city_id
    LEFT JOIN state_master ON s.state_id = state_master.state_id
    WHERE s.is_delete = ?;`;

    const [result] = await connection.execute(getSuppliers, [supplierStatus]);

    // console.log(result);
    return result; //return array
  } catch (error) {
    logger.logError('Get Supplier: ' + error);
    throw error;
    // return [];
  }
}

async function checkSupplierExistQuery(supplierId) {
  try {
    const checkSupplier = `SELECT  s.id,s.firstname,s.lastname,s.email,s.phonenumber,s.companyname,s.gst,s.address,s.zipcode,city_master.city_name as city,state_master.state_name as state 
    FROM supplier_master as s
    LEFT JOIN city_master ON s.city_id = city_master.city_id
    LEFT JOIN state_master ON s.state_id = state_master.state_id
    WHERE id=?;`;

    const [result] = await connection.execute(checkSupplier, [supplierId]);
    return result;
  } catch (error) {
    logger.logError('Check supplier: ' + error);
    throw error;
  }
}

async function updateSupplierQuery(body) {
  try {
    const supplierId = body.supplierId;
    const supplierArray = await checkSupplierExistQuery(supplierId);
    if (supplierArray.length === 0) {
      return false;
    } else {
      const updateSupplier = `UPDATE supplier_master SET firstname = ?, lastname=?, email=?,phonenumber=?,companyname=?,gst=?,address=?,zipcode=?,city_id=?,state_id=? WHERE id=?;`;

      const [result] = await connection.execute(updateSupplier, [
        body.firstname,
        body.lastname,
        body.email,
        body.phonenumber,
        body.companyname,
        body.gst,
        body.address,
        body.zipcode,
        body.city,
        body.state,
        supplierId,
      ]);
      return true;
    }
  } catch (error) {
    logger.logError('Update Supplier: ' + error);
    throw error;
  }
}

async function deleteSupplierrQuery(supplierId) {
  try {
    const deleteSupplier = `UPDATE supplier_master SET is_delete=1 WHERE id=?`;

    const [result] = await connection.execute(deleteSupplier, [supplierId]);
    return result;
  } catch (error) {
    logger.logError('Delete Supplier: ' + error);
    throw error;
  }
}

async function reactivateSupplierrQuery(supplierId) {
  try {
    const reactivateSupplier = `UPDATE supplier_master SET is_delete=0 WHERE id=?`;

    const [result] = await connection.execute(reactivateSupplier, [supplierId]);
    return result;
  } catch (error) {
    logger.logError('Reactivate Supplier: ' + error);
    throw error;
  }
}

module.exports = {
  insertSupplierQuery,
  insertSupplierFromFileQuery,
  getSupplierQuery,
  checkSupplierExistQuery,
  updateSupplierQuery,
  deleteSupplierrQuery,
  reactivateSupplierrQuery
};
