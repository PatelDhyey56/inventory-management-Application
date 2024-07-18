const logger = require('../../logs.js');
const {
  cityComboService,
  deleteManagerService,
  getPerticularManagerService,
  storeComboServices,
  insertManagerDetail,
  checkManagerService,
  listManagersService,
  updateManagerService,
  insertManagerService,
} = require('../../service/manager/manager');

const getCityCombo = async (req, res) => {
  try {
    const result = await cityComboService();
    if (result.length === 0) {
      return res.status(404).json({ message: 'Something Went Wrong' });
    } else {
      return res.status(200).json({ result: result });
    }
  } catch (error) {
    logger.logError(error);
    res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

const getStoreCombo = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await storeComboServices(id);
    if (result.length === 0) {
      return res.status(404).json({ message: 'data not found' });
    } else {
      return res.status(200).json({ result: result });
    }
  } catch (error) {
    logger.logError(error);
    res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

const getManager = async (req, res) => {
  res.render('manager/manager', { data: req.user });
};

const manageManager = async (req, res) => {
  try {
    const result1 = await checkManagerService(req.body);
    if (result1.length) {
      return res.status(409).send('already exist');
    } else {
      try {
        const otp = Math.floor(Math.random() * 1000000000000 + 1);
        const result2 = await insertManagerService(otp, req.body);
        const managerDetails = await insertManagerDetail(
          result2,
          req.body,
          req.user
        );
        return res.status(200).send('manager add');
      } catch (error) {
        logger.logError(error);
        return res.status(500).json({ message: 'can`t fetch user controller' });
      }
    }
  } catch (error) {
    logger.logError(error);
    res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

const listManagers = async (req, res) => {
  try {
    let status = req.query.status || 'Active';
    let order = req.query.order || 'asc';
    let field = req.query.field || 'id';
    const result = await listManagersService(status, order, field);

    return res.status(200).json(result);
  } catch (error) {
    logger.logError(error);
    return res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

const updateManager = async (req, res) => {
  try {
    // const checkManger = await checkUpdateManagerService(req.body);
    // if (checkManger.length) {
    //   return res.status(409).send('already exist');
    // } else {
    try {
      // const changeEmail = await changeEmailService(req.body);
      const otp = Math.floor(Math.random() * 1000000000000 + 1);
      const result1 = await updateManagerService(otp, req.body);
      return res.status(200).send('manager add');
    } catch (error) {
      logger.logError(error);
      return res.status(500).json({ message: 'can`t fetch user controller' });
    }
    // }
  } catch (error) {
    logger.logError(error);
    return res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

const getPerticularManager = async (req, res) => {
  try {
    const id = req.params.id;
    const manager = await getPerticularManagerService(id);
    if (manager.length !== 0) {
      return res.status(200).json(manager);
    } else {
      return res.status(404).json({ message: 'Manager not found' });
    }
  } catch (error) {
    logger.logError(error);
    res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

const deleteManager = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteManagerService(id);
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Manager is deleted' });
    } else {
      return res.status(404).json({ message: 'error' });
    }
  } catch (error) {
    logger.logError(error);
    res.status(500).json({ message: 'can`t fetch user controller' });
  }
};

module.exports = {
  getCityCombo,
  deleteManager,
  getStoreCombo,
  manageManager,
  getManager,
  listManagers,
  updateManager,
  getPerticularManager,
};
