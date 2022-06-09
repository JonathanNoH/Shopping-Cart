import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <div>App</div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
