import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav__container">
        <h3 className="nav__container--heading">Intro to Crypto</h3>
        <ul className="nav__container--list">
          <Link to="/">
            <li className="list-item">Home</li>
          </Link>
          <Link to="/about">
            <li className="list-item">About Us</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
