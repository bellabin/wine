import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router';
import Layout from './Views/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/asset.css"
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
import LayoutIndex from './Views/Index';
import React from 'react';


import { KeyNavigate } from './helper/KeyNavigate';
import Login from './Views/Login';
import LoginAdmin from './Views/LoginAdmin';
function App() {
  return (
    <React.Fragment>
      <LayoutIndex>
        
          <Route path={KeyNavigate.Login} exact element={<Login />} />
          <Route path={KeyNavigate.LoginAdmin} exact element={<LoginAdmin />} />

        
      </LayoutIndex>

      {/* <Layout>
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

      </Layout> */}
    </React.Fragment>


  );
}

export default App;
