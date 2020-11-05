import React, { useEffect, useState } from 'react';
import ChartJS from 'chart.js';

const Chart = ({ btcData }) => {

  const chartRef = React.createRef();

  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const chart = new ChartJS(chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels: btcData.dates,
        datasets: [{
          label: 'Bitcoin Price',
          borderColor: 'rgb(255, 99, 132)',
          data: btcData.prices.map(pricePoint => pricePoint[currency].rate_float)
        }]
      }
    });
  });

  return (
    <canvas id="chart" ref={chartRef}></canvas>
  )
}

export default Chart;
