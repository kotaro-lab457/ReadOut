import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  outline: none;
  background-color: #ffd740;
  font-weight: bold;
  opacity: 0.8;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const GuestButton = styled(Button)`
  height: 50px;
  padding: 10px 15px;
  margin: 10px 20px 10px 0;
  background-color: #ff5252;
  @media (max-width: 420px) {
    height: 40px;
    margin: 10px 5px 0 0;
  }
`;

const LoginButton = styled(Button)`
  font-size: 1.5rem;
  width: 445px;
  padding: 15px;
  margin: 1.5rem 0 0;
  @media (max-width: 420px) {
    width: 280px;
    padding: 10px;
    margin: 1.5rem 0 1rem;
  }
`;

const SubLoginButton = styled(GuestButton)`
  background-color: #ffd740;
`;

const SearchButton = styled(Button)`
  padding: 10px 20px 10px;
  border-radius: 0 20px 20px 0;
  opacity: 1;
  @media (max-width: 420px) {
    padding: 5px 10px;
  }
`;
const HomeSearchButton = styled(SearchButton)`
  padding: 2px 10px;
  border: 1px solid #000;
  @media (max-width: 420px) {
    padding: 2px 10px;
    margin: 0;
  }
`;

const UpdateButton = styled(Button)`
  font-size: 0.8rem;
  border-radius: 0px;
  padding: 5px 30px;
  margin: 0;
  border: 1px solid #ffd740;
`;

const CommentButton = styled(UpdateButton)`
  background-color: #0070f3;
  border: 1px solid #0070f3;
  color: #fff;
`;

const CancelButton = styled.span`
  padding: 5px 17px;
  font-size: 0.8rem;
  outline: none;
  cursor: pointer;
`;

const IconButton = styled(Button)`
  font-size: 0.8rem;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid #ffd740;
  margin: 0;
  @media (max-width: 420px) {
    padding: 10px;
  }
`;

const SetUpButton = styled.div`
  color: #000;
  font-weight: bold;
  position: relative;
  width: 70px;
  height: 65px;
  padding-top: 5px;
  background-color: #ffd740;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    content: "";
    top: 32px;
    left: 16px;
    display: inline-block;
    width: 25px;
    height: 13px;
    border-top: 5px solid;
    transform: rotate(90deg);
  }
  &::after {
    position: absolute;
    top: 38px;
    left: 50%;
    content: "";
    display: inline-block;
    width: 26px;
    height: 13px;
    border-top: 5px solid;
    transform: translateX(-50%);
  }
  &:active {
    color: #000;
  }
  @media (max-width: 420px) {
    opacity: 0.5;
    width: 60px;
    height: 55px;
    &:hover {
      opacity: 1;
    }
    &::after {
      top: 36px;
      width: 23px;
    }
    &::before {
      width: 22px;
      top: 30px;
      left: 12px;
    }
  }
`;

const GoogleButton = styled(LoginButton)`
  font-size: 1rem;
  padding: 10px;
  background-color: #ff3d00;
  color: #fff;
  width: 220px;
  border-radius: 5px;
  @media (max-width: 420px) {
    margin: 5px 0 0;
  }
`;

const TwitterButton = styled(GoogleButton)`
  background-color: #33bfff;
  margin-left: 5px;
  @media (max-width: 420px) {
    margin: 5px 0 0;
  }
`;

const ProfileSetUpButton = styled(SetUpButton)`
  @media (max-width: 420px) {
    opacity: 0.8;
  }
`;

const ResetButton = styled(Button)`
  padding: 10px 15px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export {
  Button,
  GuestButton,
  LoginButton,
  SubLoginButton,
  SearchButton,
  SetUpButton,
  ProfileSetUpButton,
  ResetButton,
  UpdateButton,
  CancelButton,
  IconButton,
  HomeSearchButton,
  GoogleButton,
  TwitterButton,
  CommentButton,
};
