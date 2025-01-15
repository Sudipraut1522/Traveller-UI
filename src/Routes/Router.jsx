import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Register from "../Pages/Register";
import SearchResult from "../Pages/SearchResult";
import ProductDetails from "../Pages/ProductDetails";
import CheckOut from "../Pages/CheckOut";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
