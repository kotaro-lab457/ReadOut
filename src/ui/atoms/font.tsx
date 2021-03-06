import styled from "styled-components";

const Font = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  @media (max-width: 420px) {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const SubFont = styled.p`
  font-size: 1rem;
  margin: 1rem 0 0;
  @media (max-width: 420px) {
    font-size: 0.8rem;
    margin: 0.5rem 0 0;
    display: block;
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
  @media (max-width: 420px) {
    font-size: 0.6rem;
    margin-right: 3.5rem;
  }
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
