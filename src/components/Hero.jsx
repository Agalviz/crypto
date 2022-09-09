import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero--box">
          <h1 className="hero--header">Crypto-currency</h1>
          <p className="hero--description">
            A digital currency in which transactions are verified and records
            maintained by a decentralized system using cryptography, rather than
            by a centralized authority.
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
