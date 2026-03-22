import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TravelPage from './pages/TravelPage'; // Import Travel Page
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/travel" element={<TravelPage />} />
    </Routes>
  </Router>
);


