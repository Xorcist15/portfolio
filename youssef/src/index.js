import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';      // Main app component
import './App.css';         // Tailwind CSS
import { BrowserRouter as Router } from 'react-router-dom';

// React rendering to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);
