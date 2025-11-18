import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Public Pages
const Home = lazy(() => import("../pages/Home"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Services = lazy(() => import("../pages/Services"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails"));
const Quotes = lazy(() => import("../pages/Quotes"));
const Financing = lazy(() => import("../pages/Financing"));
const About = lazy(() => import("../pages/About"));
const GivingBack = lazy(() => import("../pages/GivingBack"));
const Login = lazy(() => import("../pages/Login"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// Admin Pages
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const ServiceCreate = lazy(() => import("../pages/admin/ServiceCreate"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetails />} /> {/* Added ServiceDetails route */}
          <Route path="quotes" element={<Quotes />} />
          <Route path="financing" element={<Financing />} />
          <Route path="about" element={<About />} />
          <Route path="giving-back" element={<GivingBack />} />

          {/* Public Route */}
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

          {/* Private Routes */}
          <Route path="/adminDashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path="/serviceCreate" element={<PrivateRoute><ServiceCreate /></PrivateRoute>} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;