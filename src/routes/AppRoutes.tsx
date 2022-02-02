import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
