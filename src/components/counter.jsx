import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 10,
  }
  styles = {
    fontSize: 50,
    fontWeight: 'bold'
  }
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <p style={{ fontSize: 30 }}>Inline style</p>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;