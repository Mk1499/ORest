import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux'; 

import {bookTable} from '../../actions/client'
import "./style.css";

 class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      noOfPersons: 2,
      tablesRes: []
    };
  }

  bookTable = ()=>{
      this.props.hideForm(); 
      this.props.bookTable(this.props.tableId, this.state.noOfPersons,this.state.startDate,this.state.endDate)
  }

  render() {
    return (
      <div className="bookCard col-md-4 card wow fadeInDown">
        <div className="col-md-12 dateDiv">
          <label className="dateLabel">From</label>
          <DatePicker
            selected={this.state.startDate}
            onChange={date => this.setState({ startDate: date })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            minDate={new Date()}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="From"
          />
        </div>
        <div className="col-md-12 dateDiv">
          <label className="dateLabel">To</label>
          <DatePicker
            selected={this.state.endDate}
            onChange={date => this.setState({ endDate: date })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            minDate={this.state.startDate}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="From"
          />
        </div>
        <div className="col-md-6 form-group">
          <select
            className="form-control personsSelect"
            id="persons"
            onChange={num =>
              this.setState({
                noOfPersons: parseInt( num.target.value)
              })
            }
          >
            <option value={2}>2 Persons</option>
            <option value={3}>3 Persons</option>
            <option value={4}>4 Persons</option>
            <option value={5}>5 Persons</option>
            <option value={6}>6 Persons</option>
            <option value={7}>7 Persons</option>
            <option value={8}>8 Persons</option>
            <option value={9}>9 Persons</option>
            <option value={10}>10 Persons</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.bookTable}>
          Confirm
        </button>
        <button
          className="btn btn-primary closeBtn"
          onClick={this.props.hideForm}
        >
          X
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({

})
export default connect (mapStateToProps,{bookTable})(BookForm); 