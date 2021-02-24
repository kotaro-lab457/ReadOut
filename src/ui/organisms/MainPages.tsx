import styled from "styled-components";
import img from "../images/Book.img.jpeg";

const MainPage = styled.div`
  height: 100%;
  width: 100%;
`;

const MainLogin = styled(MainPage)`
  color: #fff;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  position: relative;
  min-height: 700px;
  &:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;
export { MainLogin, MainPage };
