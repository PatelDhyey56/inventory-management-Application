const logger = require('../../logs');
const {
  getProductreport,
  getCategotyreport,
} = require('../../service/report/selesReportService');

const getsalesReport = (req, res) => {
  res.render('reports/salesReport', { data: req.user });
};
const getReportallProducts = (req, res) => {
  res.render('reports/allProducts', { data: req.user });
};
const getApiproductreport = async (req, res) => {
  try {
    let storage = req.user.storageId;
    const [rows] = await getProductreport(storage);
    res.json(rows);
  } catch (err) {
    logger.logError(err);
  }
};

const getApicategoryreport = async (req, res) => {
  try {
    let storage = req.user.storageId;
    const [rows] = await getCategotyreport(storage);
    res.json(rows);
  } catch (err) {
    logger.logError(err);
  }
};
module.exports = {
  getsalesReport,
  getReportallProducts,
  getApiproductreport,
  getApicategoryreport,
};
