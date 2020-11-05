import React, { useEffect } from 'react';
import ChartJS from 'chart.js';

const Chart = () => {
  const chartRef = React.createRef();

  useEffect(() => {
    const chart = new ChartJS(chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
          label: 'My First dataset',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20]
        }]
      }
    });
  }, []);

  return (
    <canvas id="chart" ref={chartRef}></canvas>
  )
}

export default Chart;
