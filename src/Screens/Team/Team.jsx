import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Cheif from "../../Components/TeamMember";
export default class Team extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}

        <section id="team" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                  <h2>Meet our chefs</h2>
                  <h4>They are nice &amp; friendly</h4>
                </div>
              </div>

              <Cheif
                quote="Duis vel lacus id magna mattis vehicula"
                name="New Catherine"
                position="Kitchen Officer"
                img="images/team-image1.jpg"
              />
              <Cheif
                quote="Duis vel lacus id magna mattis vehicula"
                name="Lindsay Perlen"
                position="Owner &amp; Manager"
                img="images/team-image2.jpg"
              />
              <Cheif
                quote="Etiam auctor enim tristique faucibus"
                name="Isabella Grace"
                position="Pizza Specialist"
                img="images/team-image3.jpg"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
