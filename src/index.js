import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuizComponent from './components/QuizComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizComponent />
  </React.StrictMode>
);