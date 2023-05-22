import React from "react";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="main">
      <div className="welcome-message">
        <h1>Welcome to the Cap Shop, where capping is our specialty!</h1>
        <h2 className="brief-description">
          Here, we celebrate the fine art of capping with our exceptional
          collection of caps that blends style. Step into our world where
          capping reigns supreme, and explore a plethora of head-turning
          designs.
        </h2>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Home;
