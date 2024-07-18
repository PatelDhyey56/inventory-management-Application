function customerFilterShow() {
  const searchDiv = document.querySelector('.managecustomer-container__button');
  const createSelect = document.createElement('select');
  const filterButton = document.querySelector('.customerfilterbutton');
  createSelect.setAttribute('id', 'searchCustomerSelect');
  createSelect.setAttribute('onchange', 'searchInputAdd()');
  createSelect.style.width = '200px';

  //----array element is same name as dataArray key
  const searchOptionArray = [
    'Select Search Column',
    'Firstname',
    'Lastname',
    'Email',
    'Zipcode',
    'City',
    'State',
  ];

  for (let element of searchOptionArray) {
    const createOption = document.createElement('option');
    createOption.setAttribute('value', `${element}`);
    createOption.textContent = `${element}`;
    createSelect.appendChild(createOption);
  }
  searchDiv.appendChild(createSelect);

  filterButton.textContent = 'Clear';
  filterButton.setAttribute('onclick', 'customerFilterHide()');
}

function customerFilterHide() {
  const searchCustomerSelect = document.getElementById('searchCustomerSelect');
  const searchInput = document.getElementById('searchInput');
  const filterButton = document.querySelector('.customerfilterbutton');

  if (searchCustomerSelect) {
    searchCustomerSelect.remove();
  }
  if (searchInput) {
    searchInput.remove();
  }
  filterButton.textContent = 'Filter';
  filterButton.setAttribute('onclick', 'customerFilterShow()');

  //----back to normal paggination
  currentPage = 1;
  totalNumerOfRecords = dataArray.length;
  arrayForPaggination = [...dataArray];

  startIndex = (currentPage - 1) * pageSize;
  endIndex = startIndex + pageSize;
  const pagginationArray = arrayForPaggination.slice(startIndex, endIndex);
  dataTableGrid(pagginationArray, startIndex);

  if (pageSize < arrayForPaggination.length) {
    document.getElementById("currentpageshow").innerHTML = `${currentPage}`;
    document.querySelector(".pagginationsection").style.display = "block";
    //----paggination button style
    document.getElementById("firstPage").style.opacity = "0.5";
    document.getElementById("firstPage").style.cursor = "not-allowed";

    document.getElementById("prevPage").style.opacity = "0.5";
    document.getElementById("prevPage").style.cursor = "not-allowed";
    //-----right
    document.getElementById("lastPage").style.opacity = "1.0";
    document.getElementById("lastPage").style.cursor = "pointer";

    document.getElementById("nextPage").style.opacity = "1.0";
    document.getElementById("nextPage").style.cursor = "pointer";
  }
}

//--------------
function searchInputAdd() {
  const searchInput = document.getElementById('searchInput');
  const searchCustomerSelect = document.getElementById('searchCustomerSelect');
  const searchDiv = document.querySelector('.managecustomer-container__button');
  const createInput = document.createElement('input');
  const filterButton = document.querySelector('.customerfilterbutton');

  if (searchInput) {
    searchInput.remove();
  }

  if (searchCustomerSelect && searchCustomerSelect.selectedIndex > 0) {
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "searchInput");
    createInput.setAttribute("class", "searchInput");
    createInput.setAttribute("placeholder", "search....");
    createInput.setAttribute("oninput", `customerFilter("${searchCustomerSelect.value}")`);

    createInput.style.width = "250px";
    createInput.style.padding = "20px";
    createInput.style.borderRadius = "10px";
    createInput.style.fontSize = "18px";
    createInput.style.color = "black";
    createInput.style.display = "block";

    searchDiv.appendChild(createInput);
  }
  filterButton.textContent = 'Clear';
  filterButton.setAttribute('onclick', 'customerFilterHide()');
}

function customerFilter(filterColumn) {
  const searchInput = document.getElementById("searchInput");
  let filterArray = [];
  dataArray.forEach((element) => {
    for (let key in element) {
      if (key === filterColumn) {
        let value = element[key].toString().toLowerCase();
        let result = value.includes(searchInput.value.toString().toLowerCase());
        if (result) {
          filterArray.push(element);
          break;
        }
      }
    }
  });
  pagginationFilter(filterArray, 1);
}

function pagginationFilter(filterArray, currPage) {
  arrayForPaggination = [];
  for (let element of filterArray) {
    arrayForPaggination.push(element);
  }
  // console.log(dataArray);

  totalNumerOfRecords = arrayForPaggination.length;
  currentPage = currPage;
  startIndex = (currentPage - 1) * pageSize;
  endIndex = startIndex + pageSize;
  const pagginationArray = arrayForPaggination.slice(startIndex, endIndex);
  dataTableGrid(pagginationArray, startIndex);

  if (pageSize < arrayForPaggination.length) {
    document.getElementById("currentpageshow").innerHTML = `Page ${currentPage}`;
    document.querySelector(".pagginationsection").style.display = "block";
    //----paggination button style
    document.getElementById('firstPage').style.opacity = '0.5';
    document.getElementById('firstPage').style.cursor = 'not-allowed';

    document.getElementById("prevPage").style.opacity = "0.5";
    document.getElementById("prevPage").style.cursor = "not-allowed";

    //-----right
    document.getElementById("lastPage").style.opacity = "1.0";
    document.getElementById("lastPage").style.cursor = "pointer";

    document.getElementById("nextPage").style.opacity = "1.0";
    document.getElementById("nextPage").style.cursor = "pointer";
  } else {
    //if data is less then pageSize then paggination not need
    //so display none
    document.querySelector(".pagginationsection").style.display = "none";
  }
}
