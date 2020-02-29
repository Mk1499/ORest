import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'; 
import {addTable} from '../../actions/adminControl';

 class AddTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      maxPersons: 0
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    let tableData = {
      label: this.state.label,
      max_persons: this.state.maxPersons
    };
    console.log("Sub Data : ", tableData);
    this.props.addTable(tableData);
  };
  render() {
    return (
      <section className="signInSection" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Add New Table</h2>
                <h4>Expand Restaurant</h4>
              </div>
            </div>

            <form className="col-md-6" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="clientUsername">Table Label</label>
                <input
                  type="text"
                  className="form-control"
                  id="clientUsername"
                  placeholder="Enter Table Label"
                  name="username"
                  required
                  onChange={label =>
                    this.setState({ label: label.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label for="clientEmail">Persons</label>
                <input
                  type="number"
                  className="form-control"
                  id="clientEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Max Number of person"
                  name="email"
                  required
                  onChange={persons =>
                    this.setState({ maxPersons: persons.target.value })
                  }
                />
                <small id="emailHelp" className="form-text text-muted">
                  Enter Maximum number of persons that your new table can have
                </small>
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

export default connect (mapStateToProps,{addTable})(AddTable)