import React, { Component } from "react";
import Footer from "../components/Footer";
import fmAvatar from "../assets/avatar.png";
import agAvatar from "../assets/pikachu-sprite-gif-6.gif";

class About extends Component {
  render() {
    return (
      <div className="hero__about">
        <div className="hero__about--box">
          <h1 className="hero__about--header">ABOUT US</h1>
        </div>
        <div className="about__me">
          <div className="about__me--felipe">
            <img className="fmAvatar" src={fmAvatar} alt="" />
            <h3 className="about__me--info">Felipe Moreira</h3>
            <p className="about__me--info">
              Web Dev Student at BrainStation Miami
            </p>
          </div>
          <div className="about__me--anthony">
            <img className="agAvatar" src={agAvatar} alt="" />
            <h3 className="about__me--info">Anthony Galviz</h3>
            <p className="about__me--info">
              Web Dev Student at BrainStation Miami
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
