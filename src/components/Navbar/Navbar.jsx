import React, { Component } from "react";
import "./Navbar.css";

const logo = require("../../img/Vector.png");
const keta = require("../../img/usama-akram-kP6knT7tjn4-unsplash-removebg 1.png");
const nike = require("../../img/Ellipse 11.png");
const keta2 = require("../../img/Ellipse 12.png");
const star = require("../../img/Star 1.png");
const abs = require("../../img/Ellipse 10.png");

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <div className="container">
              <div className="row justify-content-between mt-5">
                <div className="col-2">
                  <img src={logo} alt="" />
                </div>
                <div className="col-4">
                  <ul className="list">
                    <li className="active list_item">
                      <span>Home</span>
                    </li>
                    <li className="list_item">Product</li>
                    <li className="list_item">About</li>
                    <li className="list_item">Review</li>
                  </ul>
                </div>
                <div className="col-2">
                  <button className="btn_nav">Shpo now</button>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row mt-5">
              <div className="col-6">
                <div className="header_div">
                  <div className="header_div2">
                    <h1 className="header_h1">Bring power to your steps.</h1>
                    {/* <img src={nike} className="header_r" alt="" /> */}
                  </div>

                  <h1 className="header_text">Walk the line.</h1>

                  <p className="header_p">
                    Now that you have a ready strategy to move forward, <br />
                    it’s time to come up with some ideas.
                  </p>

                  <p className="header_p1">
                    Now that you have a <span>ready strategy</span> to move
                    forward,{" "}
                  </p>

                  <h1 className="header_price">
                    Price : $125
                    <span>
                      <s> $169</s>
                    </span>
                  </h1>

                  <div className="buton">
                    <button className="button_shpo">Shpo now</button>
                    <button className="button_learn">Learn More</button>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <h1 className="number">70k</h1>
                      <p className="rewev">CUSTOMERS</p>
                    </div>
                    <div className="col-2">
                      <h1 className="number1">17k</h1>
                      <p className="rewev1">CUSTOMERS</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img className="star" src={star} alt="" />
                
               <div className="big">
               <img className="star1" src={keta} alt="" />
                <img className="logo" src={abs} alt="" />
                <img className="logo1" src={nike} alt="" />
                  <img src={keta2} alt="" />
               </div>
              </div>

              <div className="col-6">
                <div className="img">
                  {/* <img src={keta} className="img_keta" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
