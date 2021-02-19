import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  height: 50px;
  margin: 20px 0;
  font-size: 1rem;
  font-weight: bold;
  background-color: #16c79a;
  border-radius: 20px;
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
  &:hover {
    opacity: 1;
  }
`;

export { Button, LoginButton };
