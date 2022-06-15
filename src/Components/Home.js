import React from "react";
import '../styles/Home.css';
import DinerFood from "../imgs/diner-food-pexels-chokniti-khongchum.jpg";
import Diner from "../imgs/diner-pexels-igor-starkov.jpg";

const Home = () => {

  return (
    <div className="Home">
      <div className="home-description">
        Come check out our restaurant at 555 RoadStreet Boulevard or go to our shop to order jellies and frozen burgers to anywhere in the world!
      </div>
      <img src={Diner} alt="Diner" className="diner-photo"/>
      <img src={DinerFood} alt="Hamburgers" className="hamburger-photo"/>
      <div className="testimonial-container">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <div className="quote">Some of the best damn burgers I've ever had. I got jelly everywhere.</div>
          <div className="author">-Jimmy {'(no relation)'}</div>
        </div>
        <div className="testimonial">
          <div className="quote">I asked for a burger with no jelly and they kicked me out. I came back the next day though and got a burger with jelly. They were right to kick me out before -- I'll never have a burger without jelly again!</div>
          <div className="author">-Anonymous</div>
        </div>
        <div className="testimonial">
          <div className="quote">Well I guess it was fine.</div>
          <div className="author">-Remy</div>
        </div>
        <div className="testimonial">
          <div className="quote">Better than the Krabby Patty</div>
          <div className="author">-Gary</div>
        </div>
        <div className="testimonial">
          <div className="quote">I sure got some jelly in my burg!</div>
          <div className="author">-Baron von Jellington</div>
        </div>
      </div>
    </div>
  )
}

export default Home;