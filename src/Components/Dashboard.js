import React, { Component } from 'react';
import PieChart from './PieChart';
import Visual2 from './Visual2';
import Visual3 from './Visual3';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

class Dashboard extends Component {

render(){
  return( 
    <div className="App">  
   <Router>  
     <div>  
       <div className="row" >  
         <div className="col-sm-12 btn btn-dark">  
           Charts in ReactJS  
       </div>  
       </div>  
       <div className="container-fluid row center">   
        <div className="col-sm-2">  
         </div>  
         <div className="col-sm-3">  
           <Link to={'/PieChart'} className="nav-link btn btn-info">Piechart</Link>  
         </div>  
         <div className="col-sm-3">  
           <Link to={'/Visual2'} className="nav-link btn btn-info">Bar Chart</Link>  
         </div>  
         <div className="col-sm-3">  
           <Link to={'/Visual3'} className="nav-link btn btn-info">Line Chart</Link>  
         </div>     
         <div className="col-sm-2">  
         </div>  
       </div>  
     </div>  
     <div className="container">  
       <Switch>  
         <Route exact path='/PieChart' component={PieChart} />  
         <Route path='/Visual2' component={Visual2} />    
         <Route path='/Visual3' component={Visual3} />  
       </Switch>  
     </div>  
   </Router>  
 </div>  
  );
}
}



export default Dashboard;
