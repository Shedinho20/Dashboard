import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
