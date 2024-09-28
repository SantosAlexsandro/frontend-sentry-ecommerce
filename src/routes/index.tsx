import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsList from "../pages/products/ProductsList";
import ProductDetails from "../pages/products/ProductDetails";
import About from "../pages/aboutPage/AboutPage";
import ConstructionPage from "../pages/constructionPage/ConstructionPage";

const NotFound = () => <h1>404 - Not Found</h1>;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/category/hardware" element={<ConstructionPage />} />
      <Route path="/category/perifericos" element={<ConstructionPage />} />
      <Route path="/category/notebooks" element={<ConstructionPage />} />
      <Route path="/category/desktops" element={<ConstructionPage />} />
      <Route path="/category/monitores" element={<ConstructionPage />} />
      <Route path="/category/componentes" element={<ConstructionPage />} />
      <Route path="/category/placas-de-video" element={<ConstructionPage />} />
      <Route path="/category/processadores" element={<ConstructionPage />} />
      <Route path="/category/memoria-ram" element={<ConstructionPage />} />
      <Route path="/category/armazenamento" element={<ConstructionPage />} />
      <Route path="/category/rede" element={<ConstructionPage />} />
      <Route path="/category/smartphones" element={<ConstructionPage />} />
      <Route path="/category/tablets" element={<ConstructionPage />} />
      <Route path="/category/gaming" element={<ConstructionPage />} />
      <Route path="/category/acessorios" element={<ConstructionPage />} />
      <Route path="/category/promocoes" element={<ConstructionPage />} />
      <Route path="/category/novidades" element={<ConstructionPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
