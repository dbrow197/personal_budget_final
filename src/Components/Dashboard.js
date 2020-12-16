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
     <div className="container">  
       <div className="row" >  
         <div className="col-sm-12 btn btn-dark bottom-buffer">  
           Charts in ReactJS  
       </div>  
       </div>  
       
       <div className="container-fluid row center top-buffer">   
        <div className="col-sm-2">  
         </div>  
         <div className="col-sm-3">  
           <Link to={'/PieChart'} className="nav-link btn btn-secondary">Pie</Link>  
         </div>  
         <div className="col-sm-3">  
           <Link to={'/Visual2'} className="nav-link btn btn-secondary">Bar</Link>  
         </div>  
         <div className="col-sm-3">  
           <Link to={'/Visual3'} className="nav-link btn btn-secondary">Line </Link>  
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
