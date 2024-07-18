/**Instruction before use this paggination component
 * paggination() function pass API name
 * data show in table grid function name is dataTableGrid() only this name you can write your logic for data list
 */

let dataArray = [];
let arrayForPaggination = [];
let currentPage = 1;
let pageSize = 6;
let totalNumerOfRecords;
let startIndex;
let endIndex;

async function paggination(apiName = null, records = []) {
  currentPage = 1;
  if (apiName) {
    showLoader();
    const response = await fetch(apiName, {
      method: 'GET',
    });
    hideLoader();
    const responseArray = await response.json();
    dataArray = [...responseArray]; //return shallow copy or array
    /**this array is use for paggination in both case also in filter */
    arrayForPaggination = [...dataArray];
  } else {
    arrayForPaggination = [...records];
  }

  totalNumerOfRecords = arrayForPaggination.length;

  startIndex = (currentPage - 1) * pageSize;
  endIndex = startIndex + pageSize;
  const pagginationArray = arrayForPaggination.slice(startIndex, endIndex);

  dataTableGrid(pagginationArray, startIndex);

  if (pageSize < arrayForPaggination.length) {
    document.getElementById('currentpageshow').innerHTML = ` ${currentPage}`;
    document.querySelector('.pagginationsection').style.display = 'block';
    //----paggination button style
    document.getElementById('firstPage').style.opacity = '0.5';
    document.getElementById('firstPage').style.cursor = 'not-allowed';

    document.getElementById('prevPage').style.opacity = '0.5';
    document.getElementById('prevPage').style.cursor = 'not-allowed';

    //-----right
    document.getElementById('lastPage').style.opacity = '1.0';
    document.getElementById('lastPage').style.cursor = 'pointer';

    document.getElementById('nextPage').style.opacity = '1.0';
    document.getElementById('nextPage').style.cursor = 'pointer';
  } else {
    document.querySelector('.pagginationsection').style.display = 'none';
  }
}

function firstPageButton() {
  if (currentPage > 1) {
    currentPage = 1;
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
    const pagginationArray = arrayForPaggination.slice(startIndex, endIndex);
    dataTableGrid(pagginationArray, startIndex);
  }
  document.getElementById('currentpageshow').innerHTML = ` ${currentPage}`;
  document.getElementById('firstPage').style.opacity = '0.5';
  document.getElementById('firstPage').style.cursor = 'not-allowed';

  document.getElementById('prevPage').style.opacity = '0.5';
  document.getElementById('prevPage').style.cursor = 'not-allowed';

  document.getElementById('nextPage').style.opacity = '1.0';
  document.getElementById('nextPage').style.cursor = 'pointer';

  document.getElementById('lastPage').style.opacity = '1.0';
  document.getElementById('lastPage').style.cursor = 'pointer';
}

function prevPageButton() {
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
    const pagginationArray = arrayForPaggination.slice(startIndex, endIndex);
    dataTableGrid(pagginationArray, startIndex);
  }

  if (currentPage === 1) {
    document.getElementById('firstPage').style.opacity = '0.5';
    document.getElementById('firstPage').style.cursor = 'not-allowed';

    document.getElementById('prevPage').style.opacity = '0.5';
    document.getElementById('prevPage').style.cursor = 'not-allowed';
  }

  document.getElementById('currentpageshow').innerHTML = ` ${currentPage}`;

  document.getElementById('nextPage').style.opacity = '1.0';
  document.getElementById('nextPage').style.cursor = 'pointer';

  document.getElementById('lastPage').style.opacity = '1.0';
  document.getElementById('lastPage').style.cursor = 'pointer';
}

function nextPageButton() {
  if (currentPage < Math.ceil(totalNumerOfRecords / pageSize)) {
    currentPage = currentPage + 1;
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
    const pagginationArray = arrayForPaggination.slice(startIndex, endIndex);
    dataTableGrid(pagginationArray, startIndex);
  }

  if (currentPage === Math.ceil(totalNumerOfRecords / pageSize)) {
    document.getElementById('nextPage').style.opacity = '0.5';
    document.getElementById('nextPage').style.cursor = 'not-allowed';

    document.getElementById('lastPage').style.opacity = '0.5';
    document.getElementById('lastPage').style.cursor = 'not-allowed';
  }

  document.getElementById('currentpageshow').innerHTML = ` ${currentPage}`;

  document.getElementById('firstPage').style.opacity = '1.0';
  document.getElementById('firstPage').style.cursor = 'pointer';

  document.getElementById('prevPage').style.opacity = '1.0';
  document.getElementById('prevPage').style.cursor = 'pointer';
}

function lastPageButton() {
  if (currentPage < Math.ceil(totalNumerOfRecords / pageSize)) {
    currentPage = Math.ceil(totalNumerOfRecords / pageSize);
    startIndex = (currentPage - 1) * pageSize;
    endIndex = startIndex + pageSize;
    const pagginationArray = arrayForPaggination.slice(startIndex, endIndex);
    dataTableGrid(pagginationArray, startIndex);
  }
  document.getElementById('currentpageshow').innerHTML = ` ${currentPage}`;

  document.getElementById('firstPage').style.opacity = '1.0';
  document.getElementById('firstPage').style.cursor = 'pointer';

  document.getElementById('prevPage').style.opacity = '1.0';
  document.getElementById('prevPage').style.cursor = 'pointer';

  document.getElementById('nextPage').style.opacity = '0.5';
  document.getElementById('nextPage').style.cursor = 'not-allowed';

  document.getElementById('lastPage').style.opacity = '0.5';
  document.getElementById('lastPage').style.cursor = 'not-allowed';
}
