import React, {Component } from 'react';
import Iframe from 'react-iframe';


class Chart1 extends Component {
  render(){
  return (
    <main className="container-center page-area col-sm-3 ">
      <section className="page-area">
     <h1 style={{'textAlign': 'center'}}>Budget</h1>
     <script src="https://unpkg.com/@mongodb-js/charts-embed-dom@beta"></script>
    <div id="chart" container-center></div>
    <Iframe style="background: #FFFFFF;
    border: none;
    border-radius: 2px;
    box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
     width="640" 
     height="480" 
     src="https://charts.mongodb.com/charts-personal_budget_final-pwjjt/embed/charts?id=59550edd-9df8-4468-9107-f1ec9cf1d6db&theme=light">

    </Iframe>
    </section>
   </main>
   
  );
  }
}

export default Chart1;
