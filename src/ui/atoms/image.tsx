import styled from "styled-components";

const Img = styled.img`
  @media (max-width: 420px) {
    height: 100%;
    width: 100%;
  }
`;

const ImageTag = styled.div`
  margin-top: 0.5rem;
  height: 200px;
  @media (max-width: 420px) {
    height: 100px;
    width: 80px;
  }
`;

const ImageSp = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;

export { Img, ImageTag, ImageSp };
