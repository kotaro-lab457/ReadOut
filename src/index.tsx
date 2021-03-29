import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Top from "./pages/Top";
import SetUp from "./pages/SetUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BooksSearch from "./pages/BooksSearch";
import ResetPassword from "./pages/ResetPassword";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthService } from "./Auth/AuthService";
import History from "./pages/History";

import Table from "./ui/templates/Table";
import "./index.css";
const App = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <AuthService>
      <Header />
    </AuthService>
    <Table>
      <Switch>
        <AuthService>
          <Route exact path="/" component={Top} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/setup" component={SetUp} />
          <Route exact path="/books" component={BooksSearch} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/history" component={History} />
        </AuthService>
      </Switch>
    </Table>
    <AuthService>
      <Footer />
    </AuthService>
  </BrowserRouter>,
  App
);
