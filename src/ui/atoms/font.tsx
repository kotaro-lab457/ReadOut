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
    font-size: 1rem;
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

const EditFont = styled(SubFont)`
  text-align: center;
`;
const ErrorFont = styled(Font)`
  text-align: left;
  color: #ff4646;
  padding: 0.5rem 0 0 2rem;
  margin: 0;
  @media (max-width: 420px) {
  padding: 0.5rem 0 0 3rem;
`;

const TimeFont = styled(Font)`
  font-size: 14px;
  text-align: right;
  display: inline-block;
  font-weight: 300;
  color: #808080;
  padding-left: 1rem;
  @media (max-width: 420px) {
    margin: 0.5rem 3rem 0 0;
  }
`;

const HomeTimeFont = styled(TimeFont)`
  @media (max-width: 420px) {
    margin: 0.5rem 0.5rem 0 0;
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
    font-size: 1.5rem;
    margin: 0;
  }
`;

const TotalFont = styled(Font)`
  font-size: 4rem;
  margin: 0;
  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;

const CommentFont = styled.span`
  font-size: 1rem;
  display: block;
  text-align: left;
  cursor: pointer;
  color: #0070f3;
`;

const CommentUserFont = styled.span`
  font-weight: 300;
  font-size: 1rem;
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

const CommentsFont = styled(CommentUserFont)`
  font-size: 0.8rem;
`;

export {
  Font,
  SubFont,
  TextFont,
  EditFont,
  LoginFont,
  ErrorFont,
  LinkFont,
  SetUpFont,
  HomeTimeFont,
  TimeFont,
  FooterFont,
  PostsFont,
  TotalFont,
  CommentFont,
  CommentUserFont,
  CommentsFont,
};
