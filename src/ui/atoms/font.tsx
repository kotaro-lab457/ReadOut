import styled from "styled-components";

const Font = styled.p`
  margin: 0;
  font-size: 1.2rem;
  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

const SubFont = styled.span`
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

const LoginFont = styled(Font)`
  font-weight: bold;
  padding: 30px 0 10px;
  @media (max-width: 420px) {
    padding: 10px;
    font-size: 1.1rem;
  }
`;

const TimeFont = styled(Font)`
  font-size: 0.8rem;
  text-align: right;
  display: block;
`;

const LinkFont = styled.span`
  cursor: pointer;
  color: #fbfad3;
`;

const SetUpFont = styled(Font)`
  font-size: 0.8rem;
  margin-right: 1.2rem;
  display: inline-block;
`;

export { Font, SubFont, LoginFont, LinkFont, SetUpFont, TimeFont };
