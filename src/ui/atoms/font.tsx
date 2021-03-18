import styled from "styled-components";

const Font = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  @media (max-width: 420px) {
    margin: 0;
    font-size: 0.7rem;
  }
`;

const SubFont = styled.p`
  font-size: 1rem;
  margin: 1rem 0 0;
  @media (max-width: 420px) {
    font-size: 0.7rem;
    margin: 0.5rem 0 0;
    display: block;
  }
`;

const LoginFont = styled(Font)`
  font-weight: bold;
  padding-top: 10px;
  @media (max-width: 420px) {
    padding: 10px;
    font-size: 1.1rem;
  }
`;
const ErrorFont = styled(Font)`
  font-size: 0.9rem;
  text-align: left;
  color: #ff4646;
  padding: 0.5rem 0 0 2rem;
`;

const TimeFont = styled(Font)`
  font-size: 0.8rem;
  text-align: right;
  display: block;
  @media (max-width: 420px) {
    font-size: 0.6rem;
    margin-right: 3rem;
  }
`;

const RoomTimeFont = styled(TimeFont)`
  @media (max-width: 420px) {
    margin-right: 0.5rem;
  }
`;

const LinkFont = styled.span`
  font-size: 1rem;
  cursor: pointer;
  color: #fbfad3;
  text-decoration: underline;
`;

const SetUpFont = styled(Font)`
  font-size: 0.8rem;
  margin-right: 1.2rem;
  display: inline-block;
`;

const FooterFont = styled(Font)`
  text-align: center;
  margin: 0;
`;
export {
  Font,
  SubFont,
  LoginFont,
  ErrorFont,
  LinkFont,
  SetUpFont,
  RoomTimeFont,
  TimeFont,
  FooterFont,
};
