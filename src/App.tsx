import React from "react";
import { Navbar, Notifications } from "./component/Compounds";
import { MainRoutes } from "./routes/MainRoutes";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Notifications />
    </div>
  );
}

export default App;
