import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { WeatherForecastService, OpenAPI } from './services/openapi';
import UserPage from './features/user/user';
import Main from './Main';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <div>               
                <Main />                
            </div>
        </>
    )
}

export default App;
