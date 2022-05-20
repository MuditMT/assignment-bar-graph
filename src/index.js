import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Graph from './Graph';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/graph" element={<Graph />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


