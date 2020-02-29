import React, { Component } from "react";
import { connect } from "react-redux";
import { getAvailableTables } from "../../actions/adminControl";
import { Link } from "react-router-dom";
import Cheif from "../../Components/TeamMember";
import Table from "../../Components/TableCard/TableCard";

class Tables extends Component {
  constructor(props) {
    super(props);
    // this.props.checkUser("admin")
    console.log("tables : ", this.props.availTables);
  }
  componentDidMount = async () => {
    this.props.getAvailableTables();
  };

  render() {
    const { availTables,loading } = this.props;
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
                <h2>Available Tables</h2>
                <Link className="btn btn-primary btn-xl" to="/tables">
                  View all Tables
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              {availTables.map(table => (
                <Table
                  id={table.id}
                  phone={table.max_persons}
                  name={table.label}
                  img="https://www.countrylanefurniture.com/image/cache/catalog/products/265-Stein-53550-Rustic-Cherry-Restaurant-Tables-VIEW-1-800x800.jpg"
                  actionName="Delete"
                  action = {() =>this.props.deleteTable(table.id)}
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
  availTables: state.admin.availableTables,
  loading: state.admin.loading

});

export default connect(mapStateToProps, { getAvailableTables })(Tables);
