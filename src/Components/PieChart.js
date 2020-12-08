import React from 'react';
import axios from 'axios';
import {Chart} from 'chart.js';

export default class PieChart extends React.Component{
    
    state = {
        chartData: {
            datasets: [{
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgb(255,80,239)'
                ]
            }],
            labels: []
        }
    };

    async getExpenses() {
        try {
            const response = await axios.get('http://localhost:5000/budget');

            response.data.expenses?.forEach(expense => {
                this.state.chartData.datasets[0].data.push(expense.amount);
                this.state.chartData.labels.push(expense.title);
            });
        } catch (error) {
            console.log(error)
        }
    };

    
    createChart() {
        let context = document.getElementById('budget-chart');
        new Chart(context, {
            type: 'pie',
            data: this.state.chartData
        });
    };

    async componentDidMount() {
        await this.getExpenses();
        this.createChart();
    }

render () {
  return (
      <main className="container center">
    <section className="page-area">
    <article>
        <h1 style={{'textAlign': 'center'}}>Budget</h1>
        <canvas id="budget-chart" width="400" height="400"/>
    </article>
    </section>
    </main>
  );
}

}


