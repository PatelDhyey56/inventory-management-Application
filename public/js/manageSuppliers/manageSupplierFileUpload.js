function showFileUpload() {
  const importDataButton = document.querySelector('.importDataButton');
  const supplierFileUploadForm = document.getElementById(
    'supplierFileUploadForm'
  );
  supplierFileUploadForm.style.display = 'block';
  importDataButton.innerHTML = 'Close';
  importDataButton.setAttribute('onclick', 'hideFileUpload()');
}

function hideFileUpload() {
  const importDataButton = document.querySelector('.importDataButton');
  const supplierFileUploadForm = document.getElementById(
    'supplierFileUploadForm'
  );
  supplierFileUploadForm.style.display = 'none';
  importDataButton.innerHTML = 'Import Data';
  importDataButton.setAttribute('onclick', 'showFileUpload()');

  const suppliersFile = document.getElementById('suppliersFile');
  if (suppliersFile) {
    suppliersFile.value = '';
  }
}

async function supplierFileUpload() {
  const supplierFileData = document.getElementById('supplierFileUploadForm');

  //first check file is select or not
  const suppliersFile = document.getElementById('suppliersFile');
  if (suppliersFile.files.length === 0) {
    const fileerror = document.getElementById('fileerrorSpan');
    if (fileerror) {
      fileerror.remove();
    }
    const fileerrorSpan = document.createElement('span');
    fileerrorSpan.setAttribute('id', 'fileerrorSpan');
    fileerrorSpan.innerHTML = '* please select file';
    fileerrorSpan.style.color = 'red';
    fileerrorSpan.style.padding = '20px';
    supplierFileData.appendChild(fileerrorSpan);
  } else {
    const fileerrorSpan = document.getElementById('fileerrorSpan');
    if (fileerrorSpan) {
      fileerrorSpan.remove();
    }
    const formData = new FormData(supplierFileData);
    showLoader();
    const response = await fetch('/api/suppliersFileUpload', {
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
        const supplierFileUploadForm = document.getElementById(
          'supplierFileUploadForm'
        );

        supplierFileUploadForm.style.display = 'none';
        getSuppliers();
        messagePopUp(responseMessage.message);

        //socket implment for delete generated file
        let socket = io();
        socket.emit('unlinkProductPdf', {
          pdfName: responseMessage.filePath,
          folderName: "csvFiles"
        });

        const importDataButton = document.querySelector('.importDataButton');
        importDataButton.innerHTML = 'Import Data';
        const suppliersFile = document.getElementById('suppliersFile');
        if (suppliersFile) {
          suppliersFile.value = '';
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
