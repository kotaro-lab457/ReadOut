import styled from "styled-components";

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const ImageTag = styled.div`
  margin-top: 0.5rem;
  height: 200px;
  @media (max-width: 420px) {
    height: 100px;
    width: 80px;
  }
`;

export { Img, ImageTag };
