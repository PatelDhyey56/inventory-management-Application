const logger = require('../../logs.js');
const {
  insertCustomerQuery,
  getCustomersQuery,
  checkCustomerExistQuery,
  updateCustomerQuery,
  deleteCustomerQuery,
  reactivateCustomerQuery
} = require('../../service/manageCustomers/manageCustomers.js');

const {
  getCityStateId,
} = require('../../service/commonFunctions/commonFunctions.js');

async function insertCustomer(req, res) {
  try {
    /**if this will send from frontend js then form data
     * either post request then key value pair key is name in form */
    const customerDetails = req.body;

    await insertCustomerQuery(customerDetails);
    return res.status(200).json({ message: 'Customer Inserted' });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to insert' });
  }
}

async function getCustomersPage(req, res) {
  return res.render('manageCustomers/manageCustomers', { data: req.user });
}

async function getAllCustomers(req, res) {
  try {
    const customerStatus = req.params.status;
    const customersDetails = await getCustomersQuery(customerStatus);
    return res.status(200).json(customersDetails);
  } catch (error) {
    //here render error page
    logger.logError(error);
    return res.status(404).json({ message: "Can't get customers" });
  }
}

async function getParticularCustomer(req, res) {
  try {
    const queryString = req.query;
    // logger.info(queryString.customerId);
    if (!queryString.customerId) {
      return res.redirect('/manageCustomers');
    }
    const customerDetail = await checkCustomerExistQuery(
      queryString.customerId
    );
    if (customerDetail.length !== 0) {
      return res.status(200).json(customerDetail);
    } else {
      return res.status(404).json({ message: 'Something Went Wrong' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something Went Wrong' });
  }
}

async function updateCustomer(req, res) {
  try {
    const customerDetails = req.body;

    const cityStateIdArray = await getCityStateId(
      customerDetails.state,
      customerDetails.city
    );

    //----city, state id store
    let cityId = cityStateIdArray[0].city_id;
    let stateId = cityStateIdArray[0].state_id;
    customerDetails.city = cityId.toString();
    customerDetails.state = stateId.toString();

    const updateCustomerStatus = await updateCustomerQuery(customerDetails);

    if (updateCustomerStatus) {
      return res.status(200).json({ message: 'Customer Updated' });
    } else {
      return res.status(404).json({ message: 'Something went wrong' }); //customer not exist
    }
  } catch (error) {
    return res.status(500).json({ message: 'Unable to update' });
  }
}

async function deleteCustomer(req, res) {
  try {
    const customerId = req.query.customerId;

    if (!customerId) {
      return res.redirect('/manageCustomers');
    }
    const responseObject = await deleteCustomerQuery(customerId);
    if (responseObject.affectedRows > 0) {
      return res.status(200).json({ message: 'Customer Deleted' });
    } else {
      return res.status(404).json({ message: 'Something Went Wrong' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Unable to delete' });
  }
}

async function reactivateCustomer(req, res) {
  try {
    const customerId = req.query.customerId;

    if (!customerId) {
      return res.redirect('/manageCustomers');
    }
    const responseObject = await reactivateCustomerQuery(customerId);
    if (responseObject.affectedRows > 0) {
      return res.status(200).json({ message: 'Customer Reactivate' });
    } else {
      return res.status(404).json({ message: 'Something Went Wrong' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Unable to reactivate' });
  }
}

module.exports = {
  insertCustomer,
  updateCustomer,
  getCustomersPage,
  getAllCustomers,
  getParticularCustomer,
  deleteCustomer,
  reactivateCustomer
};
