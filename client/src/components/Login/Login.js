import React from "react";
import PropTypes from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
class Login extends React.Component {
  static route = "/login";
  state = {
    username: "",
    password: "",
  };
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleInput(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }
  handleLogin(e) {
    e.preventDefault();
    console.log("login requested ", e);
  }
  render() {
    return (
      <div className="Login">
        {this.props.user.userId == null ? <h2>Please log in first</h2> : null}
        <form onSubmit={this.handleLogin}>
          <label htmlFor={"Login_username"}>Username</label>
          <input
            id="Login_username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          ></input>

          {/* <label htmlFor={"Login_password"}>Password</label>
          <input id="Login_password" name="password"></input> */}
          <button type="submit">Login </button>
          <Link to={Register.route}>Register</Link>
        </form>
      </div>
    );
  }
}

console.log("Class login ", Login.route);

function mapStateToProps(state = {}) {
  return state;
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
