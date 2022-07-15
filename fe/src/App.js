import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home"
import LoginPage from "./pages/login/Login";
import AdminPage from "./pages/admin"
import EditCustomerPage from "./pages/Edit-customer"
import EditPromotionPage from "./pages/Edit-promotion"
import ProductPage from "./pages/product/Product"
import "./assets/asset.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        {/* <Route path="/" element={<AdminPage/>} /> */}
        <Route path="/edit-customer" element={<EditCustomerPage/>} />
        <Route path="/edit-promo" element={<EditPromotionPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        {/* <Route path="/" element={<AddPromotionPage/>} /> */}
      </Routes>
      <script src="./assets/asset.js"/>
    </Router>
  );
}

export default App;
