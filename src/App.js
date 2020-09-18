import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import GMap from './Components/GMap/GMap';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LoginTry from './Components/Login/LoginTry';
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
                <Home></Home>
          </Route>
          <Route path="/booking/:bookingID">
                <Booking></Booking>
          </Route>
          <PrivateRoute path="/shipment/:shipmentID">
                <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
                <LoginTry></LoginTry>
          </Route>
          <Route exact path="/">
                <Home></Home>
          </Route>
          <Route path="*">
                <h1>no match</h1>
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
