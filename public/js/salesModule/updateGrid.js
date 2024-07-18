async function updateOrder(type, event, page, orderType) {
  let deleteModal;
  let url = '';
  let editModalName;

  switch (page) {
    case 'order':
      url = 'salesNewOrder';
      deleteModal = 'deleteModal';
      break;
    case 'product':
      deleteModal = 'deleteModal';
      editModalName = 'productEdit';
      break;
  }
  let storage = event.target.getAttribute('id').split(`${type}`)[0];
  let id = event.target.getAttribute('id').split(`${type}`)[1];
  let modal = new bootstrap.Modal(document.getElementById(`${deleteModal}`));

  if (type == 'edit' && page == 'order') {
    window.location.href = `/${url}?id=${id}&storage=${storage}`;
  } else if (type == 'delete') {
    let confirm = document.getElementById('confirm'); //confirm btn id
    confirm.setAttribute('onclick', `deleteOrder(${id},'${page}','${storage}','${orderType}')`);
    modal.show();
  }
}

async function fetchDelete(id, page, storage, orderType) {
  let url = '';

  switch (page) {
    case 'order':
      url = 'deleteSalesOrder';
      break;
    case 'product':
      url = 'deleteSalesProduct';
      break;
  }
  const response = await fetch(`/${url}?id=${id}&storage=${storage}&orderType=${orderType}`);
  const result = await response.json();
  hideLoader();
  return;
}
function modelHide(modelName) {
  bootstrap.Modal.getInstance(document.getElementById(`${modelName}`)).hide();
}

async function deleteOrder(id, page, storage, orderType) {
  await fetchDelete(id, page, storage, orderType);
  modelHide('deleteModal');
  fetching();
}
