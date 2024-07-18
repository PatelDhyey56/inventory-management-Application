let productHeader = document.getElementById('productHeader');
let productData = document.getElementById('productData');

const searchdata = async (input) => {
  let filterArray = dataArray.filter((ele) => {
    return ele['Product_Name']
      .toLowerCase()
      .includes(input.toLowerCase().trim());
  });
  paggination(null, filterArray);
};

const fetchData = async () => {
  paggination('api/purchasereport/allproduct');
};

const dataTableGrid = (pagginationArray, startIndex) => {
  if (pagginationArray.length == 0) {
    productHeader.innerHTML = `<h1  class='text-center'>Enter valid Product name </h1>`;
    productData.innerHTML = `<h6 class='text-center'>Error</h6>`;
  } else {
    let header = Object.keys(pagginationArray[0]);
    let data = changesInApi(pagginationArray);
    productHeader.innerHTML = header
      .map((e) => `<th class="text-center">${e.replace('_', ' ')} </th>`)
      .join('');
    productData.innerHTML = data
      .map(
        (e) => `<tr>
      ${header
        .map((h) => `<td class="text-center">${e[h] ? e[h] : '-'}</td>`)
        .join('')}</tr>`
      )
      .join('');
  }
};
const changesInApi = (array) => {
  array.map((e) => {
    if (e.Product_BuyPrice != null) {
      let cost = String(e.Product_BuyPrice);
      cost = Number(cost.substring(0, 5));
      e.Product_BuyPrice = cost;
    }
    if (e.Total_Products == null) {
      e.Total_Products = 0;
    }
    if (e.Product_BuyPrice == null) {
      e.Product_BuyPrice = 0;
    }
  });
  return array;
};
