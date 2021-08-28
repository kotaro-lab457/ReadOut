import React from "react";
import Menu from "./Menu";
import { withRouter } from "react-router-dom";

import { FooterFont } from "@Atoms/font";
import { SubFooter, MainFooter } from "@Organisms/MainTable";

const Footer: React.FC = () => {
  return (
    <>
      <MainFooter>
        <FooterFont>@2021 suzuki.k / portfolio</FooterFont>
      </MainFooter>
      <SubFooter>
        <Menu />
      </SubFooter>
    </>
  );
};

export default withRouter(Footer);
