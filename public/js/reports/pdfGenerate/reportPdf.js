async function reportGenerateOption() {
  const reportGenerateDiv = document.querySelector('.reportGenerate-div');

  //----generate storage combo----------
  //this function is implemented in commonFunction.js file
  /**In this function first parameter is selected option
   * second parameter is if any storage delete then that storage is disable
   */
  const storageOptionos = await generateWarehousesDropDown(1, false);
  if (document.getElementById('storageDetails') !== null) {
    document.getElementById('storageDetails').innerHTML = storageOptionos;
  }

  //----now create report option
  const optionArrayForRadio = [
    {
      type: 'radio',
      id: 'productDetails',
      class: 'productDetails productRadioButton',
      value: 'product_details',
      textContent: 'Product',
      onclick: 'addProductCategory()',
    }
  ];
  // {
  //   type: 'radio',
  //   id: 'supplierDetails',
  //   class: 'supplierDetails supplierRadioButton',
  //   value: 'supplier_details',
  //   textContent: 'Supplier',
  //   onclick: '',
  // },
  const createReportOptionDiv = document.createElement('div');
  createReportOptionDiv.setAttribute('class', 'reportOptionDiv');

  const createPTitle = document.createElement('p');
  createPTitle.innerHTML = 'Please Select Option For Generate Report';
  createPTitle.setAttribute('class', 'reportGenerateTitle');

  createReportOptionDiv.appendChild(createPTitle);

  const createSelect = document.createElement('select');
  createSelect.setAttribute('id', 'selectReportOption');
  createSelect.setAttribute('onchange', 'selectReportOption(this)');
  const createOption = document.createElement('option');
  createOption.setAttribute('value', '');
  createOption.textContent = 'Select Report Option';
  createOption.selected = true;
  createOption.disabled = true;
  createSelect.appendChild(createOption);

  for (let element of optionArrayForRadio) {
    const createOption = document.createElement('option');
    createOption.setAttribute('value', `${element.value}`);
    createOption.textContent = element.textContent;
    createSelect.appendChild(createOption);
  }
  createReportOptionDiv.appendChild(createSelect);
  reportGenerateDiv.appendChild(createReportOptionDiv);
}

function selectReportOption(optionSelect) {
  if (optionSelect.selectedIndex === 0) {
    messagePopUp('Please Select Report Generate Option');
  } else {
    switch (optionSelect.value) {
      case 'product_details':
        addProductCategory();
        break;
      case 'supplier_details':
        const createDivCategory = document.querySelector('.createDivCategory');
        if (createDivCategory) {
          createDivCategory.innerHTML = '';
        }
        break;
    }
  }
}
async function addProductCategory() {
  const createDivCategory = document.querySelector('.createDivCategory');
  if (createDivCategory) {
    createDivCategory.remove();
  }

  //----fetch all product category available in database
  //database select_master key name pass
  const comboKeyName = { key: 'productCategory' };
  showLoader();
  const response = await fetch('/api/combos', {
    method: 'POST',
    body: JSON.stringify(comboKeyName),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  hideLoader();
  try {
    if (!response.ok) {
      throw new Error("Can't fetch combo");
    }

    if (response.status === 200) {
      const responseDataArray = await response.json();
      // console.log(responseDataArray);

      //now generate checkbox
      const reportGenerateDiv = document.querySelector('.reportGenerate-div');
      const createDivCategory = document.createElement('div');
      createDivCategory.setAttribute('class', 'createDivCategory');

      const createSelect = document.createElement('select');
      createSelect.setAttribute('onchange', 'addCustomizeOptionSelect()');
      createSelect.setAttribute('id', 'productCategorySelect');
      const createOptionTitle = document.createElement('option');
      createOptionTitle.setAttribute('value', '');
      createOptionTitle.innerHTML = 'Select Category';
      createSelect.appendChild(createOptionTitle);
      createOptionTitle.disabled = true;
      createOptionTitle.selected = true;
      responseDataArray.forEach((element, index) => {
        const createOption = document.createElement('option');
        createOption.setAttribute('id', `customizeOptionheckBox${index}`);
        createOption.setAttribute('class', 'customizeOptionheckBox');
        createOption.setAttribute('name', 'customizeOptionheckBox');
        createOption.setAttribute('value', `${element.value}`);
        createOption.textContent = `${element.value}`;
        createSelect.appendChild(createOption);
      });
      // const createOptionAll = document.createElement("option");
      // createOptionAll.setAttribute("value", "");
      // createOptionAll.innerHTML = "All Category";
      // createSelect.appendChild(createOptionAll);

      createDivCategory.appendChild(createSelect);
      reportGenerateDiv.appendChild(createDivCategory);
    }
  } catch (error) {
    console.log(error);
    const responseMessage = await response.json();

    if (response.status === 404) {
      messagePopUp(responseMessage.message);
    }

    if (response.status === 500) {
      messagePopUp(responseMessage.message);
    }
  }
}

function addCustomizeOptionSelect() {
  const customizeOptionSelect = document.getElementById(
    'customizeOptionSelect'
  );
  const customizeOptionDiv = document.getElementById('customizeOptionDiv');
  if (customizeOptionSelect) {
    customizeOptionSelect.remove();
  }
  if (customizeOptionDiv) {
    customizeOptionDiv.remove();
  }
  const createDivCategory = document.querySelector('.createDivCategory');
  const createSelect = document.createElement('select');
  createSelect.setAttribute('id', 'customizeOptionSelect');
  createSelect.setAttribute('onchange', 'addCustomizeOption()');

  const optionArray = [
    'Select Report Type',
    'Product Details',
    'Out Of Stock Products',
  ];
  for (let element of optionArray) {
    const createOption = document.createElement('option');
    createOption.setAttribute('value', `${element}`);
    createOption.innerHTML = `${element}`;
    createSelect.appendChild(createOption);
    switch (element) {
      case 'Select Report Type':
        createOption.disabled = true;
        createOption.selected = true;
        break;
    }
  }
  createDivCategory.appendChild(createSelect);
}

function addCustomizeOption() {
  const customizeOptionSelect = document.getElementById(
    'customizeOptionSelect'
  );

  if (customizeOptionSelect.selectedIndex > 0) {
    const selectOptionValue = customizeOptionSelect.value;

    switch (selectOptionValue) {
      case 'Product Details':
        addCustomizeOptionProductDetails();
        break;
      case 'Out Of Stock Products':
        addCustomizeOptionOutOfStockProduct();
        break;
      default:
        const customizeOptionDiv =
          document.getElementById('customizeOptionDiv');
        customizeOptionDiv.remove();
        messagePopUp('Please Select Valid Report Type');
    }
  } else {
    const customizeOptionDiv = document.getElementById('customizeOptionDiv');
    customizeOptionDiv.remove();
    messagePopUp('Please Select Report Type');
  }
}

function addCustomizeOptionProductDetails() {
  // const reportGenerateDiv = document.querySelector(".reportGenerate-div");

  //before add new customize option clear div
  const customizeDiv = document.getElementById('customizeOptionDiv');
  const createDivCategory = document.querySelector('.createDivCategory');

  if (customizeDiv) {
    customizeDiv.remove();
  }

  const customizeOptionDiv = document.createElement('div');
  customizeOptionDiv.setAttribute('id', 'customizeOptionDiv');

  //---create check box
  const customizeOptionArray = [
    {
      type: 'checkbox',
      id: 'productCustomizeOption1',
      class: 'productCustomizeOption',
      name: 'productCustomizeOption',
      value: 'product_name',
      textContent: 'Product Name',
    },
    {
      type: 'checkbox',
      id: 'productCustomizeOption2',
      class: 'productCustomizeOption',
      name: 'productCustomizeOption',
      value: 'stock',
      textContent: 'Stock',
    },
    {
      type: 'checkbox',
      id: 'productCustomizeOption3',
      class: 'productCustomizeOption',
      name: 'productCustomizeOption',
      value: 'sku_id',
      textContent: 'SKU ID',
    },
    {
      type: 'checkbox',
      id: 'productCustomizeOption4',
      class: 'productCustomizeOption',
      name: 'productCustomizeOption',
      value: 'cost',
      textContent: 'Selling Cost',
    },
  ];

  for (let element of customizeOptionArray) {
    const createCheckboxDiv = document.createElement('div');
    const checkBox = document.createElement('input');
    const labelForCheckBox = document.createElement('label');
    checkBox.setAttribute('type', `${element.type}`);
    checkBox.setAttribute('id', `${element.id}`);
    checkBox.setAttribute('class', `${element.class}`);
    checkBox.setAttribute('name', `${element.name}`);
    checkBox.setAttribute('value', `${element.value}`);

    labelForCheckBox.setAttribute('for', `${element.id}`);
    labelForCheckBox.innerHTML = element.textContent;
    createCheckboxDiv.appendChild(labelForCheckBox);
    createCheckboxDiv.appendChild(checkBox);
    customizeOptionDiv.appendChild(createCheckboxDiv);
  }

  const generateButton = document.createElement('p');
  generateButton.innerHTML = 'Generate PDF';
  generateButton.setAttribute('onclick', 'generateReport()');
  generateButton.setAttribute('class', 'generatePdfButton');
  createDivCategory.appendChild(customizeOptionDiv);
  customizeOptionDiv.appendChild(generateButton);
}

async function generateReport() {
  const productCustomizeOption = document.querySelectorAll(
    '.productCustomizeOption'
  );

  const productCategorySelect = document.getElementById(
    'productCategorySelect'
  );
  const customizeOptionSelect = document.getElementById(
    'customizeOptionSelect'
  );

  const productDetailsObject = {};
  const databaseObject = {};
  const productMaster = [];
  const productDetails = [];
  const purchaseProducts = [];

  if (productCustomizeOption.length > 0) {
    for (let element of productCustomizeOption) {
      if (element.checked) {
        switch (element.value) {
          case 'product_name':
            productMaster.push('product_name');
            break;
          case 'sku_id':
            productMaster.push('sku_id');
            break;
          case 'cost':
            productMaster.push('cost');
            break;
          case 'stock':
            productDetails.push('stock');
            break;
        }
      }
    }

    if (
      productMaster.length === 0 &&
      productDetails.length === 0 &&
      purchaseProducts.length === 0
    ) {
      messagePopUp('Please select options');
    } else {
      if (productMaster.length !== 0) {
        databaseObject.product_master = productMaster;
      }
      if (productDetails.length !== 0) {
        databaseObject.products_details = productDetails;
      }
      if (purchaseProducts.length !== 0) {
        databaseObject.purchase_products = purchaseProducts;
      }

      if (productCategorySelect && customizeOptionSelect) {
        productDetailsObject.databaseObject = databaseObject;
        productDetailsObject.categoryName = productCategorySelect.value;
        productDetailsObject.reportType = customizeOptionSelect.value;
      }
    }
  }
  const storageDetails = document.getElementById('storageDetails');
  if (storageDetails) {
    productDetailsObject.selectStorageId = storageDetails.value;
  }
  if (Object.keys(databaseObject).length > 0) {
    showLoader();
    const response = await fetch('/reportGenerate', {
      method: 'POST',
      body: JSON.stringify(productDetailsObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    hideLoader();
    try {
      if (!response.ok) {
        throw new Error('PDF Generate Error');
      }

      if (response.status === 200) {
        const pdfResponse = await response.json();
        // console.log(pdfResponse.pdfName);

        const customizeOptionDiv =
          document.getElementById('customizeOptionDiv');
        const createA = document.createElement('a');
        createA.setAttribute(
          'href',
          `${window.location.origin}/uploads/pdfFiles/${pdfResponse.pdfName}`
        );
        createA.setAttribute('download', `${pdfResponse.pdfName}`);
        createA.setAttribute('id', 'pdfDownloadButton');
        createA.setAttribute('class', 'pdfDownloadButton');
        createA.innerHTML = 'Download PDF';
        customizeOptionDiv.appendChild(createA);

        //now generate pdf button remove
        const generatePdfButton = document.querySelector('.generatePdfButton');
        if (generatePdfButton) {
          generatePdfButton.remove();
        }
        document
          .getElementById('pdfDownloadButton')
          .addEventListener('click', function () {
            //socket implment for delete generated file
            let socket = io();
            socket.emit('unlinkProductPdf', {
              pdfName: pdfResponse.pdfName,
              folderName: "pdfFiles"
            });

            //--reset
            const customizeOptionDiv =
              document.getElementById('customizeOptionDiv');
            const productCategorySelect = document.getElementById(
              'productCategorySelect'
            );
            const customizeOptionSelect = document.getElementById(
              'customizeOptionSelect'
            );
            productCategorySelect.selectedIndex = 0;
            customizeOptionSelect.selectedIndex = 0;

            customizeOptionDiv.remove();
          });
      }
    } catch (error) {
      console.log(error);
      const responseMessage = await response.json();
      if (response.status === 404) {
        messagePopUp(responseMessage.message);
      }
      if (response.status === 500) {
        messagePopUp(responseMessage.message);
      }
    }
  }
}
