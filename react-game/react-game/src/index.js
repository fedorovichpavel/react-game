import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

window.onload = () => {
  document.querySelector('#rad_player').style.height = '3rem';
  document.querySelector('#rad_player > div').style.display = 'flex';
}