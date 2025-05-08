var chartOptions = {
    chart: {
      height: 620,
      type: 'line',
      fontFamily: 'Helvetica, Arial, sans-serif',
      foreColor: '#6E729B',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [
      {
        name: 'Sales',
        data: [null, 300, 475, 900, 1050, 420, 600, 560,null],
      },
    ],
    markers: {
      size: 3,
      strokeWidth: 0,
      hover: { size: 5 },
    },
    grid: {
      padding: { bottom: 0 },
      borderColor: '#D9DBF3',
      xaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''],
      tooltip: { enabled: false },
    },
    yaxis: {
      min: 0,
      max: 1050,
      tickAmount: 6,
      labels: {
        formatter: function (val) {
          return val + '$';
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -10,
      labels: { colors: '#373d3f' },
    },
    tooltip: {
      enabled: true,
    },
    plotOptions: {},
  };
  
  
  var lineChart = new ApexCharts(document.querySelector('#line-chart'), chartOptions);
  lineChart.render();
  