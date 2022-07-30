import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { KeyNavigate } from './helper/KeyNavigate';
import Login from './Views/Login';
import LoginAdmin from './Views/LoginAdmin';
import Layout from './Views/Layout';


import Provider from './Views/Provider'
import ProductType from './Views/ProductType'
import Brand from './Views/Brand'
import Product from './Views/Product'
import Bill from './Views/Bill'
import Promo from './Views/Promo'
import PromoProduct from './Views/PromoProduct'
import Revenue from './Views/Revenue'
import Customer from './Views/Customer'
import Staff from './Views/Staff'
import ProductCus from './Views/ProductCus';
import Cart from './Views/Cart';
import Account from './Views/Account';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} ></Route>
        <Route path={KeyNavigate.Login} element={<Login />} />
        <Route path={KeyNavigate.LoginAdmin} element={<LoginAdmin />} />
        <Route path={KeyNavigate.ProductCus} exact element={<ProductCus />} />
        <Route path={KeyNavigate.Cart} exact element={<Cart />} />
        <Route path={KeyNavigate.Account} exact element={<Account />} />




        <Route path={KeyNavigate.Layout.concat('/*')} element={<Layout>
          <Route path={KeyNavigate.Provider} exact element={<Provider />} />
          <Route path={KeyNavigate.ProductType} element={<ProductType />} />
          <Route path={KeyNavigate.Brand} element={<Brand />} />
          <Route path={KeyNavigate.Product} element={<Product />} />
          <Route path={KeyNavigate.Bill} element={<Bill />} />
          <Route path={KeyNavigate.Promo} element={<Promo />} />
          <Route path={KeyNavigate.PromoProduct} element={<PromoProduct />} />
          <Route path={KeyNavigate.Revenue} element={<Revenue />} />
          <Route path={KeyNavigate.Customer} element={<Customer />} />
          <Route path={KeyNavigate.Staff} element={<Staff />} />
        </Layout>} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
