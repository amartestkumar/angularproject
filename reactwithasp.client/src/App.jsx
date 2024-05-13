import { useEffect, useState } from 'react';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import Curd from './Components/Curd';
import NavScrollExample from './Components/NavScrollExample';
import RegistrationPage from './Components/RegistrationPage';

import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
    Link  
}   
from 'react-router-dom';  
import LoginPage from './Components/LoginPage';


function App() {
    return <>
        <Router>
            <Routes>
                <Route path="/" element={<NavScrollExample />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route exact path="login" element={<LoginPage />} />
            </Routes>
        </Router>
        
    </>
    
    
}

export default App;