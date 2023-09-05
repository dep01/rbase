import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout/AdminDashboardLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
const Router = () => (
  <BrowserRouter>
    <ScrollToTop />
    <ToastContainer />

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route element={<AdminDashboardLayout />}>
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
