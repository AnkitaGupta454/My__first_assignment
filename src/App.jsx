import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Experts from './Experts.jsx'
//import { Switch, Route, Redirect } from 'react-router-dom';
const App=()=>{
    return (
        <>
       <Navbar/>
       <Experts/>     
        </>
    )
}
export default App;