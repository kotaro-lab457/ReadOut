import styled from "styled-components";
import img from "../../img/Book_Img.jpg";

const MainPage = styled.div`
  height: 100%;
  width: 100%;
`;

const MainLogin = styled(MainPage)`
  color: #fff;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 83.5vh;
  &:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 420px) {
    min-height: 90vh;
  }
`;
export { MainLogin, MainPage };
