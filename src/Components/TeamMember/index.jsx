import React, { Component } from "react";
import './style.css'

export default class TeamMember extends Component {
  render() {
    return (
      <div class="col-md-4 col-sm-4">
        <div class="team-thumb wow fadeInUp" data-wow-delay="0.4s">
          <img src= {this.props.img} class="img-responsive" alt="" />
          <div class="team-hover">
            <div class="team-item">
              <h4>{this.props.quote}</h4>
              {/* <ul class="social-icon">
                <li>
                  <a href="#" class="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-flickr"></a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div class="team-info">
          <h3>{this.props.name}</h3>
          <p>{this.props.position}</p>
        </div>
      </div>
    );
  }
}
