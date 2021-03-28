import styled from "styled-components";

const Font = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: bold;
  @media (max-width: 420px) {
    margin: 0;
    font-size: 0.8rem;
  }
`;

const SubFont = styled(Font)`
  margin: 1rem 0 0;
  text-align: left;
  @media (max-width: 420px) {
    margin: 10px 0 0 10px;
    display: block;
  }
`;

const TextFont = styled.p`
  margin: 1rem 0 0 0;
  font-size: 1rem;
  font-weight: bold;
`;

const LoginFont = styled(Font)`
  padding-top: 10px;
  @media (max-width: 420px) {
    padding: 10px;
    font-size: 1rem;
  }
`;
const ErrorFont = styled(Font)`
  text-align: left;
  color: #ff4646;
  padding: 0.5rem 0 0 2rem;
`;

const TimeFont = styled(Font)`
  text-align: right;
  display: block;
  font-weight: 300;
  @media (max-width: 420px) {
    margin-right: 3rem;
  }
`;

const HomeTimeFont = styled(TimeFont)`
  @media (max-width: 420px) {
    margin-right: 0.5rem;
  }
`;

const LinkFont = styled.span`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #ffd740;
  text-decoration: underline;
`;

const SetUpFont = styled(Font)`
  margin-right: 1.2rem;
  display: inline-block;
`;

const FooterFont = styled(Font)`
  text-align: center;
  margin: 0;
  font-weight: 300;
`;

const PostsFont = styled(Font)`
  padding: 5px 10px;
  border-radius: 20px;
  margin: 1rem 0 0;
  color: #4fc3f7;
  font-size: 2rem;
  @media (max-width: 420px) {
    font-size: 1rem;
    margin: 0;
  }
`;

const TotalFont = styled(Font)`
  font-size: 4rem;
  margin: 0;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;
export {
  Font,
  SubFont,
  TextFont,
  LoginFont,
  ErrorFont,
  LinkFont,
  SetUpFont,
  HomeTimeFont,
  TimeFont,
  FooterFont,
  PostsFont,
  TotalFont,
};
