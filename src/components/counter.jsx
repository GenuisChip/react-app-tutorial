import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>{this.props.children}</h4>
        <span className={this.getClassName()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getClassName() {
    var classes = "badge bg-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    return this.props.counter.value === 0 ? (
      <h6>Zero</h6>
    ) : (
      <h6> {this.props.counter.value}</h6>
    );
  }
}

export default Counter;
