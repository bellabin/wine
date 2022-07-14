import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home"
import LoginPage from "./pages/login/Login";
import "./assets/asset.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      <script src="./assets/asset.js"/>
    </Router>
  );
}

export default App;
