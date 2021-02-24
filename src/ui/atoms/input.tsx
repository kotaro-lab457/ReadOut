import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  outline: none;
  width: 300px;
`;

const LoginInput = styled(Input)`
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 400px;
  position: relative;
`;

const SearchInput = styled(Input)`
  border-radius: 20px 0 0 20px;
  padding: 10px 20px;
  width: 500px;
  margin: 20px 0 10px;
`;

const InputSetUp = styled(Input)`
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  font-size: 1.2rem;
  height: 100px;
  width: 300px;
`;

export { Input, InputSetUp, LoginInput, SearchInput, TextArea };
