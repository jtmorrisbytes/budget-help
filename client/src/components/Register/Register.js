import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";

import { connect } from "react-redux";

import strings from "./Register.strings.json";

import Locales from "./Locales/Locales";

class Register extends React.Component {
  static route = "/register";
  state = {
    name: "",
    localeId: 0,
    username: "",
    calendarId: 0,
    error: null,
  };
  constructor(props) {
    super(props);

    this.handlePersonNameInput = this.handlePersonNameInput.bind(this);
    this.updateLocaleId = this.updateLocaleId.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let data = {
      name: this.state.name,
      localeId: this.state.calendarId,
      calendarId: this.state.calendarId,
      username: this.state.username,
    };
    this.setState({ ...this.state, loading: true }, () => {
      Axios.put("/api/user", data)
        .then((response) => {
          console.log(response);
        })
        .finally(() => {
          this.setState({ ...this.state, loading: false });
        });
    });
  }
  handlePersonNameInput(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  updateLocaleId(e) {
    console.log("locale id update", e);
  }
  handleUsernameInput(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div id={"Register"}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Register_personName">
            {
              (strings[this.props.locales.localeId] || {})[
                "register.personName"
              ]
            }
          </label>
          <input
            id="Register_PersonName"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlePersonNameInput}
          />
          <Locales
            locales={this.props.locales.locales}
            updateLocaleId={this.updateLocaleId}
            value={this.state.localeId}
          />
          <label htmlFor="Register_username">
            {strings[this.props.locales.localeId]["register.username"]}
          </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameInput}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state = {}) {
  return {
    user: state.user,
    locales: state.locales,
  };
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
