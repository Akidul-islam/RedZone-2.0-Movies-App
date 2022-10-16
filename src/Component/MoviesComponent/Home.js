import React from "react";
import Movies from "./Moives";
import Banner from "./Banner";

const Home = () => {
  return (
    <div style={{ background: "black" }}>
      <Banner />
      <Movies />
    </div>
  );
};

export default Home;
