const tableContainer = document.getElementById('store-section');
const createTable = document.createElement('table');
createTable.setAttribute('id', 'store__table');
createTable.setAttribute('class', 'store__table');


const createTh = document.createElement('th');
const createTr = document.createElement('tr');
for (const iterator in storeDetails[0]) {
  createTh.textContent = storeDetails[0][iterator]
  createTable.appendChild(createTr);
}
createTr.appendChild(createTh);
storeDetails.map((e) => {
  const createTr = document.createElement('tr');
  for (let key in e) {
    if (key === 'storeId') {
      key = 'No.';
    }
    if (key != 'is_delete') {
      const createTd = document.createElement('td');
      // createTh.setAttribute("class", "bg-dark text-light");
      createTd.textContent = e[key]
      createTable.appendChild(createTr);
      createTr.appendChild(createTd);
    }
  }
})
tableContainer.appendChild(createTable)