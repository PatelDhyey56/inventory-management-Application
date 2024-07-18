function showFileUpload() {
  const importDataButton = document.querySelector('.importDataButton');
  const customerFileUploadForm = document.getElementById(
    'customerFileUploadForm'
  );
  customerFileUploadForm.style.display = 'block';
  importDataButton.innerHTML = 'Close';
  importDataButton.setAttribute('onclick', 'hideFileUpload()');
}

function hideFileUpload() {
  const importDataButton = document.querySelector('.importDataButton');
  const customerFileUploadForm = document.getElementById(
    'customerFileUploadForm'
  );
  customerFileUploadForm.style.display = 'none';
  importDataButton.innerHTML = 'Import Data';
  importDataButton.setAttribute('onclick', 'showFileUpload()');

  const customersFile = document.getElementById('customersFile');
  if (customersFile) {
    customersFile.value = '';
  }
}

async function customerFileUpload() {
  const customerFileData = document.getElementById('customerFileUploadForm');

  //first check file is select or not
  const customersFile = document.getElementById('customersFile');
  if (customersFile.files.length === 0) {
    const fileerror = document.getElementById('fileerrorSpan');
    if (fileerror) {
      fileerror.remove();
    }
    const fileerrorSpan = document.createElement('span');
    fileerrorSpan.setAttribute('id', 'fileerrorSpan');
    fileerrorSpan.innerHTML = '* please select file';
    fileerrorSpan.style.color = 'red';
    fileerrorSpan.style.padding = '20px';
    customerFileData.appendChild(fileerrorSpan);
  } else {
    const fileerrorSpan = document.getElementById('fileerrorSpan');
    if (fileerrorSpan) {
      fileerrorSpan.remove();
    }
    const formData = new FormData(customerFileData);
    showLoader();
    const response = await fetch('/api/customersFileUpload', {
      method: 'POST',
      body: formData,
    });
    hideLoader();
    try {
      if (!response.ok) {
        throw new Error('Cannot Send File');
      }

      if (response.status === 200) {
        const responseMessage = await response.json();
        const customerFileUploadForm = document.getElementById(
          'customerFileUploadForm'
        );
        customerFileUploadForm.style.display = 'none';
        getCustomers();
        messagePopUp(responseMessage.message);

        //socket implment for delete generated file
        let socket = io();
        socket.emit('unlinkProductPdf', {
          pdfName: responseMessage.filePath,
          folderName: "csvFiles"
        });

        const importDataButton = document.querySelector('.importDataButton');
        importDataButton.innerHTML = 'Import Data';
        //select file value clear
        const customersFile = document.getElementById('customersFile');
        if (customersFile) {
          customersFile.value = '';
        }
      }
    } catch (error) {
      console.log(error);
      const responseMessage = await response.json();

      if (response.status === 400) {
        messagePopUp(responseMessage.message);
      }

      if (response.status === 500) {
        messagePopUp(responseMessage.message);
      }
    }
  }
}
