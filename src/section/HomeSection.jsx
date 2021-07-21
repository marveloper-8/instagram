import React  from "react";
// styling
import "./styles/home-section.scss";
// components
import Status from '../components/Status'
import Post from "../components/Post";
import HomeRightSide from "../components/HomeRightSide";

const HomeSection = (e) => {
  return (
    <section class="home-section">
        <div class="home-section-inner">
            <div class="left">
                <Status />
                <Post />
            </div>
            <div class="right">
              <HomeRightSide />
            </div>
        </div>
        
    </section>
  );
};

export default HomeSection;
