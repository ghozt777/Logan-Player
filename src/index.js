import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { LoginProvider } from "./context/LoginProvider"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
