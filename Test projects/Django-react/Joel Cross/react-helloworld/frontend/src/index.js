import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"; 
import App from './App';
import reportWebVitals from './reportWebVitals';

import Dashboard1 from './DashboardProjects/Dashboard1/index.js';
import CV1 from './CVProjects/CV1/index.js';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard1" element={<Dashboard1 projectName='dashboard 1'/>} />
                <Route path="/cv1" element={<CV1 projectName='computer vision 1'/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
