import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { LoginProvider } from "./context/LoginProvider"
import { VideoProvider } from "./context/VideoProvider"
import { SearchProvider } from "./context/SearchProvider"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <SearchProvider>
          <LoginProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </LoginProvider>
        </SearchProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
