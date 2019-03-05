const options = {
  type: 'bar',
  title: {
    display: true,
    text: '热门活动 Top 5'
  },
  data: {
    labels: ['9 块 9 特卖', '限时秒杀', '限时折扣', '大促主会场', '砍价'],
    datasets: [{
      label: '活动热门指数',
      data: [2890, 2372, 2221, 1554, 1234],
      backgroundColor: '#051626',
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  }
};

export default options;
