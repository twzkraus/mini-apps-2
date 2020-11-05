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
          data: records.map(rec => rec.price[currency])
        }]
      }
    });
  });

  return (
    <>
    <canvas id="chart" ref={chartRef}></canvas>
    <p>Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a></p>
    </>
  )
}

export default Chart;
