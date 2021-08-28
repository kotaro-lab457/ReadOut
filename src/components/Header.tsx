import React from "react";
import Menu from "@Components/Menu";
import { withRouter, Link } from "react-router-dom";

import { HeaderTitle } from "@Atoms/title";
import { Main, MainHeader } from "@Organisms/MainTable";

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
