async function viewPurchaseOrder(id) {
  const modal = new bootstrap.Modal('#pdfModal');
  modal.show();

  const response = await fetch(`/salesOrderView?invoiceId=${id}&type=purchase`);
  try {
    if (!response.ok) {
      throw new Error("Can't render pdf");
    }

    const htmlResponse = await response.text();
    document.getElementById("pdfModalBody").innerHTML = htmlResponse;


    document.getElementById('confirmPdfDownload').onclick = async () => {
      const response = await fetch(`/invoice?invoiceId=${id}&type=purchase`, {
        method: 'GET',
      });

      // console.log(response.status);
      try {
        if (!response.ok) {
          throw new Error('Unable To Download PDF');
        }

        if (response.status === 200) {
          const responsePdfName = await response.json();
          // console.log(responseMessage.pdfName);
          const pdfmodalfooter = document.getElementById("pdfmodalfooter");
          const confirmPdfDownload = document.getElementById("confirmPdfDownload");
          confirmPdfDownload.remove();
          const createA = document.createElement("a");
          createA.setAttribute("id", "downloadInvoiceButton");
          createA.setAttribute("class", "btn btn-outline-primary");
          createA.setAttribute("href", `${window.location.origin}/uploads/pdfFiles/${responsePdfName.pdfName}`);
          createA.setAttribute("download", `${responsePdfName.pdfName}`);
          createA.innerHTML = "Download PDF";
          pdfmodalfooter.appendChild(createA);

          document.getElementById("downloadInvoiceButton").onclick = () => {
            const pdfmodalfooter = document.getElementById("pdfmodalfooter");
            const button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("id", "confirmPdfDownload");
            button.setAttribute("class", "btn btn-danger");
            button.innerHTML = "Generate PDF";
            pdfmodalfooter.appendChild(button);

            const downloadInvoiceButton = document.getElementById("downloadInvoiceButton");
            if (downloadInvoiceButton) {
              downloadInvoiceButton.remove();
            }

            //socket implment for delete generated file
            let socket = io();
            socket.emit('unlinkProductPdf', {
              pdfName: responsePdfName.pdfName,
              folderName: "pdfFiles"
            });
            modal.hide();
          }
        }
      } catch (error) {
        modal.hide();
        const responseMessage = await response.json();
        if (response.status === 404) {
          messagePopUp(responseMessage.message);
        }

        if (response.status === 500) {
          messagePopUp(responseMessage.message);
        }
      }
    };
  } catch (error) {
    modal.hide();
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

function pdfModelHide(id) {
  const pdfmodalfooter = document.getElementById("pdfmodalfooter");
  const confirmPdfDownload = document.getElementById("confirmPdfDownload");
  if (!confirmPdfDownload) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", "confirmPdfDownload");
    button.setAttribute("class", "btn btn-danger");
    button.innerHTML = "Generate PDF";
    pdfmodalfooter.appendChild(button);
  }
  const downloadInvoiceButton = document.getElementById("downloadInvoiceButton");
  if (downloadInvoiceButton) {
    //socket implment for delete generated file
    let socket = io();
    socket.emit('unlinkProductPdf', {
      pdfName: downloadInvoiceButton.download,
      folderName: "pdfFiles"
    });
    downloadInvoiceButton.remove();
  }

  const modal = new bootstrap.Modal(id);
  modal.hide();
}
