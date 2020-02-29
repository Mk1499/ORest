import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import { Router, Route, Switch } from "react-router-dom";

import history from "./Services/history";
import Home from "./Screens/Home/Home";
import Team from "./Screens/Team/Team";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Screens/Gallery/Gallery";
import SignIn from "./Screens/SignIn/SignIn";
import SignUp from "./Screens/SignUp/SignUp";

import Users from "./Screens/Users/Users";

import Tables from "./Screens/Tables/Tables";
import AvailTables from "./Screens/Tables/AvailTables";
import AddTable from "./Screens/Tables/AddTable";

import Bookings from "./Screens/Bookings/Bookings";
import BookTable from "./Screens/Bookings/BookTable";
import ClientReservations from "./Screens/Bookings/ClientBooks";

import NotFound from "./Screens/404/NotFound";
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/menus" component={Gallery} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/addTable" component={AddTable} />
          <Route exact path="/avail_tables" component={AvailTables} />
          <Route exact path="/reservations" component={Bookings} />
          <Route exact path="/bookTable" component={BookTable} />
          <Route exact path="/myBooks" component={ClientReservations} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
