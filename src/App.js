import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./Components/Nav";
import Icon from './imgs/icon.png';
import './styles/App.css';

function App() {

  const [cart, setCart] = useState({});

  return (
    <div className="App">
      <header>
        <img src={Icon} alt="Jim and Bob's Jellys and Burgers: Get some jelly in your burg" className="icon"/>
        <Nav />
      </header>
      <Outlet context={[cart, setCart]}/>
    </div>
  );
}

export default App;
