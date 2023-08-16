import React, { useEffect, useRef, useState } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip);

function Overview({ sampleTransactions, transactions }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [timePeriod, setTimePeriod] = useState('yeartodate');

  useEffect(() => {
  if (chartRef.current) {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    // Calculate the start date based on the selected time period
    let startDate = new Date();
    if (timePeriod === '1month') {
      startDate.setMonth(startDate.getMonth() - 1);
    } else if (timePeriod === '3months') {
      startDate.setMonth(startDate.getMonth() - 2);
    } else if (timePeriod === '6months') {
      startDate.setMonth(startDate.getMonth() - 5);
    } else if (timePeriod === 'yeartodate') {
      startDate = new Date(startDate.getFullYear(), 0, 1);
    }

    // Filter transactions based on the selected time period
    const filteredTransactions = transactions.filter(
      (transaction) => new Date(transaction.date) >= startDate
    );

    // Group transactions by month and calculate total Income and expenses for each month
    var groupedData = filteredTransactions.reduce((acc, transaction) => {
      var date = new Date(transaction.date);
      var month = date.getMonth(); // Month is 0-indexed (0: January, 1: February, ...)

      if (!acc[month]) {
        acc[month] = { Income: 0, expenses: 0 };
      }

      if (transaction.type === 'Income') {
        acc[month].Income += transaction.amount;
      } else if (transaction.type === 'expense') {
        acc[month].expenses += transaction.amount;
      }

      return acc;
    }, []);

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August'
    ];

    const IncomeData = months.map((month, index) => groupedData[index]?.Income || 0);
    const expenseData = months.map((month, index) => groupedData[index]?.expenses || 0);

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Income',
              data: IncomeData,
              backgroundColor: '#4bbad8',
              barThickness: 29,
            },
            {
              label: 'Expenses',
              data: expenseData,
              backgroundColor: '#e6813d',
              barThickness: 29,
            },
          ],
        },
        options: {
          y:{
            grid: {
              display: false, 
            },
            ticks: {
              ticks:{ color: '#00ff00', beginAtZero: true },
              font: {
                family: 'Quicksand',
                size: 16, 
                weight: 'bold', 

              },
            },
          },
          x:{
            grid: {
              display: false, 
            },
          },

          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false, 
              },
            },
          },
          plugins: {
            legend: {
              display: true,
            },
          },
          // Set font properties for the scale label (months)
          scales: {
            x: { 
              grid: {
                display: false, 
              },
              ticks: {
                font: {
                  family: 'Quicksand',
                  size: 16, 
                  weight: 'bold', 
                },
              },
            },
          },
        },
      });
    }
}, [timePeriod, transactions]); // Add timePeriod and transactions as dependencies


return (
    <div className="overview">
      <div className="split-header header ">
        <h1>Overview</h1>
        <div className="overview__chart-controls">
          <button onClick={() => setTimePeriod('1month')}><h2>2 Months</h2></button>
          <button onClick={() => setTimePeriod('3months')}><h2>3 Months</h2></button>
          <button onClick={() => setTimePeriod('6months')}><h2>6 Months</h2></button>
          <button onClick={() => setTimePeriod('yeartodate')}><h2>Year to Date</h2></button>
        </div>
      </div>

      <div className="overview__chart-container" style={{ height: '350px' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}


export default Overview;
