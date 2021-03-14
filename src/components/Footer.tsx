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
        <SubFooter>
          <Menu />
        </SubFooter>
      </MainFooter>
    </>
  );
};

export default withRouter(Footer);
