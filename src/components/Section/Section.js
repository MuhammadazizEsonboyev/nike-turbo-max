import React from "react";
import "./Section.css";
import video from "./imgSection/pexels-koolshooters-8533114.mp4";
const word = require("./imgSection/View.png");

export default class Section extends React.Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-2">
                <img className="word" src={word} alt="" />
              </div>
              <div className="col-5">
                <div className="box">
                  <h1 className="telling">
                    Telling your story <br /> with videos
                  </h1>
                  <br />
                  <p className="your">
                    Now that you have a ready strategy <br /> to move forward,
                    it’s time to come <br /> up with some ideas.
                  </p>
                </div>
              </div>
              <div className="col-5">
                <video
                  width={600}
                  height={433}
                  loop
                  autoPlay
                  playsInline
                  muted
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
