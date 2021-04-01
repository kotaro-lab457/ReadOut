import styled from "styled-components";

const Main = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  position: fixed;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.5);
  width: 97vw;
  z-index: 1;
  @media (max-width: 420px) {
    padding: 10px;
  }
`;

const MainHeader = styled.div`
  margin-right: 2rem;
  @media (max-width: 420px) {
    display: none;
  }
`;

const MainFooter = styled.footer`
  background-color: #fff;
  padding: 10px 0;
  @media (max-width: 420px) {
    display: none;
  }
`;

const SubFooter = styled.footer`
  display: none;
  @media (max-width: 420px) {
    width: 100%;
    background-color: #c6e377;
    display: block;
    position: fixed;
    bottom: 0;
  }
`;

export { Main, SubFooter, MainHeader, MainFooter };
