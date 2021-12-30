import React, { Component } from "react";
class Counter extends Component {
  state = { count: this.props.value };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <h4>{this.props.children}</h4>
        <span className={this.getClassName()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  getClassName() {
    var classes = "badge bg-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  formatCount() {
    return this.state.count === 0 ? (
      <h6>Zero</h6>
    ) : (
      <h6> {this.state.count}</h6>
    );
  }
}

export default Counter;
