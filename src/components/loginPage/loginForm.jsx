import React, { Component } from "react";
import Input from "../../common/input";
import Joi from "joi";
class LoginForm extends Component {
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  //validate property to handle it onChange using Joi
  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = Joi.object({ [input.name]: this.schema[input.name] });
    const { error } = schema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];
    const account = { ...this.state.account };
    //event.currentTarget.name is the name of the input field (username or password) that triggered the event
    // access account properties using the name of it
    account[currentTarget.name] = currentTarget.value;
    this.setState({ account, errors: errors });
  };

  // validation function using Joi
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.object(this.schema).validate(
      this.state.account,
      options
    );
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault(); // prevent to reload the page when submit
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // set errors to empty object if no errors, else set errors to errors object
  };

  //////// if you wanna manipulate with dom you need to use ref as commented below ///////
  // username = React.createRef(); // create a reference to the username input dom element
  // this.username.current.value; // get the value of the username input

  //   componentDidMount() {
  //     this.username.current.focus(); // focus on the username input
  //   }

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            type="text"
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            type="password"
            error={errors.password}
            onChange={this.handleChange}
          />
          <br />
          <button
            disabled={this.validate()} // if there is an error in the form, disable the button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
