import React, { Component } from "react";
import Joi from "joi";
import Form from "../../common/from";
class RegistrationForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit() {
    console.log("Submitted");
  }
  render() {
    return (
      <div className="container">
        <h1>Registration</h1>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        <br />
        {this.renderButton("Register")}
      </div>
    );
  }
}

export default RegistrationForm;
