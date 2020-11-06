import React, { useEffect, useState } from 'react';
import ChartJS from 'chart.js';

const Chart = ({ records, currency }) => {

  const chartRef = React.createRef();

  const timeOptions = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
            hour: 'hA'
          }
        },
        distribution: 'linear',
      }]
    }
  };

  const getXYFromRecords = (records) => {
    return records.map(rec => {
      return {
        t: rec.date,
        y: rec.price[currency]
      }
    });
  }

  useEffect(() => {
    const chart = new ChartJS(chartRef.current.getContext("2d"), {
      type: 'line',
      data: {
        labels: records.map(rec => rec.date),
        datasets: [{
          label: 'Bitcoin Price',
          borderColor: 'rgb(255, 99, 132)',
          data: getXYFromRecords(records),
        }]
      },
      options: timeOptions,
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
