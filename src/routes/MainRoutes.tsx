import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
