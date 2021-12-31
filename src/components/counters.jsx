import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <ul>
          {this.props.counters.map((counter) => (
            <li key={counter.id}>
              <Counter
                onDelete={(id) => this.props.handleDelete(id)}
                onIncrement={(counter) => this.props.handleIncrement(counter)}
                onDecrement={(counter) => this.props.handleDecrement(counter)}
                counter={counter}
              >
                #This Is Children {counter.id}
              </Counter>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
