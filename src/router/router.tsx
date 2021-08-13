import React from 'react';

import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../stores/store";
import Top from "../pages/Top";
import SetUp from "../pages/SetUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import BooksSearch from "../pages/BooksSearch";
import ResetPassword from "../pages/ResetPass";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthService } from "../Auth/AuthService";
import History from "../pages/History";

import Table from "../ui/templates/Table";


const Router: React.FC = () => {
  return (
    <>
      <Provider store={store}>
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
  </Provider>
    </>
  )
}


export default Router;