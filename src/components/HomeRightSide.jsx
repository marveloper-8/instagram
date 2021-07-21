import React from "react";
// styling
import "./styles/home-right-side.scss";
// images
import pfp from "../images/pfp.jpg";

const HomeRightSide = (e) => {
  return (
    <div class="home-right-side">
      <div class="item self">
        <div class="item-left">
          <div class="image">
            <div
              class="image-inner bg-2"
              style={{
                backgroundImage: `url(${pfp})`,
                backgroundSize: `cover`,
              }}
            ></div>
          </div>
          <div class="text">username_._</div>
        </div>
        <div class="color-4 font-12">Switch</div>
      </div>

      <div class="item suggestions">
        <div class="color-2">Suggestions for you</div>
        <div class="font-12">Switch</div>
      </div>

      <div class="suggestions-container">
        <div class="item">
          <div class="item-left">
            <div class="image">
              <div
                class="image-inner bg-2"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: `cover`,
                }}
              ></div>
            </div>
            <div class="text">
              username_._
              <br />
              <span class="font-12 color-2">New to Instagram</span>
            </div>
          </div>
          <div class="color-4 font-12">Follow</div>
        </div>
        <div class="item">
          <div class="item-left">
            <div class="image">
              <div
                class="image-inner bg-2"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: `cover`,
                }}
              ></div>
            </div>
            <div class="text">
              username_._
              <br />
              <span class="font-12 color-2">New to Instagram</span>
            </div>
          </div>
          <div class="color-4 font-12">Follow</div>
        </div>
        <div class="item">
          <div class="item-left">
            <div class="image" data-status="true">
              <div
                class="image-inner bg-2"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: `cover`,
                }}
              ></div>
            </div>
            <div class="text">
              username_._
              <br />
              <span class="font-12 color-2">New to Instagram</span>
            </div>
          </div>
          <div class="color-4 font-12">Follow</div>
        </div>
        <div class="item">
          <div class="item-left">
            <div class="image">
              <div
                class="image-inner bg-2"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: `cover`,
                }}
              ></div>
            </div>
            <div class="text">
              username_._
              <br />
              <span class="font-12 color-2">New to Instagram</span>
            </div>
          </div>
          <div class="color-4 font-12">Follow</div>
        </div>
        <div class="item">
          <div class="item-left">
            <div class="image">
              <div
                class="image-inner bg-2"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: `cover`,
                }}
              ></div>
            </div>
            <div class="text">
              username_._
              <br />
              <span class="font-12 color-2">New to Instagram</span>
            </div>
          </div>
          <div class="color-4 font-12">Follow</div>
        </div>
      </div>

      <div class="extras color-3 font-11">
        About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy
        &bull; Terms &bull; Locations &bull; Top Accounts &bull; Hashtags &bull; Language
      </div>

      <div class="item color-3 font-11 copyright">
        &copy; 2021 INSTAGRAM FROM FACEBOOK
      </div>
    </div>
  );
};

export default HomeRightSide;
