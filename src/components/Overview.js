<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======
import React, { useEffect, useRef, useState } from 'react';
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip);

<<<<<<< HEAD
function Overview({ transactions }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const today = new Date();
      const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); 

      const startDate = new Date(today.getFullYear(), today.getMonth() - 11, 1); 

      const labels = [];
      for (let i = 0; i < 12; i++) {
        const date = new Date(startDate.getFullYear(), startDate.getMonth() + i);
        labels.push(date.toLocaleString('default', { month: 'short' }));
      }

      const filteredTransactions = transactions.filter(
        (transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= startDate && transactionDate <= endDate;
        }
      );

      const groupedData = Array.from({ length: 12 }, (_, i) => {
        const month = (startDate.getMonth() + i) % 12;
        return {
          Income: filteredTransactions
            .filter(transaction => new Date(transaction.date).getMonth() === month && transaction.type === 'Income')
            .reduce((acc, transaction) => acc + transaction.amount, 0),
          expenses: filteredTransactions
            .filter(transaction => new Date(transaction.date).getMonth() === month && transaction.type === 'expense')
            .reduce((acc, transaction) => acc + transaction.amount, 0)
        };
      });

      const IncomeData = Array.from({ length: 12 }, (_, index) => groupedData[index]?.Income || 0);
      const expenseData = Array.from({ length: 12 }, (_, index) => groupedData[index]?.expenses || 0);

      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
=======
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
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const IncomeData = months.map((month, index) => groupedData[index]?.Income || 0);
    const expenseData = months.map((month, index) => groupedData[index]?.expenses || 0);

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
        data: {
          labels: months,
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
          datasets: [
            {
              label: 'Income',
              data: IncomeData,
<<<<<<< HEAD
              backgroundColor: '#84d1be',
              barThickness: 30,
              borderRadius: 5,
=======
              backgroundColor: '#4bbad8',
              barThickness: 25,
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
            },
            {
              label: 'Expenses',
              data: expenseData,
<<<<<<< HEAD
              backgroundColor: '#d3f5ec',
              barThickness: 30,
              borderRadius: 5,
            },
          ],
        },
         options: {
           maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 15,
            family: 'Quicksand'
          },
        },

      },
      y: {
        grid: {
          borderDash: 3, 
        },
        ticks: {
          font: {
            size: 15, 
            family: 'Quicksand'
          },
          callback: function(value, index, values) {
            // Format numbers to show as 'k'
            if (Math.abs(value) >= 1000) {
              return '$' + value/1000 + 'k';
            } else {
              return value;
            }
          },
          stepSize: 4000,
        },
      },
    },
  },
});

    }
  }, [transactions]);

  return (
    <div className="overview">
      <div className="header">
        <h1>Overview</h1>
        <div className="legend">
          <div className="income">
            <div></div>
            <div>Income</div>
          </div>
          <div className="expense">
            <div></div>
            <div>Expenses</div>
          </div>
        </div>
        </div>

      <div className="overview__chart-container">
=======
              backgroundColor: '#e6813d',
              barThickness: 25,
            },
          ],
        },
        options: {
          y:{
            grid: {
              display: false, 
            },
            ticks: {

              ticks:{ 
                color: '#00ff00', 
                beginAtZero: true,

              },
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
        </div>
      </div>

      <div className="overview__chart-container" >
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

<<<<<<< HEAD
=======

>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
export default Overview;
