import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import SetUp from "./components/SetUp";
import Login from "./components/Login";
import Room from "./components/Room";
import Profile from "./components/Profile";
import BooksSearch from "./components/BooksSearch";
import ResetPassword from "./components/ResetPassword";
import EditProfile from "./components/EditProfile";

import Table from "./ui/templates/Table";

import Header from "./components/Header";

import { AuthService } from "./AuthService";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AuthService>
          <Header />
        </AuthService>
        <Table>
          <Switch>
            <AuthService>
              <Route exact path="/login" component={Login} />
              <Route exact path="/setup" component={SetUp} />
              <Route exact path="/books" component={BooksSearch} />
              <Route exact path="/" component={Room} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/reset" component={ResetPassword} />
              <Route exact path="/editProfile" component={EditProfile} />
            </AuthService>
          </Switch>
        </Table>
      </BrowserRouter>
      <footer></footer>
    </>
  );
};

export default App;
