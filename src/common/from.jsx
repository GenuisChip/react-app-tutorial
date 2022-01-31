import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  // validation function using Joi
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.object(this.schema).validate(
      this.state.data,
      options
    );
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  //validate property to handle it onChange using Joi
  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = Joi.object({ [input.name]: this.schema[input.name] });
    const { error } = schema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault(); // prevent to reload the page when submit
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // set errors to empty object if no errors, else set errors to errors object
    this.doSubmit();
  };

  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];
    const data = { ...this.state.data };
    //event.currentTarget.name is the name of the input field (username or password) that triggered the event
    // access data properties using the name of it
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data, errors: errors });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()} // if there is an error in the form, disable the button
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
