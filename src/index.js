import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Game />
    </Router>
  </React.StrictMode>
);