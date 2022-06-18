import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

const Router = () => {
  
  return (
    <BrowserRouter basename="https://jonathannoh.github.io/Shopping-Cart">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;