const { getOrderDetail } = require('../../service/salesModule/salesService');
const logger = require('../../logs');
const { fetchPurchaseOrderView } = require('../../service/purchase/index');

const { generateSalesPdf } = require('./pdfGeneration');

const orderHistory = (req, res) => {
  res.render('salesModule/sales', { data: req.user });
};
const newOrder = (req, res) => {
  res.render('salesModule/form', { data: req.user });
};

const invoicePdfView = async (req, res) => {
  try {
    let orderDetails = {};
    let [result, products] = [];
    if (req.query.type == 'invoice') {
      [result, products] = await getOrderDetail(req);
    } else {
      [result, products] = await fetchPurchaseOrderView(req);
    }
    data = result[0];
    let date = new Date(data.order_date);
    data.order_date =
      date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    orderDetails.data = data;
    orderDetails.products = products;
    orderDetails.user = req.use;
    orderDetails.type = req.query.type;
    return res.render('salesModule/invoice', { data, products, user: req.user, type: req.query.type });
  } catch (err) {
    logger.logError(err);
    return res.status(500).json({ message: "Something Went Wrong.." });
  }
};

const invoicePdf = async (req, res) => {
  try {
    let orderDetails = {};
    let [result, products] = [];
    let invoiceType;
    if (req.query.type == 'invoice') {
      [result, products] = await getOrderDetail(req);
      invoiceType = "salesorderinvoice";
    } else {
      [result, products] = await fetchPurchaseOrderView(req);
      invoiceType = "purchaseorderinvoice";
    }
    data = result[0];
    let date = new Date(data.order_date);
    data.order_date =
      date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    orderDetails.data = data;
    orderDetails.products = products;
    orderDetails.user = req.user;
    orderDetails.type = req.query.type;
    const pdfPath = await generateSalesPdf(orderDetails, `${invoiceType}`);
    if (pdfPath) {
      return res.status(200).json({ pdfName: pdfPath });
    } else {
      return res.status(400).json({ message: "Can't generate pdf" });
    }
  } catch (err) {
    logger.logError(err);
    return res.status(500).json({ message: "Something Went Wrong.." });
  }
};

module.exports = { orderHistory, newOrder, invoicePdf, invoicePdfView };
