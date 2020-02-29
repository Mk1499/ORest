import React, { Component } from "react";

import './style.css'

export default class User extends Component {
  render() {
    return (
      <div className="card col-md-3 col-sm-12">
        <img src={this.props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.email}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.props.phone}</li>
        </ul>
      </div>
    );
  }
}
