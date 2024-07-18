let productData = [];
let orderData = [];

const onloadData = async () => {
  let dayData = await fetchapi(`/api/orderreport/allorder?day=1`);
  let monthData = await fetchapi(`/api/orderreport/allorder?day=30`);
  let daySales = 0;
  let monthSales = 0;
  dayData.forEach((e) => (daySales += e.Order_Amount));
  monthData.forEach((e) => (monthSales += e.Order_Amount));
  let options = {
    series: [daySales, monthSales],
    colors: ['#5e63b6', '#004B95'],
    labels: ['Day Sales', 'Month Sales'],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 1,
      },
    },
    chart: {
      type: 'donut',
    },

    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              label: 'Total',
              showAlways: true,
              show: true,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return monthSales;
                }, 0);
              },
            },
          },
        },
      },
    },
    chart: {
      type: 'donut',
      height: 350,
      width: 350,
    },
  };

  let chart = new ApexCharts(document.getElementById('daySales'), options);
  chart.render();

  let products = await fetchapi(`/api/productStock`);
  let orders = await fetchapi(`/api/orderreport/allorder`);
  productData = [...products];
  orderData = [...orders];
  showQuantityData();
  showData();
};
const fetchapi = async (apiurl) => {
  showLoader();
  let api = await fetch(apiurl);
  let apiData = await api.json();
  hideLoader();
  return apiData;
};

const changeproductQuantity = () => {
  lowStockMark = document.getElementById('lowProduct').value;
  showQuantityData(lowStockMark);
};

const showQuantityData = async (lowvalue) => {
  let lowStockMark = lowvalue || document.getElementById('lowProduct').value;
  let lowStock = [];
  let header = Object.keys(productData[0]);
  productData.map((e) => {
    if (e.Stock < lowStockMark) {
      lowStock.push(e);
    }
  });

  document.getElementById('totalStock').innerText = productData.length;
  document.getElementById('outStock').innerText = lowStock.length;
  document.getElementById('totalStock').style.color =
    productData.length <= 30 ? 'rgb(255, 185, 0)' : 'black';
  document.getElementById('totalStock').style.color =
    productData.length <= 6 ? 'red' : 'black';

  document.getElementById('lowQuantityStockTableHead').innerHTML = header
    .map((e) => `<th class="text-center">${e.replace('_', ' ')}</th>`)
    .join('');

  document.getElementById('lowQuantityStockTableBody').innerHTML = lowStock
    .map(
      (e) => `<tr>
        ${header
          .map((h) => `<td class="text-center">${e[h] ? e[h] : '-'}</td>`)
          .join('')}</tr>`
    )
    .join('');
};

const showData = () => {
  let orderSum = 0;
  orderData.forEach((el) => (orderSum += el.Order_Amount));

  document.getElementById('totalOrder').innerText = orderData.length;
  document.getElementById('orderCost').innerText = orderSum;
  orderData = orderData.slice(0, 5);
  let header = Object.keys(orderData[0]);
  let chengeData = {
    count: 1,
    array: [...orderData],
  };
  document.getElementById('orderTableHead').innerHTML = header
    .map(
      (e) =>
        `<th class="text-center">${
          e == 'Order_Id' ? 'NO' : e.replace('_', ' ')
        }</th>`
    )
    .join('');
  chengeData.array.map((e) => {
    header.map((h) => {
      if (h == 'Created_Time') {
        let time = (e[h] = renderTimestamp(e[h]));
        e[h] = time;
      }
      if (h == 'Order_Time') {
        e[h] = e[h].split('T')[0];
      }
      if (h == 'Order_Id') {
        e.No = chengeData.count;
        chengeData.count++;
      }
    });
  });
  document.getElementById('orderTableBody').innerHTML = chengeData.array
    .map(
      (e) => `<tr onclick="productlist('${e.Order_Id}')">
        ${header
          .map(
            (h) => `<td>${h != 'Order_Id' ? (e[h] ? e[h] : '-') : e['No']}</td>`
          )
          .join('')}</tr>`
    )
    .join('');
};
const productlist = (id) => {
  window.location = `/orderProduct?id=${id}`;
};

onloadData();
