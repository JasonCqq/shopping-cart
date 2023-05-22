import React, { useEffect } from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

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
        <Link to="/store" className="shop-now-button">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}

export default Home;
