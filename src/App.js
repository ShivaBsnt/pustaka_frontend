import logo from "./logo.svg";
import "./App.css";

import Register from "./components/Register/Register";
import { BrowserRouter, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import FormPage from "../src/components/OauthLogin/OauthLogin";
import React, { useState } from "react";

import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import Login from "./Body/Login/Login";

import Dashboard from "./Body/Dashboard/Dashboard";
import BestSellerFullPage from "./Body/BestSellerFullPage/BestSellerFullPage";
import CustomSelect from "./Body/ScrollableSearch/ScrollableSearch";
import { Redirect } from "react-router-dom";
import { ProtectedRoute } from "../src/Protected/Protected";

import auth from "./Auth/Auth";
import NewArrivalFullPage from "./Body/NewArrivalFullPage/NewArrivalFullPage";
import Review from "./Body/Review/Review";
import NavbarPage from "./Header/Header";


function App() {
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/login">
          <FormPage></FormPage>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>

        <Route exact path="/">
          <NavbarPage></NavbarPage>
          <Route exact path="/">
            <Body></Body>
            {/* <CustomSelect></CustomSelect> */}
          </Route>
          <Footer></Footer>
        </Route>
        <Route exact path="/bestseller" component={BestSellerFullPage} />
        <Route exact path="/newarrival" component={NewArrivalFullPage} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/review" component={Review} />
      </div>
    </BrowserRouter>
  );
}

export default App;
