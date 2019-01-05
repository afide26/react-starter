import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    let { counters } = this.props;
    console.log(counters);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
