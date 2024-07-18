let validation = {
  textOnly: '^[a-zA-Z\\s]+$',
  numberOnly: '^\\d+$',
};
let id = new URLSearchParams(window.location.search).get('id');
const productformData = new FormData(document.getElementById('productForm1'));
let fData = Object.fromEntries(productformData);
let formtitles = Object.keys(fData);
let product;

const fetchApi = async (api) => {
  showLoader();
  let response = await fetch(api);
  let data = await response.json();
  hideLoader();
  return data;
};

const submitData = async () => {
  const productNewformData = new FormData(
    document.getElementById('productForm1')
  );
  let Newdata = {
    product: Object.fromEntries(productNewformData),
    status: true,
    error: [],
  };

  for (let data of formtitles) {
    if (!(data == 'productname' || data == 'description')) {
      if (!Newdata.product[data].trim().match(validation.numberOnly)) {
        Newdata.status = false;
        Newdata.error.push(data);
        document.getElementById(data).classList.add('is-invalid');
        document.getElementById(
          `error${data}`
        ).innerHTML = `<div class="text-danger my-2">Please enter valid ${data}</div>`;
      } else {
        if (Newdata.product[data].trim().length != 6 && data == 'skuid') {
          Newdata.status = false;
          Newdata.error.push(data);
          document.getElementById(data).classList.add('is-invalid');
          document.getElementById(
            `error${data}`
          ).innerHTML = `<div class="text-danger my-2">Please enter valid length of ${data} </div>`;
        } else {
          document.getElementById(`error${data}`).innerHTML = ``;
          document.getElementById(data).classList.remove('is-invalid');
        }
      }
    }
  }
  if (!Newdata.status) {
    Newdata.error.map((e) => {
      document.getElementById(e).focus();
    });
  } else {
    const body = new URLSearchParams();
    Object.entries(Newdata.product).forEach((arr) => {
      body.append(arr[0], arr[1].trim());
    });

    try {
      showLoader();
      let response = await fetch(`/productInfo?id=${id}`, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      });
      let res = await response.json();
      hideLoader();
      if (response.status == 200) {
        messagePopUp(res.message);
        formtitles.forEach((e) => {
          document.getElementById(e).disabled = true;
          document.getElementById(`error${e}`).innerHTML = ``;
          document.getElementById(e).classList.remove('is-invalid');
        });
      } else {
        if (response.status == 500) {
          messagePopUp(res.message);
        } else {
          document.getElementById(res.field).classList.add('is-invalid');
          document.getElementById(
            `error${res.field}`
          ).innerHTML = `<div class="text-danger my-2">Please enter valid ${res.field}</div> `;
          document.getElementById(res.field).focus();
        }
      }
    } catch (err) {
      messagePopUp('Product not updated...');
      console.log(err);
    }
  }
};

const loadData = async () => {
  product = (await fetchApi(`api/productDetails/${id}`))[0] || {};
  const categoryOptions = await generateDropDown(
    'productCategory',
    product?.['categoryId']
  );
  formtitles
    .filter((o) => o != 'category' && o != 'stock')
    .forEach((field) => {
      document.getElementById(field).value = product[field.toLowerCase()];
    });

  let option = document.getElementById('category');
  option.innerHTML = categoryOptions.content;
};
