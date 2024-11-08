/*

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/

/*
import React, { createContext, useReducer, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AdminSignin from "./components/AdminSignin";
import AdminSignout from "./components/AdminSignout";
import Addbikes from "./components/dashboardComponents/Addbikes";
import Rentbikereports from "./components/dashboardComponents/Rentbikereports";
import Availableusers from "./components/dashboardComponents/Availableusers";
import Getrentbikes from "./components/dashboardComponents/Getrentbikes";
import Mycart from "./components/Mycart";
import Rentabike from "./components/Rentabike";
import Rentbikecart from "./components/Rentbikecart";
import Rentbikereviews from "./components/Rentbikereviews";
import Signout from "./components/Signout";
import ExploreRentBike from "./components/ExploreRentBike";


import {initialState, reducer} from "../src/reducer/UseReducer"
import {adminInitialState, adminreducer} from "../src/reducer/UseReducerAdmin"




export const UserContext = createContext();
export const AdminContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [adminState, dispatchadmin] = useReducer(adminreducer, adminInitialState)

  
  return (
    <>

      <UserContext.Provider value={{state, dispatch}}>
      <Route exact path="/"> <Home/> </Route>
      <Route path="/signin"> <Signin/> </Route>
      <Route path="/signup"> <Signup/> </Route>
      <Route path="/signout"> <Signout/> </Route>
      <Route path="/mycart"> <Mycart/> </Route>
      <Route path="/rentbike"> <Rentabike/> </Route>
      <Route path="/rentbikecart"> <Rentbikecart/> </Route>
      <Route path="/rentbikereviews"> <Rentbikereviews/> </Route>
      <Route path="/exploreRentBikes"> <ExploreRentBike/> </Route>
      </UserContext.Provider>

      <AdminContext.Provider value={{adminState, dispatchadmin}}>
      <Route path="/adminsignin"> <AdminSignin/> </Route>
      <Route path="/adminsignout"> <AdminSignout/> </Route>
      <Route path="/dashboard"> <Dashboard/> </Route>
      <Route path="/addbikes"> <Addbikes/> </Route>
      <Route path="/rentbikesreports"> <Rentbikereports/> </Route>
      <Route path="/availableusers"> <Availableusers/> </Route>
      <Route path="/getrentbikesforadmin"> <Getrentbikes/> </Route>
      </AdminContext.Provider>
      
    </>
  );


}

export default App;

*/

import React, { createContext, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AdminSignin from "./components/AdminSignin";
import AdminSignout from "./components/AdminSignout";
import Addbikes from "./components/dashboardComponents/Addbikes";
import Rentbikereports from "./components/dashboardComponents/Rentbikereports";
import Availableusers from "./components/dashboardComponents/Availableusers";
import Getrentbikes from "./components/dashboardComponents/Getrentbikes";
import Mycart from "./components/Mycart";
import Rentabike from "./components/Rentabike";
import Rentbikecart from "./components/Rentbikecart";
import Rentbikereviews from "./components/Rentbikereviews";
import Signout from "./components/Signout";
import ExploreRentBike from "./components/ExploreRentBike";
import { initialState, reducer } from "../src/reducer/UseReducer";
import { adminInitialState, adminreducer } from "../src/reducer/UseReducerAdmin";

export const UserContext = createContext();
export const AdminContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [adminState, dispatchadmin] = useReducer(adminreducer, adminInitialState);

  return (
    <Router>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/rentbike" element={<Rentabike />} />
          <Route path="/rentbikecart" element={<Rentbikecart />} />
          <Route path="/rentbikereviews" element={<Rentbikereviews />} />
          <Route path="/exploreRentBikes" element={<ExploreRentBike />} />
        </Routes>
      </UserContext.Provider>
      <AdminContext.Provider value={{ adminState, dispatchadmin }}>
        <Routes>
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/adminsignout" element={<AdminSignout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addbikes" element={<Addbikes />} />
          <Route path="/rentbikesreports" element={<Rentbikereports />} />
          <Route path="/availableusers" element={<Availableusers />} />
          <Route path="/getrentbikesforadmin" element={<Getrentbikes />} />
        </Routes>
      </AdminContext.Provider>
    </Router>
  );
};

export default App;
