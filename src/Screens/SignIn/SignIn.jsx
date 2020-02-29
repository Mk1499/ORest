import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'; 
import {connect} from 'react-redux'; 
import {login} from '../../actions/auth'; 

 class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    console.log("Coo : ", Cookies.get("orestToken"));
    
  }

  handleSubmit = async event => {
    event.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("Sub Data : ",userData);

   this.props.login(userData)

  };
  render() {
    return (
      <section className="signInSection" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Sign In</h2>
                <h4>Tea Time &amp; Dining</h4>
              </div>
            </div>

            <form className="col-md-6" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="clientEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="clientEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  onChange={email =>
                    this.setState({ email: email.target.value })
                  }
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="clientPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="clientPassword"
                  placeholder="Password"
                  onChange={password =>
                    this.setState({ password: password.target.value })
                  }
                />
              </div>
              <div className="linkDiv">
                <Link to="signUp">
                  Create an Account
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {login})(SignIn); 