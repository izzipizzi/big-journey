import React from 'react';
import './App.scss';
import {AppRouter} from "./Router";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="app">
                <AppRouter/>
            </div>
        </Router>
    );
}

export default App;
