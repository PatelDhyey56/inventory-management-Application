let productHeader = document.getElementById('productHeader');
let productData = document.getElementById('productData');
const fetchData = async () => {
  paggination('api/orderreport/allorder');
  const maxDate = new Date().toISOString().split('T')[0];
  document.getElementById('toDate').setAttribute('max', maxDate);
  document.getElementById('fromDate').setAttribute('max', maxDate);
};

const dataTableGrid = (pagginationArray, startIndex) => {
  if (pagginationArray.length == 0) {
    productHeader.innerHTML = `<h1  class='text-center'>No Orders </h1>`;
    productData.innerHTML = `<h6 class='text-center'>...</h6>`;
  } else {
    let header = [
      'No',
      'Order_Name',
      'Customer_Name',
      'Order_Status',
      'Order_Amount',
      'Payment_Status',
      'Order_Time',
      'Created_Time',
    ];
    let array = [...pagginationArray];

    array.map((e) => {
      Object.keys(pagginationArray[0]).map((h) => {
        if (h == 'Created_Time' && (e[h].includes('T') || e[h].includes('Z'))) {
          let time = (e[h] = renderTimestamp(e[h]));
          e[h] = time;
        }
        if (h == 'Order_Time') {
          e[h] = e[h].split('T')[0];
        }
        if (h == 'Order_Id') {
          e.No = ++startIndex;
          ++startIndex;
        }
      });
    });
    productHeader.innerHTML = header
      .map(
        (e) =>
          `<th class="text-center">${
            e == 'Order_Id' ? 'NO' : e.replace('_', ' ')
          } </th>`
      )
      .join('');
    productData.innerHTML = array
      .map(
        (e) => `<tr onclick="productlist('${e.Order_Id}')">
      ${header
        .map((h) => `<td class="text-center">${e[h] ? e[h] : '-'}</td>`)
        .join('')}</tr>`
      )
      .join('');
  }
};

const productlist = (id) => {
  window.location = `/orderProduct?id=${id}`;
};

const searchdata = () => {
  let fromDate = document.getElementById('fromDate').value;
  let toDate = document.getElementById('toDate').value;

  let currentDate = new Date().toISOString().slice(0, 10);
  if (fromDate.length == 0) {
    fromDate = currentDate;
  }
  if (toDate.length == 0) {
    toDate = currentDate;
  }
  paggination(
    `/api/orderreport/allorder?fromDate=${fromDate}&&toDate=${toDate}`
  );
};
