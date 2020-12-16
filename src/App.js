import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Menu from './Components/Menu';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import MembersPage from './Pages/MembersPage';


function App() {
  return (
    <Router>
     <Menu/>
     <Hero/>
     <div className="mainContainer">
       <Switch>
         <Route path="/about">
           <AboutPage/>
         </Route>

         <Route path="/members">
           <Dashboard/>
          
           <MembersPage/>
         </Route>
         
         <Route path="/login">
           <LoginPage/>
           
         </Route>

         <Route path="/">
           <HomePage/>
         </Route>

       </Switch>
     </div>
     <Footer/>
    </Router>
  );
}

export default App;
