import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import propTypes from "prop-types";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: propTypes.bool.isRequired,
    user: propTypes.object.isRequired,
    getUser: propTypes.func.isRequired
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hireable
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return <div>{name}</div>;
  }
}

export default User;
