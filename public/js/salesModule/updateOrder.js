function updateOrderForm(result, id) {
  let customer = document.getElementById('customer');
  let shippingAddress = document.getElementById('shippingAddress');
  let paymentStatus = document.getElementsByName('paymentStatus');
  let date = document.getElementById('date');
  let orderid = document.getElementById('orderid');
  orderid.value = id;

  if (document.getElementById('storageCombo') != null) {
    let storageCombo = document.getElementById('storageCombo');
    for (op of storageCombo) {
      if (op.value == result[0].storage_id) {
        op.setAttribute('selected', true);
      }
    }
  }
  for (op of customer) {
    if (op.value == result[0].customer_id) {
      op.setAttribute('selected', true);
    }
  }
  shippingAddress.innerHTML = result[0].shipping_address;
  for (op of paymentStatus) {
    if (op.value == result[0].payment_status) {
      op.setAttribute('selected', true);
    }
  }
  let d = new Date(result[0].order_date);
  let dtOffset = new Date(d.setMinutes(d.getMinutes() - d.getTimezoneOffset()));
  date.value = dtOffset.toISOString().split('T')[0];
}