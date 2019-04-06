import React, { Component } from "react";
import joi from "joi-browser";
import validator from "validator";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
class Form extends Component {
  state = {
    Email: "",
    Password: "",
    error: ""
  };
  schema = {
    Email: joi.string(),
    Password: joi.string()
  };
  change = e => {
    this.setState({ error: "" });
    e.preventDefault();
    const key = e.currentTarget.id;
    this.setState({ [key]: e.currentTarget.value });
  };
  submit = e => {
    e.preventDefault();

    const result = validator.isEmail(this.state.Email);
    console.log(result);
    if (result === false) {
      this.setState({ error: "please enter valid email including @ " });
      return 0;
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.error && (
          <ToastContainer position="top-center">
            {toast.error(this.state.error)}
          </ToastContainer>
        )}

        <form>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.change}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
              onChange={this.change}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.submit}
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
