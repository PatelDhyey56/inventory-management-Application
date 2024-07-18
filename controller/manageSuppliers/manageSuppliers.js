const logger = require('../../logs.js');
const {
  insertSupplierQuery,
  getSupplierQuery,
  checkSupplierExistQuery,
  updateSupplierQuery,
  deleteSupplierrQuery,
  reactivateSupplierrQuery
} = require('../../service/manageSuppliers/manageSuppliers.js');

const {
  getCityStateId,
} = require('../../service/commonFunctions/commonFunctions.js');

async function getSuppliersPage(req, res) {
  return res.render('manageSuppliers/manageSuppliers', { data: req.user });
}

async function insertSupplier(req, res) {
  try {
    /**if this will send from frontend js then form data
     * either post request then key value pair key is name in form */
    const supplierDetails = req.body;

    await insertSupplierQuery(supplierDetails);
    return res.status(200).json({ message: 'Supplier Inserted' });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to insert' });
  }
}

async function getAllSuppliers(req, res) {
  try {
    const supplierStatus = req.params.status;
    const supplierDetails = await getSupplierQuery(supplierStatus);
    return res.status(200).json(supplierDetails);
  } catch (error) {
    //here render error page
    logger.logError(error);
    return res.status(404).json({ message: "Can't get suppliers" });
  }
}

async function getParticularSupplier(req, res) {
  try {
    const queryString = req.query;
    const supplierDetail = await checkSupplierExistQuery(
      queryString.supplierId
    );
    if (supplierDetail.length !== 0) {
      return res.status(200).json(supplierDetail);
    } else {
      return res.status(404).json({ message: 'Supplier Not Found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something Went Wrong' });
  }
}

async function updateSupplier(req, res) {
  try {
    const supplierDetails = req.body;

    const cityStateIdArray = await getCityStateId(
      supplierDetails.state,
      supplierDetails.city
    );

    //----city, state id store
    let cityId = cityStateIdArray[0].city_id;
    let stateId = cityStateIdArray[0].state_id;
    supplierDetails.city = cityId.toString();
    supplierDetails.state = stateId.toString();

    const updateSupplierStatus = await updateSupplierQuery(supplierDetails);

    if (updateSupplierStatus) {
      return res.status(200).json({ message: 'Supplier Updated' });
    } else {
      return res.status(404).json({ message: 'Something went wrong' }); //supplier not exist
    }
  } catch (error) {
    return res.status(500).json({ message: 'Unable to update' });
  }
}

async function deleteSupplier(req, res) {
  try {
    const supplierId = req.query.supplierId;
    const responseObject = await deleteSupplierrQuery(supplierId);
    if (responseObject.affectedRows > 0) {
      return res.status(200).json({ message: 'Supplier Deleted' });
    } else {
      return res.status(404).json({ message: 'Something Went Wrong' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Unable to delete' });
  }
}

async function reactivateSupplier(req, res) {
  try {
    const supplierId = req.query.supplierId;
    const responseObject = await reactivateSupplierrQuery(supplierId);
    if (responseObject.affectedRows > 0) {
      return res.status(200).json({ message: 'Supplier Reactivate' });
    } else {
      return res.status(404).json({ message: 'Something Went Wrong' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Unable to reactivate' });
  }
}


module.exports = {
  insertSupplier,
  updateSupplier,
  getSuppliersPage,
  getAllSuppliers,
  getParticularSupplier,
  deleteSupplier,
  reactivateSupplier
};
