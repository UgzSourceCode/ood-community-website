import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomeView } from './views/HomeView';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeView />
    </BrowserRouter>
  </React.StrictMode>,
)
