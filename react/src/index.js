import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/navbar';
import App from './App';
import Footer from './components/footer';

import './css/style.css';

var USER_ADAT = {};

function Fo() {
  fetch('/nodejs/getUserData', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
    return res.json();
  }).then(data => {
    USER_ADAT = data;
ReactDOM.render(
    <BrowserRouter>
      <Navbar adatok={USER_ADAT}/>
      <App adatok={USER_ADAT}/>
      <Footer />
    </BrowserRouter>,
    document.getElementById('root')
  );
  }).catch(err => {
    console.log('Hiba: ' + err);
  });
}

Fo();