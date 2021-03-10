import React from "react";
import Menu from "./Menu";
import { withRouter } from "react-router-dom";

import { HeaderTitle } from "../ui/atoms/title";
import { Main, MainHeader } from "../ui/organisms/MainMenu";

const Header: React.FC = () => {
  return (
    <Main>
      <HeaderTitle>Read Out</HeaderTitle>
      <MainHeader>
        <Menu />
      </MainHeader>
    </Main>
  );
};

export default withRouter(Header);
