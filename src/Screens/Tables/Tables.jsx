import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTables , deleteTable } from "../../actions/adminControl";
import {Link} from 'react-router-dom'; 
import Cheif from "../../Components/TeamMember";
import Table from "../../Components/TableCard/TableCard";

import './style.css'; 

class Tables extends Component {
  constructor(props) {
    super(props);
    // this.props.checkUser("admin")
    console.log("tables : ", this.props.allTables);
  }
  componentDidMount = async () => {
    this.props.getAllTables();
  };



  render() {
    const {  allTables ,loading } = this.props;
    return loading? (
      <section class="preloader">
        <div class="spinner">
          <span class="spinner-rotate"></span>
        </div>
      </section>
    ) :  (
      <section id="team" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>All Resturnat Tables</h2>
                <Link className="btn btn-primary btn-xl" to="/avail_Tables">View Current Availbale</Link>
              </div>
            </div>
            <div className="col-md-12">
              {allTables.map(table => (
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
        <Link className="btn btn-primary btn-xl addBtn" to="/addTable">+</Link>
    
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUserData,
  allTables : state.admin.allTables,
  loading: state.admin.loading

});

export default connect(mapStateToProps, { getAllTables ,deleteTable })(Tables);
