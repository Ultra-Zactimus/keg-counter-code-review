import React, { Component } from "react";

class KegControl extends Component {
  state = [
    {
      name: "Raven's Eye", 
      brand: "IPA", 
      price: 7.00,
      alcoholContent: 0.08
    },
    {
      name: "Sol",
      brand: "Light Beer",
      price: 5.00,
      alcoholContent: 0.05
    },
    {
      name: "Autumn Mist",
      brand: "Add Stuff",
      price: 5.00,
      alcoholContent: 0.06
    },
    {
      name: "Dragon Flame",
      brand: "IPA",
      price: 8.00,
      alcoholContent: 0.09
    }
  ]

  render() {
    return (
      <React.Fragment>
        {this.state.map((beers =>
          <ul>
            <li>{beers.name}</li>
          </ul>
          ))}
      </React.Fragment>
    );
  }
}