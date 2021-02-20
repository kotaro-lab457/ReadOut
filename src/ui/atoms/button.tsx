import styled from "styled-components";

const HeaderButton = styled.button`
  padding: 10px;
  height: 50px;
  margin: 20px 0;
  font-size: 1rem;
  font-weight: bold;
  background-color: #16c79a;
  border-radius: 20px;
  outline: none;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const LoginButton = styled.button`
  font-size: 1.5rem;
  width: 445px;
  padding: 15px 20px;
  margin: 2rem 0;
  border-radius: 20px;
  background-color: #16c79a;
  opacity: 0.9;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const SearchButton = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 20px 0 10px;
  border-radius: 0 20px 20px 0;
  color: #fff;
  background-color: #3879d9;
  outline: none;
`;

export { HeaderButton, LoginButton, SearchButton };
