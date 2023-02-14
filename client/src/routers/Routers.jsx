import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BikeListing from "../pages/BikeListing";
import BikeDetails from "../pages/BikeDetails";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
/*import Contact from "../pages/Contact";*/
const Routers = () => {
    return (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/bikes" element={<BikeListing />} />
          <Route path="/bikes/:slug" element={<BikeDetails />} />

          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
    };
export default Routers;
