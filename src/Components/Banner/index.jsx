import React, { Component } from 'react'; 
import './style.css';
import {Link} from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <header className="masthead">
            <div className="container">
              <div className="intro-text">
                <div className="intro-lead-in">New Restaurant in Town</div>
                <div className="intro-heading">The best dinning quality can be here too !!</div>
                <Link className="btn btn-primary btn-xl" to="/bookTable">Reserve a Table</Link>
              </div>
            </div>
          </header>
        )
    }
}
