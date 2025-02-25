import React from "react";
import Home from "./home";
import "./routers-main.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import PizzaDetails from "./pizza-details";
import Pizza from "./pizza";
import AboutUs from "./aboutus";
function RoutersMain() {
  const Styles = {
    padding: "10px",
  };
  return (
    <BrowserRouter>
      <div style={Styles}>
        <nav className="Nav">
          <NavLink to="/" className="Link">
            Home
          </NavLink>
          <NavLink to="/pizza-details" className="Link">
            Pizza Details
          </NavLink>
          <NavLink to="/order-pizza" className="Link">
            Order Pizza
          </NavLink>
          <NavLink to="/contact-us" className="Link">
            Contact Us
          </NavLink>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza-details" element={<PizzaDetails />} />
          <Route path="/order-pizza" element={<Pizza />} />
          <Route path="/contact-us" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutersMain;
