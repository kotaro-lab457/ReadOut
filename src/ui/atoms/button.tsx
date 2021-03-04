import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px;
  margin: 20px 0;
  border-radius: 20px;
  outline: none;
  background-color: #16c79a;
  font-weight: bold;
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const HeaderButton = styled(Button)`
  height: 50px;
`;

const LoginButton = styled(Button)`
  font-size: 1.5rem;
  width: 445px;
  padding: 15px 20px;
  margin: 2rem 0;
`;

const SearchButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 0 20px 20px 0;
  opacity: 1;
`;
const RoomSearchButton = styled(SearchButton)`
  padding: 1.5px 10px;
`;

const UpdateButton = styled(Button)`
  font-size: 0.8rem;
  border-radius: 0px;
  padding: 5px 30px;
  margin: 0;
  border: 1px solid #16c79a;
`;

const CancelButton = styled.button`
  padding: 5px 17px;
  font-size: 0.8rem;
  opacity: 1;
  border: 1px solid #fff;
`;

const IconButton = styled(Button)`
  font-size: 0.8rem;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid #16c79a;
  margin: 0;
`;

const SetUpButton = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background-color: #16c79a;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  &::after {
    position: absolute;
    top: 26px;
    left: 50%;
    content: "";
    display: inline-block;
    width: 25px;
    height: 13px;
    border-top: 5px solid;
    transform: translateX(-50%);
  }
  &::before {
    position: absolute;
    content: "";
    top: 20px;
    left: 11px;
    display: inline-block;
    width: 25px;
    height: 13px;
    border-top: 5px solid;
    transform: rotate(90deg);
    &::hover {
      border-top: 4px solid #fff;
    }
  }
  &:hover {
    opacity: 1;
  }
`;

const ResetButton = styled(Button)`
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export {
  Button,
  HeaderButton,
  LoginButton,
  SearchButton,
  SetUpButton,
  ResetButton,
  UpdateButton,
  CancelButton,
  IconButton,
  RoomSearchButton,
};
