import React, { useEffect, useState } from 'react';
import ChartJS from 'chart.js';

const Chart = ({ records, currency }) => {

  const chartRef = React.createRef();

  useEffect(() => {
    const chart = new ChartJS(chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels: records.map(rec => rec.date),
        datasets: [{
          label: 'Bitcoin Price',
          borderColor: 'rgb(255, 99, 132)',
          data: records.map(rec => rec.priceUSD)
        }]
      }
    });
  });

  return (
    <canvas id="chart" ref={chartRef}></canvas>
  )
}

export default Chart;
