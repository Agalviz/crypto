import React, { Component } from "react";
import Axios from "axios";

class Coins extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    Axios.get(
      `https://api.coingecko.com/api/v3/coins/${this.props.match.params?.id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    )
      .then((res) => {
        const data = res.data;
        this.setState({ data: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="coin__container">
        <div className="about__section">
          <img src={this.state.data.image?.small} alt="coin icon" />
          <br />
          <h2>{this.state.data.id}</h2>
          <br />

          <div className="coin">
            <p className="about__section--text">
              {this.state.data.description?.en}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Coins;
