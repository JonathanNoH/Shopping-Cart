import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "./Components/Nav";
import Icon from './imgs/icon.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={Icon} alt="Jim and Bob's Jellys and Burgers: Get some jelly in your burg" className="icon"/>
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
