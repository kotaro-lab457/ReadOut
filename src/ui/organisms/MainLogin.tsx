import styled from "styled-components";
import img from "../images/Book.img.jpeg";

const MainLogin = styled.div`
  color: #fff;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  position: relative;
  height: 100%;
  width: 100%;
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
export default MainLogin;
