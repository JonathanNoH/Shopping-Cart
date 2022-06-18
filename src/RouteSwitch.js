import React from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

const Router = () => {
  
  return (
    <HashRouter basename="">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Router;