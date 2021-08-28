import React from 'react';

import { Switch, Route, BrowserRouter } from "react-router-dom";
import { AuthService } from "../Auth/AuthService";

import Top from "@Pages/Top";
import SetUp from "@Pages/SetUp";
import Login from "@Pages/Login";
import Home from "@Pages/Home";
import Profile from "@Pages/Profile";
import BooksSearch from "@Pages/BooksSearch";
import ResetPassword from "@Pages/ResetPass";
import History from "@Pages/History";

import Header from "@Components/Header";
import Footer from "@Components/Footer";

import Table from "../ui/templates/Table";

const Router: React.FC = () => {
  return (
    <>
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
      </BrowserRouter>
    </>
  )
}

export default Router;