let productHeader = document.getElementById('productHeader');
let productData = document.getElementById('productData');
const fetchData = async () => {
  paggination('api/salesreport/allproduct');
};
const dataTableGrid = (pagginationArray, startIndex) => {
  let header = Object.keys(pagginationArray[0]);
  // console.log(Object.keys(header));
  pagginationArray.map((e) => {
    if (e.Product_Cost != null) {
      let cost = String(e.Product_Cost);
      cost = Number(cost.substring(0, 5));
      e.Product_Cost = cost;
    }
  });
  productHeader.innerHTML = header
    .map((e) => `<th class="text-center">${e.replace('_', ' ')}</th>`)
    .join('');
  productData.innerHTML = pagginationArray
    .map(
      (e) => `<tr>
        ${header
          .map((h) => `<td class="text-center">${e[h] ? e[h] : '-'}</td>`)
          .join('')}</tr>`
    )
    .join('');
};
