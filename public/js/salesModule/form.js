let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let id = params.get('id');
let storage = params.get('storage');
async function onLoad() {
  if (document.getElementById('storageCombo') != null) {
    const storageOptionos = await generateWarehousesDropDown();
    document.getElementById('storageCombo').innerHTML = storageOptionos;
  }
  if (id != null) {
    await fetchUpdate(id);
  }
}
onLoad();

async function fetchUpdate(id) {
  url = `/salesorder?col=sales_order.id&colValue=${id}&storage=${storage}`;
  let [result, response] = await commonFetch(url);
  updateOrderForm(result, id);
}

async function commonFetch(url, option) {
  showLoader();
  const response = await fetch(url, option);
  const result = await response.json();
  hideLoader();
  return [result, response];
}
// function displayProductForm() {
// 	document.getElementById('productFormDiv').style.display='block'
// }
const displayProductForm = () => {
  let insertForm = document.getElementById('insertFormDiv');
  let productForm = document.getElementById('productFormDiv');
  productForm.style.display = 'block';
  insertForm.style.display = 'none';
};
