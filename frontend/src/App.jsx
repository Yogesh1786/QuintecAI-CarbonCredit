import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import CalculateCarbonEmitted from "./components/home/CalculateCarbonEmitted";
import Industry from "./components/home/Industry";

const App = () => (
  <BrowserRouter>
    <div className="font-sans bg-gray-50">
      <Navbar />
      <div className="mt-20">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />

          {/* Login Page */}
          <Route path="/login" element={<AuthPage />} />

          <Route path="/" element={<Industry />} />
          <Route path="/footprintcalc" element={<CalculateCarbonEmitted />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
