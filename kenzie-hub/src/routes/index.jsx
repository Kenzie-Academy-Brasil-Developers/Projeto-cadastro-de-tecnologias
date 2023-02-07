import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { Dashboard } from "../components/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
};
