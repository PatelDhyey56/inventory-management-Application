const logger = require('../../logs');
const {
  getOrderreport,
  getApiordersProduct,
  getOrderreportBydate,
  getOrderDayreportDay,
  getOrderDayreportMonth,
} = require('../../service/report/orderReportService');

const getorderReport = (req, res) => {
  res.render('reports/orderReport', { data: req.user });
};

const getorderProducts = (req, res) => {
  res.render('reports/orderProduct', { data: req.user });
};

const getApiorderRreport = async (req, res) => {
  try {
    let queryLength = Object.keys(req.query).length;
    let storage = req.user.storageId;
    if (queryLength === 0) {
      const [rows] = await getOrderreport(storage);
      res.json(rows);
    } else if (queryLength == 1) {
      let query = Object.keys(req.query);
      if (query[0] == 'day') {
        const [rows] = await getOrderDayreportDay(req.query[query[0]], storage);
        res.json(rows);
      } else {
        const [rows] = await getOrderDayreportMonth(
          req.query[query[0]],
          storage
        );
        res.json(rows);
      }
    } else {
      let fromDate = req.query.fromDate;
      let toDate = req.query.toDate;
      const [rows] = await getOrderreportBydate(fromDate, toDate, storage);
      res.json(rows);
    }
  } catch (err) {
    logger.logError(err);
  }
};

const getApiordersProductRreport = async (req, res) => {
  try {
    let id = req.query.id;
    const [rows] = await getApiordersProduct(id);
    res.json(rows);
  } catch (err) {
    logger.logError(err);
  }
};
module.exports = {
  getorderReport,
  getorderProducts,
  getApiorderRreport,
  getApiordersProductRreport,
};
