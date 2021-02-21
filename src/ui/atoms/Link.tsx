import styled from "styled-components";

const LinkTag = styled.p`
  font-size: 1.4rem;
  margin: 30px 20px 20px 0;
`;

const LinkSetUp = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: #ccc;
  border-radius: 50%;
  &::after {
    position: absolute;
    top: 22px;
    left: 50%;
    content: "";
    display: inline-block;
    width: 21px;
    height: 13px;
    border-top: 4px solid #fff;
    transform: translateX(-50%);
  }
  &::before {
    position: absolute;
    content: "";
    top: 16px;
    left: 8px;
    display: inline-block;
    width: 21px;
    height: 13px;
    border-top: 4px solid #fff;
    transform: rotate(90deg);
  }
`;
export { LinkTag, LinkSetUp };
