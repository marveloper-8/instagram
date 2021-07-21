import React from "react";
// styling
import "./styles/home.scss";
// sections
import Navigation from '../section/Navigation'
import HomeSection from "../section/HomeSection";

const Home = (e) => {
  return (
    <div>
          <Navigation />
          <HomeSection />
    </div>
  );
};

export default Home;
