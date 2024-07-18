const logger = require('../../logs');
const {
  getpurchaseProductreport,
} = require('../../service/report/purchaseReportService');

const getpurchaseReport = (req, res) => {
  res.render('reports/purchaseReport', { data: req.user });
};
const getApiproductPurchasereport = async (req, res) => {
  try {
    let storage = req.user.storageId;
    const [rows] = await getpurchaseProductreport(storage);
    res.json(rows);
  } catch (err) {
    logger.logError(err);
  }
};
module.exports = { getpurchaseReport, getApiproductPurchasereport };
