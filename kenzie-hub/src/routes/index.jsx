import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export const AppRoutes = () => {
  const [loggedUser, setLoggedUser] = useState({});

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login setLoggedUser={setLoggedUser} loggedUser={loggedUser} />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <Dashboard loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        }
      />
    </Routes>
  );
};
