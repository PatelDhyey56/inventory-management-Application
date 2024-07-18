const logger = require('../../logs');
const { getProductStock } = require('../../service/dashboard/dashboard.js');

async function dashboard(req, res) {
  res.render('dashboard/dashboard', { data: req.user });
}
const getApiproductStock = async (req, res) => {
  try {
    let storage = req.user.storageId;
    const [rows] = await getProductStock(storage);
    res.json(rows);
  } catch (err) {
    logger.logError(err);
  }
};
module.exports = { dashboard, getApiproductStock };
