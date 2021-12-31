import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { render } from "@testing-library/react";

class App extends Component {
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

  handleDecrement = (counter) => {
    if (counter.value <= 0) return;
    counter.value--;
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
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <main className="Container">
          <Counters
            counters={this.state.counters}
            handleReset={this.handleReset}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
