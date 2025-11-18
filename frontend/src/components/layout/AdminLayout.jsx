import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/adminDashboard" className="hover:underline">Dashboard</NavLink>
          <NavLink to="/serviceCreate" className="hover:underline">Create Service</NavLink>
          {/* Add more links here */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet /> {/* This renders the child route component */}
      </main>
    </div>
  );
};

export default AdminLayout;
