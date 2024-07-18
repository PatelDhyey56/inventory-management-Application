function generateSuppliersDropDown(id = null) {
  return fetch('api/purchase/suppliers')
    .then((res) => res.json())
    .then((data) => {
      let content = '';
      data.forEach((o) => {
        content += `<option value="${o.id}" ${
          o.id == id ? 'selected="selected"' : ''
        } ${o.is_delete ? 'disabled="true"' : ''}>${o?.firstname.concat(
          ' ',
          o?.lastname
        )}</option>`;
      });
      return content;
    })
    .catch(() => '');
}

function generateProductsDropDown(id, selectedId) {
  return id
    ? fetch('api/purchase/products/' + id)
        .then((res) => res.json())
        .then((data) => {
          let content = '';
          data.forEach((o) => {
            content += `<option value="${o.id}" ${
              o.id == selectedId ? 'selected="selected"' : ''
            } ${o.deleted ? 'disabled="true"' : ''} >${
              o.product_name
            }</option>`;
          });
          return content;
        })
        .catch(() => '')
    : '';
}
