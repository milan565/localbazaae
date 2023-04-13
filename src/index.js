import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductFetch from './contextApi/ProductFetch';
// import { Cartprovider } from './contextApi/Cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductFetch>
   <BrowserRouter>
   <Provider store={store}>
   <App />
    </Provider>
      
    
    </BrowserRouter>
   </ProductFetch>

);


reportWebVitals();
