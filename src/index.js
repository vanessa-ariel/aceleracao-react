import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.register();
