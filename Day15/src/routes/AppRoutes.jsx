import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllProducts, ProductDetails } from "../Pages/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllProducts />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;