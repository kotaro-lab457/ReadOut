import styled from "styled-components";
import img from "../../img/Book_Img.jpg";

const MainPage = styled.div`
  height: 100%;
  width: 100%;
`;

const MainTablePages = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  @media (max-width: 420px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const MainImage = styled(MainPage)`
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
export { MainImage, MainPage, MainTablePages };
