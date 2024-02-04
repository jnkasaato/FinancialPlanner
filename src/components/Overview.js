import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip);

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
          datasets: [
            {
              label: 'Income',
              data: IncomeData,
              backgroundColor: '#84d1be',
              barThickness: 30,
              borderRadius: 5,
            },
            {
              label: 'Expenses',
              data: expenseData,
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
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default Overview;
