import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px;
  margin: 20px 0;
  border-radius: 20px;
  outline: none;
`;

const HeaderButton = styled(Button)`
  height: 50px;
  font-weight: bold;
  background-color: #16c79a;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const LoginButton = styled(Button)`
  font-size: 1.5rem;
  width: 445px;
  padding: 15px 20px;
  margin: 2rem 0;
  background-color: #16c79a;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const SearchButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 0 20px 20px 0;
  color: #fff;
  background-color: #3879d9;
`;

const SetUpButton = styled.div`
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

export { HeaderButton, LoginButton, SearchButton, SetUpButton };
