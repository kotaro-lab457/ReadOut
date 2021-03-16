import React from "react";
import Menu from "./Menu";
import { withRouter } from "react-router-dom";

import { FooterFont } from "../ui/atoms/font";
import { SubFooter, MainFooter } from "../ui/organisms/MainMenu";

const Footer: React.FC = () => {
  return (
    <>
      <MainFooter>
        <FooterFont>@portfolio</FooterFont>
      </MainFooter>
      <SubFooter>
        <Menu />
      </SubFooter>
    </>
  );
};

export default withRouter(Footer);
