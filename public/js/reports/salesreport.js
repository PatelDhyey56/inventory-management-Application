const showProduct = () => {
  window.location = `/salesReportallProducts`;
};

const getData = async (
  api,
  tableHeader,
  tableData,
  dataLength,
  countSalles
) => {
  let rows = await api.json();
  let header = Object.keys(rows[0]);
  if (countSalles == true) {
    let totalSalles = 0;
    let totalProcuctcost = 0;
    rows = changesInApi(rows);
    rows.map((e) => {
      totalSalles += e.Seling_Price * e.Product_Sales;
      totalProcuctcost += e.Product_Cost * e.Product_Sales;
    });
    totalProcuctcost = totalSalles - totalProcuctcost;
    let options = {
      series: [totalSalles, totalProcuctcost],
      colors: ['#9896f1', '#2c786c'],
      labels: ['Total Sales', 'Total Profit'],
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
      chart: {
        type: 'donut',
        height: 400,
        width: 400,
      },
    };

    let chart = new ApexCharts(document.getElementById('Sales'), options);
    chart.render();
  }
  let count = 0;
  let letestdata = [];
  for (let e of rows) {
    if (count == dataLength) {
      break;
    }
    letestdata.push(e);
    count++;
  }
  tableHeader.innerHTML = header
    .map((e) => `<th class="text-center">${e.replace('_', ' ')}</th>`)
    .join('');
  tableData.innerHTML = letestdata
    .map(
      (e) => `<tr>
        ${header
          .map((h) => `<td class="text-center">${e[h] ? e[h] : '-'}</td>`)
          .join('')}</tr>`
    )
    .join('');
};
const fetchData = async () => {
  let productHeader = document.getElementById('productHeader');
  let productData = document.getElementById('productData');
  let categoryHeader = document.getElementById('categorytHeader');
  let categoryData = document.getElementById('categoryData');
  showLoader();
  let api = await fetch('api/salesreport/allproduct');
  let api2 = await fetch('api/salesreport/allcategory');
  hideLoader();
  getData(api, productHeader, productData, 5, true);
  getData(api2, categoryHeader, categoryData, 3, false);
  monthSales();
};

const changesInApi = (array) => {
  array.map((e) => {
    if (e.Product_Cost != null) {
      let cost = String(e.Product_Cost);
      cost = Number(cost.substring(0, 5));
      e.Product_Cost = cost;
    }
    if (e.Product_Cost == null) {
      e.Product_Cost = 0;
    }
  });
  return array;
};
const fetchapi = async (apiurl) => {
  showLoader();
  let api = await fetch(apiurl);
  let apiData = await api.json();
  hideLoader();
  return apiData;
};
const monthSales = async () => {
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let date = new Date();
  let monthData = {
    months: [],
    Sales: [],
    totalSales: [],
  };
  let month = date.getMonth();
  for (let i = month - 5; i <= month; i++) {
    if (i >= 0) {
      let apiRes = await fetchapi(`/api/orderreport/allorder?month=${i + 1}`);
      monthData.months.push(monthName[i]);
      monthData.Sales.push(apiRes);
    } else {
      let j = i + 12;
      let apiRes = await fetchapi(`/api/orderreport/allorder?month=${j + 1}`);
      monthData.months.push(monthName[j]);
      monthData.Sales.push(apiRes);
    }
  }

  monthData.Sales.map((e) => {
    let total = 0;
    if (e.length > 0) {
      e.map((h) => {
        total += h.Order_Amount;
      });
    }
    monthData.totalSales.push(total);
  });
  var options = {
    series: [
      {
        name: 'Sales',
        data: monthData.totalSales,
      },
    ],
    chart: {
      height: 500,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return '₹' + val;
      },
      offsetY: -20,
      style: {
        fontSize: '15px',
        colors: ['#304758'],
      },
    },

    xaxis: {
      categories: monthData.months,
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return '₹' + val;
        },
      },
    },
    title: {
      text: 'Monthly Sales',
      floating: true,
      offsetY: 480,
      align: 'center',
      style: {
        color: '#002F4B',
        fontSize: '15px',
      },
    },
  };

  var chart = new ApexCharts(document.getElementById('monthreport'), options);
  chart.render();
};
