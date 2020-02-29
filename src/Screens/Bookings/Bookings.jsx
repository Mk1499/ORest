import React, { Component } from "react";
import { getReservations, deleteReservation } from "../../actions/adminControl";
import {authEntry} from '../../actions/auth'; 

import moment from "moment";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style.css";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.props.getReservations();
    let now = new Date(); 
    this.state = {
      date: now.toString()
    };
    this.props.authEntry("admin")
  }

  changeDate = date => {
    console.log("DATE : ",moment(date).format("YYYY-MM-DD"));
    let converted = moment(date).format("YYYY-MM-DD") ; 
    
    this.setState({ date : converted });
  };

  render() {
    const { reservations, loading } = this.props;
    return loading ? (
      <section className="preloader">
        <div className="spinner">
          <span className="spinner-rotate"></span>
        </div>
      </section>
    ) : (
      <section id="team" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Reservations</h2>
                <h4>Tea Time &amp; Dining</h4>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 dateFilter">
              <DatePicker
                selected={new Date(this.state.date)}
                onChange={date => this.changeDate(date)}
            
                dateFormat="yyyy-MM-dd"
              />{" "}
              <button
                className="btn btn-primary btn-xl"
                href="#services"
                onClick={() => this.props.getReservations(this.state.date)}
              >
                Filter by Date
              </button>
            </div>
          </div>
          {reservations.length === 0 ? (
            <p>Sorry But There is not Reservations for choosesn date </p>
          ) : (
            <div className="col-md-12 col-sm-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Table#</th>
                    <th scope="col">Client Email</th>
                    <th scope="col">Client Phone</th>
                    <th scope="col">Number of Persons</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(reserve => (
                    <tr>
                      <th scope="row">{reserve.id}</th>
                      <td>{reserve.tableId}</td>
                      <td>{reserve.userEmail}</td>
                      <td>{reserve.userPhone}</td>
                      <td>{reserve.noOfPersons}</td>
                      <td>{moment(reserve.bookingDateStart).add(-2,'hour').format("LLLL")}</td>
                      <td>{moment(reserve.bookingDateEnd).add(-2,'hour').format("LLLL")}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary btn-xl"
                          href="#services"
                          onClick={() =>
                            this.props.deleteReservation(reserve.id)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  reservations: state.admin.reservations,
  loading: state.admin.loading
});

export default connect(mapStateToProps, { getReservations, deleteReservation,authEntry })(
  Bookings
);
