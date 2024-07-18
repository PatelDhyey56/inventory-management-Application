let orderId =
  Number(new URLSearchParams(location.search)?.get('orderId')) ?? undefined;
let orderDetails;

const admin = document.getElementById('admin');

const modal = new bootstrap.Modal('#deleteModal');

const maxDate = new Date().toISOString().split('T')[0];

async function generateForm1(oId = null) {
  await getOrderDetails(oId);

  const paymentOptions = (
    await generateDropDown('paymentStatus', orderDetails?.paymentStatus)
  ).content;

  const supplierOptions = await generateSuppliersDropDown(
    orderDetails?.supplierId
  );

  const storageOptions = await generateWarehousesDropDown(
    orderDetails?.storageId
  );

  const root = document.getElementById('root');

  let content = `
	<form>
		<div class="form-floating mb-3">
			<input name="name" type="text" class="form-control" id="floatingName" placeholder="name"
				${orderDetails?.purchaseName ? `value = "${orderDetails?.purchaseName}"` : ''}
			>
			<label for="floatingName">Order name</label>
			<div class="invalid-feedback">
				Please enter a valid purchase order name.
			</div>
		</div>
		<div class="form-floating mb-3">
			<input name="date" type="date" class="form-control" id="floatingDate" placeholder="date"
      max="${maxDate}"
				${
          orderDetails?.date
            ? `value = "${new Date(orderDetails?.date)
                .toLocaleDateString()
                .split('/')
                .reverse()
                .join('-')}"`
            : ''
        }
			>
			<label for="floatingDate">Date</label>
			<div class="invalid-feedback">
				Please enter a valid date.
			</div>
		</div>
    ${
      admin
        ? `<div class="form-floating mb-3">
            <select name="storage_id" class="form-select" aria-label="select" id="floatingStorage"
              ${orderDetails?.purchaseId ? 'disabled' : ''}
            >
              ${storageOptions}
            </select>
            <label for="floatingStorage">Storage</label>
            <div class="invalid-feedback">
              Please select a valid storage space.
            </div>
          </div>`
        : ''
    }
		<div class="form-floating mb-3">
			<select name="supplier_id" class="form-select" aria-label="select" id="floatingSupplier"
        ${orderDetails?.purchaseId ? 'disabled' : ''}
      >
				${supplierOptions}
			</select>
			<label for="floatingSupplier">Supplier</label>
			<div class="invalid-feedback">
				Please select a valid supplier.
			</div>
		</div>
		<div class="form-floating mb-3">
			<select name="payment_status" class="form-select" aria-label="select" id="floatingPaymentStatus">
				${paymentOptions}
			</select>
			<label for="floatingPaymentStatus">Payment</label>
			<div class="invalid-feedback">
				Please select a valid payment status.
			</div>
		</div>
	</form>
	<div class="d-flex mt-5 justify-content-center">
		${
      orderDetails?.purchaseId
        ? `<button
					type="button"
					class="btn btn-primary me-3"
					onclick="submitForm1(1)"
					>
						Update
					</button>

					<button
					type="button"
					class="btn btn-secondary"
					onclick="generateForm2()"
					>
						Next
					</button>`
        : `<button
					type="button"
					class="btn btn-primary"
					onclick="submitForm1()"
					>
						Submit
					</button>`
    }
		
	</div>`;

  root.innerHTML = content;
}

async function submitForm1(update = false) {
  document.getElementsByTagName('form')[0].classList.add('was-validated');
  const nameElement = document.getElementsByName('name')[0];
  const dateElement = document.getElementsByName('date')[0];
  const storageElement = admin
    ? document.getElementsByName('storage_id')[0]
    : {};
  const supplierElement = document.getElementsByName('supplier_id')[0];
  const paymentElement = document.getElementsByName('payment_status')[0];

  // Clear Errors
  Array([
    nameElement,
    dateElement,
    storageElement,
    supplierElement,
    paymentElement,
  ]).forEach((ele) => (ele.required = false));

  const data = {
    name: nameElement.value,
    date: dateElement.value,
    supplier_id: supplierElement.value,
    payment_status: paymentElement.value,
    ...(admin ? { storage_id: storageElement.value } : {}),
  };

  if (
    checkValidation(data, {
      ...validation.form1,
      ...(!admin ? { storage_id: { required: false } } : {}),
    })
  ) {
    try {
      const body = new URLSearchParams();

      Object.entries(data).forEach((arr) => {
        body.append(arr[0], arr[1]);
      });
      showLoader();
      const response = await fetch(
        `api/purchase/order${update ? '/' + orderDetails.purchaseId : ''}`,
        {
          method: update ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        }
      );

      const result = await response.json();
      hideLoader();
      if (result.insertId && !orderId) {
        orderId = result.insertId;
      } else if (
        result.status == 'error' ||
        (!result.length && result instanceof Array)
      ) {
        return;
      }

      await generateForm2();
    } catch (error) {
      console.log(error);
    }
  }
}

async function generateForm2() {
  await getOrderDetails(orderId);
  const categoryData = await generateDropDown('productCategory');

  const root = document.getElementById('root');

  let content = `
  <div class="d-flex mb-5 justify-content-end">
		<button
			type="button"
			class="btn btn-outline-dark"
			id="addProducts"
		>
			+ Add
		</button>
	</div>

	<form class="was-validated">
	</form>

	<div class="d-flex mt-5 justify-content-center flex-wrap">
    <h6 class="w-100 text-center">
      Total Amount is ${orderDetails?.amount || 0}
    </h6>
		<button
			type="button"
			class="btn btn-secondary me-3"
			onclick="generateForm1(orderId)"
		>
			Back
		</button>

		<button
			type="button"
			class="btn btn-primary"
			onclick="window.location.href = '/purchaseOrder'"
		>
			Finish
		</button>
	</div>`;

  root.innerHTML = content;
  document.getElementById('addProducts').addEventListener('click', async () => {
    document.getElementById('addProducts').disabled = true;
    Array.from(document.getElementsByClassName('custom-disabled')).forEach(
      (ele) => (ele.disabled = true)
    );
    generateAddProductRows(
      await generateProductsDropDown(categoryData.data[0].opt_id),
      categoryData.content
    );
  });

  if (!orderDetails?.products.length) {
    document.getElementById('addProducts').click();
  } else {
    paggination(null, orderDetails?.products);
  }
}

async function getOrderDetails(id) {
  if (id) {
    showLoader();
    const response = await fetch(`api/order/${id}`);
    orderId = id;
    orderDetails = await response.json();
    hideLoader();
  }
}

function generateAddProductRows(
  productOptions,
  categoryOptions,
  purchaseProductId = null,
  productDetails = null
) {
  document.querySelector('form').innerHTML += `
  	<div class="container">
		<div class="row align-items-center mb-3">
			<div class="col">
				<div class="form-floating">
					<select class="form-select custom-disabled" aria-label="select" id="floatingCategories" name="category" required
						${
              productDetails?.categoryId
                ? 'disabled'
                : 'onchange="onCategoryChange(event)"'
            }
					>
            ${categoryOptions}
					</select>
					<label for="floatingCategories">Category</label>
					<div class="invalid-feedback">
						Please select a valid category.
					</div>
				</div>
			</div>
			<div class="col">
				<div class="form-floating">
					<select class="form-select custom-disabled" aria-label="select" id="floatingProducts" name="product_id" required
            ${productDetails?.productId ? 'disabled' : ''}
          >
						${productOptions}
					</select>
					<label for="floatingProducts">Product</label>
					<div class="invalid-feedback">
						Please select a valid product.
					</div>
				</div>
			</div>
			<div class="col">
				<div class="form-floating">
					<input type="number" class="form-control custom-disabled" id="floatingUnitPrice" placeholder="unitPrice" min="1"
            max="9999999"
            name="unit_price" required
						${productDetails?.unitPrice ? `value = "${productDetails?.unitPrice}"` : ''}
					>
					<label for="floatingUnitPrice">Unit Price</label>
					<div class="invalid-feedback">
						Please enter a valid price.
					</div>
				</div>
			</div>
			<div class="col">
				<div class="form-floating">
					<input type="number" class="form-control custom-disabled" id="floatingQuantity" placeholder="quantity" min="1"
            max="9999999"
            name="quantity" required
						${productDetails?.quantity ? `value = "${productDetails?.quantity}"` : ''}
					>
					<label for="floatingQuantity">Quantity</label>
					<div class="invalid-feedback">
						Please enter a valid quantity.
					</div>
				</div>
			</div>
			<div class="w-auto">
				<button type="button" class="btn btn-success custom-disabled" onclick="saveProduct(event,${purchaseProductId})">
          ${purchaseProductId ? 'Update' : 'Save'}
        </button>
			</div>
			<div class="w-auto">
				<button type="button" class="btn btn-danger custom-disabled" onclick="deleteProduct(event,${purchaseProductId})">Delete</button>
			</div>
		</div>
	</div>`;
}

async function onCategoryChange(e) {
  let productOptions = await generateProductsDropDown(e.target.value);
  e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].value =
    '';
  e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML =
    productOptions;
}

async function saveProduct(e, purchaseProductId = null) {
  const productElement =
    e.target.parentElement.parentElement.children[1].children[0].children[0];

  const unitPriceElement =
    e.target.parentElement.parentElement.children[2].children[0].children[0];

  const quantityElement =
    e.target.parentElement.parentElement.children[3].children[0].children[0];

  // Clear Errors
  Array([productElement, unitPriceElement, quantityElement]).forEach(
    (ele) => (ele.required = false)
  );

  const data = {
    product_id: productElement.value,
    unit_price: unitPriceElement.value,
    quantity: quantityElement.value,
  };

  const validationResult = checkValidation(data, validation.form2, true);

  if (validationResult.length) {
    validationResult.forEach((obj) => {
      switch (obj.field) {
        case 'product_id':
          productElement.required = true;
          break;
        case 'unit_price':
          unitPriceElement.required = true;
          break;
        case 'quantity':
          quantityElement.required = true;
          break;
      }
    });
  } else {
    try {
      data.purchase_id = orderId;

      const body = new URLSearchParams();

      Object.entries(data).forEach((arr) => {
        body.append(arr[0], arr[1]);
      });
      if (admin) {
        body.append('storage_id', orderDetails?.storageId);
      }

      showLoader();

      const response = await fetch(
        `api/purchase/product${
          purchaseProductId ? '/' + purchaseProductId : ''
        }`,
        {
          method: purchaseProductId ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        }
      );

      const result = await response.json();
      hideLoader();
      if (result.status == 'error') {
        return;
      }

      await getOrderDetails(orderId);
      await generateForm2();
      messagePopUp('Product updated successfully.');
    } catch (error) {
      console.log(error);
    }
  }
}

async function deleteProduct(e, purchaseProductId = null) {
  modal.show();

  // Setting onclick so that we don't need to explicity remove click listener once called.
  document.getElementById('confirm').onclick = async () => {
    e.target.parentElement.parentElement.parentElement.remove();
    if (purchaseProductId) {
      showLoader();
      const response = await fetch(
        `api/purchase/product/${purchaseProductId}/${orderDetails?.storageId}`,
        {
          method: 'DELETE',
        }
      );
      await response.json();
      hideLoader();
      await getOrderDetails(orderId);
    }
    modal.hide();
    await generateForm2();
  };
}

function modelHide() {
  modal.hide();
}

generateForm1(orderId);
