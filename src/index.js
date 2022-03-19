import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import reportWebVitals from './reportWebVitals';
const root = document.querySelector(":root");

var backGrounds = [
  'https://media3.giphy.com/media/eHGB0TFYUgC875ME9Q/giphy.gif',
  'https://media3.giphy.com/media/VxvVJjkcyGMCSjfoNV/giphy.gif',
  'https://media1.giphy.com/media/l6vxeaE5CAp4AeCx0o/giphy.gif',
  'https://media0.giphy.com/media/AS837RIcqwKMwxKWzy/giphy.gif',
];

var selectedBackGround = backGrounds[Math.floor(Math.random() * backGrounds.length)];
root.style.setProperty("--home-bg-video", "url("+selectedBackGround+")");

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
