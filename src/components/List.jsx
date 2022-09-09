import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    data: [],
    // Coins: [],
  };
  componentDidMount() {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="main">
        <ul className="main__list">
          {this.state.data.map((data) => (
            <li className="main__list--item" key={data.id} value={data.id}>
              <Link style={{ color: "black" }} to={`/coins/${data.id}`}>
                <>
                  <img
                    className="coin__logo"
                    alt="coin icon"
                    src={data.image}
                  />
                </>
                <h2>{data.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
