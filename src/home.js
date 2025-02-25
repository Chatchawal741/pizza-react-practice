import React from "react";
import Piz1 from "./pic/pizza1.jpg";
import Piz2 from "./pic/pizza2.jpg";
import Piz3 from "./pic/pizza3.jpg";

function Home() {
  const PicStyles = {
    width: "300px",
  };
  const WelcomeStyles = {
    marginTop: "100px",
  };
  const Center = {
    textAlign: "center",
  };
  return (
    <div style={Center}>
      <div style={WelcomeStyles}>
        <h1>ยินดีต้อนรับสู่ Pizza House ITSci Thailand</h1>
      </div>
      <div>
        <span>
          <img src={Piz1} style={PicStyles} />
        </span>
        <span>
          <img src={Piz2} style={PicStyles} />
        </span>
        <span>
          <img src={Piz3} style={PicStyles} />
        </span>
      </div>
      <footer>&#169; 2024 ITSci MJU All rights reserved.</footer>
    </div>
  );
}

export default Home;
