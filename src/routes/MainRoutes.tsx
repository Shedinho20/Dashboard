import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
