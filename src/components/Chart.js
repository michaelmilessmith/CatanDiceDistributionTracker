"use strict"

import React from "react";
import NumberBox from "./NumberBox";

export default class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      numbers : this.props.numbers
    };
  }
  _handlePlus(numberToAddTo) {
    const numbers = this.state.numbers;
    numbers[numberToAddTo - 2].count++;
    this.setState({numbers: numbers});
  }
  render() {
    const highestCount = this.state.numbers.reduce((a, b) => a > b.count ? a : b.count, 0);
    return (
      <div>
        {this.state.numbers.map(item => <NumberBox number={item.number} count={item.count} onClick={() => this._handlePlus(item.number)} highest={highestCount}/> )}
      </div>
    );
  }
}
