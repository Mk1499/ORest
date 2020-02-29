import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {signUp} from '../../actions/auth';
import {connect} from 'react-redux'; 

 class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      phone: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password,
      user_name: this.state.username,
      phone: this.state.phone
    };
    console.log("Sub Data : ", userData);
    this.props.signUp(userData);
  };
  render() {
    return (
      <section className="signInSection" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Create an Account</h2>
                <h4>Tea Time &amp; Dining</h4>
              </div>
            </div>

            <form className="col-md-6" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="clientUsername">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="clientUsername"
                  placeholder="Enter Username"
                  name="username"
                  required
                  onChange={username =>
                    this.setState({ username: username.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label for="clientEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="clientEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  required
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
                  required
                  onChange={password =>
                    this.setState({ password: password.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label for="clientPhone">Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  id="clientPhone"
                  placeholder="Enter your phone number"
                  name="phone"
                  required
                  onChange={phone =>
                    this.setState({ phone: phone.target.value })
                  }
                />
              </div>
              <div className="linkDiv">
                <Link to="signIn">Already a Memeber</Link>
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

export default connect (mapStateToProps,{signUp})(SignUp)