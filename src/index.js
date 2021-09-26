import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { VideoProvider } from "./context/VideoProvider"
import { AuthProvider } from './context/AuthProvider';
import { UserProvider } from './context/UserInfoProvider';
import { SearchProvider } from "./context/SearchProvider"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <SearchProvider>
            <UserProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </UserProvider>
          </SearchProvider>
        </VideoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
