import styled from "styled-components";

const LinkTag = styled.p`
  font-size: 1.4rem;
  margin: 30px 20px 20px 0;
  @media (max-width: 420px) {
    font-size: 0.8rem;
    margin: 10px 25px;
  }
`;

const IconLinkTag = styled.span`
  margin-left: 10px;
  @media (max-width: 420px) {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    display: block;
  }
`;

export { LinkTag, IconLinkTag };
