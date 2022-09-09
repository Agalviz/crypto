import React, { Component } from "react";
import facebookIcon from "../assets/Icon-facebook.svg";
import instagramIcon from "../assets/Icon-instagram.svg";
import twitterIcon from "../assets/Icon-twitter.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__links">
          <h3>Contact Us</h3>
        </div>
        <div className="footer__icons">
          <img src={facebookIcon} alt="facebook logo" />
          <img src={instagramIcon} alt="Instagram logo" />
          <img src={twitterIcon} alt="Twitter logo" />
        </div>
      </div>
    );
  }
}

export default Footer;
