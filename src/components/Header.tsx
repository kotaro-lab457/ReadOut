import React from "react";
import Menu from "./Menu";
import { withRouter, Link } from "react-router-dom";

import { HeaderTitle } from "../ui/atoms/title";
import { Main, MainHeader } from "../ui/organisms/MainTable";

const Header: React.FC = () => {
  return (
    <Main>
      <HeaderTitle>
        <Link to="/home">
          Read Out
        </Link>
      </HeaderTitle>
      <MainHeader>
        <Menu />
      </MainHeader>
    </Main>
  );
};

export default withRouter(Header);
