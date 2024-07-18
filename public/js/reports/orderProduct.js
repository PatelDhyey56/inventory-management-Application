let productHeader = document.getElementById('productHeader');
let productData = document.getElementById('productData');
let input = window.location.search.split('?')[1].split('=')[1];
const fetchData = async () => {
  let api = await fetch(`/api/orderreport/allproduct?id=${input}`);
  let rows = await api.json();
  dataTableGrid(rows);
};

const dataTableGrid = (pagginationArray, startIndex) => {
  if (pagginationArray.length == 0) {
    productHeader.innerHTML = `<h1  class='text-center'>NO Data </h1>`;
    productData.innerHTML = `<h6 class='text-center'>...</h6>`;
  } else {
    let header = Object.keys(pagginationArray[0]);
    productHeader.innerHTML = header
      .map((e) => `<th class="text-center">${e.replace('_', ' ')} </th>`)
      .join('');
    productData.innerHTML = pagginationArray
      .map(
        (e) => `<tr>
      ${header
        .map((h) => `<td class="text-center">${e[h] ? e[h] : '-'}</td>`)
        .join('')}</tr>`
      )
      .join('');
  }
};
