import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };

  handleIncrement = (counter) => {
    counter.value++;
    const indexOfCounter = this.state.counters.indexOf(counter);
    const counters = [...this.state.counters];
    counters[indexOfCounter] = counter;
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <ul>
          {this.state.counters.map((counter) => (
            <li key={counter.id}>
              <Counter
                onDelete={(id) => this.handleDelete(id)}
                onIncrement={(counter) => this.handleIncrement(counter)}
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
