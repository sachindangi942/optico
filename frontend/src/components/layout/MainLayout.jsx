import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      <main className={`min-h-[80vh] px-5 ${isHome ? "mt-12" : "mt-24"}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
