import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import { checkUser , logout} from "../../actions/auth";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props.checkUser();
    console.log("USer In Navbar : ", this.props.user.userData);
  }


  render() {
    let { currentUserData } = this.props.user;
    return (
      <section
        className="navbar custom-navbar navbar-fixed-top top-nav-collapse"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>

            <Link to="/" className="navbar-brand">
              <span>O.</span> Rest
            </Link>
          </div>

          <div className="collapse navbar-collapse">
            {currentUserData && currentUserData.type == "admin" ? (
              <ul className="nav navbar-nav navbar-nav-first">
                <li>
                  <Link to="/" className="smoothScroll">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/reservations" className="smoothScroll">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link to="/tables" className="smoothScroll">
                    Tables
                  </Link>
                </li>
                <li>
                  <Link to="/Users" className="smoothScroll">
                    Users
                  </Link>
                </li>
              </ul>
            ) : currentUserData && currentUserData.type == "client" ? (
              <ul className="nav navbar-nav navbar-nav-first">
                <li>
                  <Link to="/" className="smoothScroll">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="smoothScroll">
                    Chef
                  </Link>
                </li>
                <li>
                  <Link to="/menus" className="smoothScroll">
                    Menus
                  </Link>
                </li>
                <li>
                  <Link to="/myBooks" className="smoothScroll">
                    My Reservations
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav navbar-nav-first">
                <li>
                  <Link to="/" className="smoothScroll">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="smoothScroll">
                    Chef
                  </Link>
                </li>
                <li>
                  <Link to="/menus" className="smoothScroll">
                    Menus
                  </Link>
                </li>
              </ul>
            )}

            <ul className="nav navbar-nav navbar-right">

              <Link to="/bookTable" className="section-btn">
                Reserve a table
              </Link>
              <li>
                {currentUserData.user_name ? (
                 <button className="btn whiteBtn" onClick={this.props.logout}>Logout</button>
                ) : (
                  <Link to="/signin">Sign In</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps, { checkUser , logout })(Navbar);
