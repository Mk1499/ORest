import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import $ from "jquery";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getAvailableTables } from "../../actions/adminControl";
import {authEntry} from "../../actions/auth";
import { apiUrl } from "../../config/global";
import Table from "../../Components/TableCard/TableCard";
import BookForm from "../../Components/BookForm/BookForm";

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      noOfPersons: 2,
      tablesRes: [],
      targetTableId: -1 , 
      loading:false 
    };
    console.log("tables : ", this.props.availTables);
    this.props.authEntry("client","Please signin To book a table")
  }
  componentDidMount = async () => {
    await this.props.getAvailableTables().then(() =>
      // this.search();
      this.setState({
        tablesRes: this.props.availTables
      })
    );
  };

  search = async e => {
    e.preventDefault();
    let date = moment(this.state.startDate).format("YYYY-MM-DD");
    let persons = this.state.noOfPersons;
    this.setState({
        loading:true
    })
    await fetch(`${apiUrl}/tables/search/${date}/${persons}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("orestToken")
      }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          tablesRes: res, 
          loading:false
        })
      );
  };
  viewForm = tableID => {
    this.setState({
      targetTableId: tableID
    });
    $(document).ready(function() {
      $(".bookCard").css({
        display: "grid"
      });
      $(".bookCard").removeClass("fadeOutUp");

      $(".bookCard").addClass("fadeInDown");
    });
  };

  hideForm = () => {
    $(document).ready(function() {
      $(".bookCard").removeClass("fadeInDown");

      $(".bookCard").css({
        display: "none"
      });
    });
  };

  render() {
    const { availTables, loading } = this.props;
    return loading || this.state.loading ? (
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
                <h2>Book a Table</h2>
              </div>
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <form onSubmit={this.search}>
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-3 form-group">
                      <select
                        className="form-control"
                        id="persons"
                        onChange={num =>
                          this.setState({
                            noOfPersons: num.target.value
                          })
                        }
                      >
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="7">7 Persons</option>
                        <option value="8">8 Persons</option>
                        <option value="9">9 Persons</option>
                        <option value="10">10 Persons</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      {" "}
                      <button className="btn btn-primary btn-xl">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12 results">
              {this.state.tablesRes.length ? (
                this.state.tablesRes.map(table => (
                  <Table
                    id={table.id}
                    phone={table.max_persons}
                    name={table.label}
                    img="https://www.countrylanefurniture.com/image/cache/catalog/products/265-Stein-53550-Rustic-Cherry-Restaurant-Tables-VIEW-1-800x800.jpg"
                    actionName="Book"
                    action={() => this.viewForm(table.id)}
                    className="bookBtn"
                  />
                ))
              ) : (
                <p>Sorry But There is not Availbale Tables in choosen date</p>
              )}
            </div>
          </div>
        </div>
        <BookForm hideForm={this.hideForm} tableId={this.state.targetTableId} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUserData,
  availTables: state.admin.availableTables,
  loading: state.admin.loading
});

export default connect(mapStateToProps, { getAvailableTables,authEntry })(Tables);
