import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as auth from '../../../../redux/Actions/auth.action'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  loginHandler = (e) => {
    e.preventDefault();
    const { email, password } = this.state
    if (email === '') {
      alert("email is empty")
    } else if (password === '') {
      alert("password is empty")
    } else {
      const user = {
        email,
        password,
      }
      this.props.Signin(user)
    }
    this.setState({
      password: '',
    })
  }
  render() {
    const { email, password } = this.state
    return (
      <div className="login-form login-signin" id="kt_login_signin_form">
        {/* begin::Head */}
        <div className="text-center mb-10 mb-lg-20">
          <p className="text-muted font-weight-bold">
            Enter your username and password
          </p>
        </div>
        <form
          className="form fv-plugins-bootstrap fv-plugins-framework"
        >
          <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
            <div className="alert-text ">
              Use account <strong>admin@gmail.com</strong> and password{" "}
              <strong>demo</strong> to continue.
              </div>
          </div>
          <div className="form-group fv-plugins-icon-container">
            <input
              placeholder="Email"
              type="email"
              className={`form-control form-control-solid h-auto py-5 px-6 `}
              name="email"
              value={email}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group fv-plugins-icon-container">
            <input
              placeholder="Password"
              type="password"
              className={`form-control form-control-solid h-auto py-5 px-6`}
              name="password"
              value={password}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
            <Link
              to="/auth/forgot-password"
              className="text-dark-50 text-hover-primary my-3 mr-2"
              id="kt_login_forgot"
            >
            </Link>
            <button
              id="kt_login_signin_submit"
              type="submit"
              className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
              onClick={this.loginHandler}
            >
              <span>Sign In</span>
              {/* {loading && <span className="ml-3 spinner spinner-white"></span>} */}
            </button>
          </div>
        </form>
        {/*end::Form*/}
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    Signin: (login) => dispatch(auth.login(login)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);