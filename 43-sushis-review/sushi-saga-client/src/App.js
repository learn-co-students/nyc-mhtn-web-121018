import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sushis: [],
      randomSushis: [],
      plates: [],
      wallet: 100
    };
  }

  componentDidMount() {
    fetch(API)
      .then(result => result.json())
      .then(sushis =>
        this.setState({
          sushis: sushis
        })
      )
      .then(result => this.getSushis());
  }

  getSushis = () => {
    let sushis = this.state.sushis;
    let randomSushis = [];
    // i know i can get matching ids potentially which can make multiple sushis disappear
    // add uniqueness check to make sure that every random Sushi has a different id
    for (let i = 4; i > 0; i--) {
      let sushi = sushis[Math.floor(Math.random() * sushis.length)];
      randomSushis.push({ eaten: false, ...sushi });
    }
    this.setState({
      randomSushis: randomSushis
    });
  };

  eatSushi = (sushiId, price) => {
    console.log(sushiId);
    let newRandomSushis = this.state.randomSushis.map(sushi => {
      if (sushi.id === sushiId) {
        sushi.eaten = true;
        return sushi;
      } else {
        return sushi;
      }
    });
    console.log(newRandomSushis);

    this.setState({
      randomSushis: newRandomSushis,
      plates: [...this.state.plates, { plate: 1 }],
      wallet: this.state.wallet - price
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.randomSushis}
          getSushis={this.getSushis}
          eatSushi={this.eatSushi}
          wallet={this.state.wallet}
        />
        <Table plates={this.state.plates} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;
