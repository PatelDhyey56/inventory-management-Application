function addCustomizeOptionOutOfStockProduct() {
  //before add new customize option clear div
  const customizeDiv = document.getElementById('customizeOptionDiv');
  const createDivCategory = document.querySelector('.createDivCategory');

  if (customizeDiv) {
    customizeDiv.remove();
  }

  const customizeOptionDiv = document.createElement('div');
  customizeOptionDiv.setAttribute('id', 'customizeOptionDiv');

  //create input tag for stock maximum quantity
  const createDiv = document.createElement('div');
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.setAttribute('id', 'maximumStock');
  createInput.setAttribute('placeholder', 'Enter Maximum Stock Qunatity');
  createDiv.appendChild(createInput);
  customizeOptionDiv.appendChild(createDiv);

  const generateButton = document.createElement('p');
  generateButton.innerHTML = 'Generate PDF';
  generateButton.setAttribute('onclick', 'generateReportOutOfStockProduct()');
  generateButton.setAttribute('class', 'generatePdfButton');
  customizeOptionDiv.appendChild(generateButton);
  createDivCategory.appendChild(customizeOptionDiv);
}

async function generateReportOutOfStockProduct() {
  const productCategorySelect = document.getElementById(
    'productCategorySelect'
  );
  const customizeOptionSelect = document.getElementById(
    'customizeOptionSelect'
  );

  const productDetailsObject = {};

  if (productCategorySelect.selectedIndex > 0) {
    const maximumStock = document.getElementById('maximumStock');
    if (maximumStock.value.length === 0) {
      messagePopUp('Please Enter Maximum Stock Qunatity');
    } else if (
      (isNaN(maximumStock.value) || maximumStock.value.trim().length === 0) &&
      maximumStock.value !== ''
    ) {
      messagePopUp('Please Enter Maximum Stock Qunatity In Number Only');
    } else {
      productDetailsObject.maximumQunatity = maximumStock.value;
      productDetailsObject.categoryName = productCategorySelect.value;
      productDetailsObject.reportType = customizeOptionSelect.value;

      const storageDetails = document.getElementById('storageDetails');
      if (storageDetails) {
        productDetailsObject.selectStorageId = storageDetails.value;
      }
      showLoader();
      const response = await fetch('/api/outOfStockProductReport', {
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
          const generatePdfButton =
            document.querySelector('.generatePdfButton');
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
  } else {
    messagePopUp('Please Select Product Category');
  }
}
