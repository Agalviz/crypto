import React, { Component } from "react";
import List from "../components/List";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
// import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <List />
      </>
    );
  }
}

export default Home;
