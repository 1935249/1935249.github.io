// 折れ線グラフ
var lineLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

var lineData = {
    labels: lineLabels,
    datasets: [{
        label: '初めてのグラフ用データセット',
        borderColor: 'rgb(150, 50, 60)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 60, 10],

    }]
};

var lineConfig = {
    type: 'line',
    lineData,
    options: {},
}

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);

// レイダーグラフ
const radarData = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };


const radarconfig = {
    type: 'radar',
    data: radarData,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

  var radarChart = new Chart(
    // document.getElementById('radarChart'),
    $('#radarChart'),
    radarConfig,
);