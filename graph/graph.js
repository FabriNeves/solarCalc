const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  