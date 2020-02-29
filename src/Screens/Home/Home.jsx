import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner";
import Team from "../Team/Team";
import { connect } from "react-redux";
import { checkUser } from "../../actions/auth";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.checkUser();
  }

  render() {
    return (
      <>
        <Banner />
        <Team />
      </>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, { checkUser })(Home);
