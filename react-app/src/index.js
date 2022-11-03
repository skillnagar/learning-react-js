import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { About, Contact, History } from './App';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />}>
          <Route element={<History />} path="history" />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
);