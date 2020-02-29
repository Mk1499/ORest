import React, { Component } from "react";

import {connect} from 'react-redux';
import {deleteTable} from '../../actions/adminControl'
import "./style.css";

 class TableCard extends Component {
  
  render() {
    return (
      <div className="card col-lg-3 col-md-4 col-sm-4">
        <img src={this.props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.email}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Max Number of Persons</li>
          <li className="list-group-item">{this.props.phone}</li>
          <li className="list-group-item">
            {" "}
            <button
              className={"btn btn-primary btn-xl "+this.props.className}
              onClick={this.props.action}
            >
              {this.props.actionName}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({

})

export default connect (mapStateToProps,{deleteTable})(TableCard)