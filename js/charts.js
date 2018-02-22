/* Pie Chart */

var chartPie = document.getElementById("pieChart");

Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 11;

var pieData = {
    labels: [
      "Completed",
      "Overdue"
    ],
    datasets: [
      {
        data: [55.3, 44.7],
        backgroundColor: [
          "#4286F4",
          "#EF4A8C"
        ]
      }]
};

var options = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      boxWidth: 40
    }
  }
};

var pieChart = new Chart(chartPie, {
  type: 'pie',
  data: pieData,
  options: options
});


/* Linear Chart */

var chartLinear = document.getElementById("linearChart");

var dataFirst = {
    label: "Completed",
    data: [0, 59, 75, 20, 20, 55, 40],
    lineTension: 0.3,
    fill: false,
    borderColor: '#4286F4',
    backgroundColor: '#4286F4',
    pointBorderColor: '#4286F4',
    pointBackgroundColor: '#4286F4',
    pointRadius: 5,
    pointHoverRadius: 8,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rect'
  };

var dataSecond = {
    label: "Overdue",
    data: [20, 15, 60, 90, 65, 30, 70],
    lineTension: 0.3,
    fill: false,
    borderColor: '#EF4A8C',
    backgroundColor: '#EF4A8C',
    pointBorderColor: '#EF4A8C',
    pointBackgroundColor: '#EF4A8C',
    pointRadius: 5,
    pointHoverRadius: 8,
    pointHitRadius: 30,
    pointBorderWidth: 2
  };

var speedData = {
  labels: ["", "Jan", "Feb", "March", "April", "May", "June"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: false,
    labels: {
      boxWidth: 80
    }
  }
};

var lineChart = new Chart(chartLinear, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

/* Bubble Chart */

var options = {
  type: 'bubble',
  options: {
    legend: {
      display: false
    }
  },
  data: {
    datasets: [
      {
        label: 'Active Users',
        data: [
          {
            x: 500,
            y: 7,
            r: 10
          }
        ],
        backgroundColor:"#4286F4",
        hoverBackgroundColor: "#4286F4"
      },
      {
        label: 'Overdue',
          data: [
            {
              x: 120,
              y: 4,
              r: 10
            }
          ],
          backgroundColor:"#EF4A8C",
          hoverBackgroundColor: "#EF4A8C"
      }]
  }
}

var ctx = document.getElementById('bubbleChart').getContext('2d');
new Chart(ctx, options);