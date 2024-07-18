const {
  createPurchaseOrder,
  getAllSuppliers,
  getAllProducts,
  getAllWarehouses,
  addProductInPurchaseOrder,
  fetchPurchaseOrder,
  updatePurchaseOrder,
  updateProductInPurchaseOrder,
  deleteProductFromPurchaseOrder,
  getProductsByCategory,
  fetchPurchaseOrders,
  deletePurchaseOrder,
} = require('../../service/purchase');
const { getCombos } = require('../../service/helper');

const patterns = {
  textOnly: '^[a-zA-Z\\s]+$',
  numberOnly: '^\\d+$',
  email: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  date: '^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$',
};

// Pattern Field is optional
const purchaseValidations = {
  form1: {
    name: {
      required: false,
      pattern: patterns.textOnly,
    },
    date: {
      required: true,
      pattern: patterns.date,
      validator: (d) => {
        if (new Date(d) <= new Date()) return true;
        return false;
      },
    },
    storage_id: {
      requried: true,
      pattern: patterns.numberOnly,
    },
    supplier_id: {
      required: true,
      pattern: patterns.numberOnly,
    },
    payment_status: {
      required: false,
      pattern: patterns.numberOnly,
    },
  },
  form2: {
    product_id: {
      required: true,
      pattern: patterns.numberOnly,
    },
    unit_price: {
      required: true,
      pattern: patterns.numberOnly,
      validator: (value) => {
        if (value >= 1 && value <= 9999999) return true;
        return false;
      },
    },
    quantity: {
      required: true,
      pattern: patterns.numberOnly,
      validator: (value) => {
        if (value >= 1 && value <= 9999999) return true;
        return false;
      },
    },
    storage_id: {
      requried: true,
      pattern: patterns.numberOnly,
    },
  },
};

async function fetchCombos(req, res) {
  try {
    res.json(await getCombos(req.params.name));
  } catch (error) {
    res.json({ error });
  }
}

async function fetchSuppliers(_, res) {
  try {
    res.json(await getAllSuppliers());
  } catch (error) {
    res.json({ error });
  }
}

async function fetchProducts(req, res) {
  try {
    if (Number(req.params.id))
      res.json(await getProductsByCategory(req.params.id));
    else res.json({});
  } catch (error) {
    res.json({ error });
  }
}

async function fetchWarehouses(_, res) {
  try {
    res.json(await getAllWarehouses());
  } catch (error) {
    res.json({ error });
  }
}

async function fetchOrderDetails(req, res) {
  try {
    const finalResponse = {};
    const response = await fetchPurchaseOrder({ id: req.params.id });

    if (response.length > 0) {
      finalResponse.purchaseId = response[0].id;
      finalResponse.purchaseName = response[0].name;
      finalResponse.date = response[0].date;
      finalResponse.supplierId = response[0].supplier_id;
      finalResponse.amount = response[0].amount;
      finalResponse.paymentStatus = response[0].payment_status;
      finalResponse.storageId = response[0].storage_id;
      finalResponse.products = [];

      response.forEach((obj) => {
        obj.product_purchase_id &&
          finalResponse.products.push({
            categoryId: obj.category_id,
            purchaseProductId: obj.product_purchase_id,
            productId: obj.product_id,
            unitPrice: obj.unit_price,
            quantity: obj.quantity,
          });
      });
    }

    res.json(finalResponse);
  } catch (error) {
    res.json({ error });
  }
}

async function fetchPurchases(req, res) {
  try {
    const query = new URLSearchParams(req?.query);
    const field = query.get('key') || 'fname';
    const order = query.get('value') || 'asc';
    const payment_status = query.get('payment') || '10';
    const storage_id = req.user.storageId || query.get('storage') || 1;
    const response = await fetchPurchaseOrders({
      field,
      order,
      storage_id,
      payment_status,
    });
    res.json(response);
  } catch (error) {
    res.json({ error });
  }
}

async function showPurchaseOrder(req, res) {
  res.render('purchase', { data: req.user });
}

async function showPurchaseOrders(req, res) {
  res.render('purchase/history', { data: req.user });
}

async function createPurchase(req, res) {
  try {
    res.json(
      await createPurchaseOrder({
        ...req.body,
        ...(req?.user?.storageId ? { storage_id: req?.user?.storageId } : {}),
      })
    );
  } catch (error) {
    res.json({ error });
  }
}

async function updatePurchase(req, res) {
  try {
    res.json(await updatePurchaseOrder({ ...req.body, id: req.params.id }));
  } catch (error) {
    res.json({ error });
  }
}

async function createProductPurchase(req, res) {
  try {
    res.json(
      await addProductInPurchaseOrder({
        ...req.body,
        ...(req?.user?.storageId ? { storage_id: req?.user?.storageId } : {}),
      })
    );
  } catch (error) {
    res.json({ error });
  }
}

async function updateProductPurchase(req, res) {
  try {
    res.json(
      await updateProductInPurchaseOrder({
        ...req.body,
        id: req.params.id,
        ...(req?.user?.storageId ? { storage_id: req?.user?.storageId } : {}),
      })
    );
  } catch (error) {
    res.json({ error });
  }
}

async function deleteProductPurchase(req, res) {
  try {
    res.json(
      await deleteProductFromPurchaseOrder({
        id: req.params.id,
        ...(req?.user?.storageId
          ? { storage_id: req?.user?.storageId }
          : { storage_id: req.params.storageId }),
      })
    );
  } catch (error) {
    res.json({ error });
  }
}

async function deletePurchase(req, res) {
  try {
    res.json(
      await deletePurchaseOrder({
        id: req.params.id,
      })
    );
  } catch (error) {
    res.json({ error });
  }
}

function checkValidation(validation) {
  return ({ body }, res, next) => {
    for (let arr of Object.entries(validation)) {
      const field = arr[0];
      const obj = arr[1];

      const value = body[field]?.trim();
      if (obj.required) {
        if (!value) {
          res.json({
            status: 'error',
            message: `${field} is required!`,
            field,
          });
          return false;
        }
      }

      // Note pattern is optional property
      if (obj?.pattern && value) {
        if (!new RegExp(obj.pattern, 'i').test(value)) {
          res.json({
            status: 'error',
            message: `Invalid input for ${field}!`,
            field,
          });
          return false;
        }
      }

      if (obj?.validator && !obj?.validator(value)) {
        res.json({
          status: 'error',
          message: `Invalid input for ${field}!`,
          field,
        });
        return false;
      }
    }
    next();
  };
}

module.exports = {
  purchaseValidations,
  showPurchaseOrder,
  createPurchase,
  fetchCombos,
  fetchSuppliers,
  fetchProducts,
  fetchWarehouses,
  createProductPurchase,
  fetchOrderDetails,
  updatePurchase,
  updateProductPurchase,
  deleteProductPurchase,
  checkValidation,
  fetchPurchases,
  showPurchaseOrders,
  deletePurchase,
};
