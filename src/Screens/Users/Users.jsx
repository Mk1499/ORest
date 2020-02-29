import React, { Component } from "react";
import { connect } from "react-redux";
import { checkUser } from "../../actions/auth";
import { getAllUsers } from "../../actions/adminControl";

import Cheif from "../../Components/TeamMember";
import UserCard from "../../Components/UserCard/User";

class Users extends Component {
  constructor(props) {
    super(props);
    // this.props.checkUser("admin")
    console.log("user : ", this.props.user);
  }
  componentDidMount = async () => {
    this.props.getAllUsers();
  };

  render() {
    const { user, allUsers } = this.props;
    return allUsers.length === 0 ? (
      <section class="preloader">
        <div class="spinner">
          <span class="spinner-rotate"></span>
        </div>
      </section>
    ) : (
      <section id="team" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Meet Your Clients</h2>
                <h4>They are nice &amp; friendly</h4>
              </div>
            </div>
            <div className="col-md-12">
              {allUsers.map(user => (
                <UserCard
                  phone={user.phone}
                  name={user.user_name}
                  email={user.email}
                  img="images/team-image1.jpg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUserData,
  allUsers: state.admin.allusers
});

export default connect(mapStateToProps, { checkUser, getAllUsers })(Users);
