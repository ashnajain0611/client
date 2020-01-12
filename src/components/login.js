import React, { Component } from "react";
import httpService from '../services/httpServices';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    if (this.state.username === "1" && this.state.password === "q") {
      console.log("USER PROJECTS");
      console.log(await httpService.get(`/login/${this.state.username}/${this.state.password}`))
      this.props.history.push("/projects");
    } else {
      return this.setState({ error: "Wrong input" });
    }
    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  redirectToSignUp() {
    this.props.history.push("/register");
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label className="LoginField">User Name</label>
          <input
            type="text"
            data-test="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />

          <label className="PasswordField">Password</label>
          <input
            type="password"
            data-test="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />

          <input type="submit" value="Log In" data-test="submit" />

          <button type="button" onClick={this.redirectToSignUp}>
            Sign Up
          </button>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
