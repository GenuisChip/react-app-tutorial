import React, { Component } from "react";
import Input from "../../common/input";
import Joi from "joi";
import Form from "../../common/from";
class LoginForm extends Form {
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  doSubmit() {
    console.log("Submitted");
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <br />
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
