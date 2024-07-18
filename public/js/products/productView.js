let id = new URLSearchParams(window.location.search).get('id');

const fetchApi = async (api) => {
  showLoader();
  let response = await fetch(api);
  let data = await response.json();
  hideLoader();
  return data;
};

const loadData = async () => {
  const productDetails = (await fetchApi(`api/productAllDetails/${id}`)) || {};
  let storages = '';
  let body = `
  <table cellpadding="15" class="table mt-3">
    ${
      productDetails.deleted
        ? `
    <tr>
      <td colspan="2" style="text-align: right; color: red; font-weight: bolder;">
        DELETED
      </td>
    </tr>
    `
        : ''
    }
    <tr>
      <td>Product Name</td>
      <td>${productDetails.productName || productDetails.productname}</td>
    </tr>
    <tr>
      <td>SKU</td>
      <td>${productDetails.skuid}</td>
    </tr>
    <tr>
      <td>Category</td>
      <td>${productDetails.categoryName}</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>${productDetails.cost}</td>
    </tr>
    <tr>
      <td>Stock</td>
      <td>${productDetails.stock || 0}</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>${productDetails.description}</td>
    </tr>
  </table>
  `;

  productDetails?.storage?.forEach((obj) => {
    storages += `
      <div class="card mb-3" style="cursor: pointer; width: 45%" onclick="window.location.href = '/storeProducts?id=${
        obj?.id
      }'">
        <div class="card-body">
          <div class="card-title">
            <h4>
              ${obj.name}
            </h4>
          </div>
          
          ${
            obj.deleted
              ? `<div class="card-subtitle" style="color: red; font-weight: bolder;">Deleted</div>`
              : ''
          }
          
          <p class="card-text">
            <b>Stock</b> : ${obj.stock}
          </p>
          
          <p class="card-text">
            <b>Location</b> : ${obj.location}
          </p>
          
          ${
            obj.stock == 0
              ? `
              <div class="alert alert-danger w-25" style="text-align: center;" role="alert">
                Out of Stock
              </div>`
              : obj.stock <= 5
              ? `
              <div class="alert alert-danger w-25" style="text-align: center;" role="alert">
                Nearing Stock Out
              </div>`
              : `
              <div class="alert alert-success w-25" style="text-align: center;" role="alert">
                In Stock
              </div>`
          }
        </div>
      </div>
    `;
  });

  const productBody = document.getElementById('productBody');
  const storagesBody = document.getElementById('storages');
  productBody.innerHTML = body;
  storagesBody.innerHTML = storages;
};
