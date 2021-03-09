import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  outline: none;
  width: 300px;
  @media (max-width: 420px) {
    font-size: 1rem;
    width: 200px;
  }
`;

const LoginInput = styled(Input)`
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 400px;
  position: relative;
  @media (max-width: 420px) {
    width: 300px;
    padding: 10px;
  }
`;

const SearchInput = styled(Input)`
  border-radius: 20px 0 0 20px;
  padding: 10px 20px;
  width: 500px;
  margin: 20px 0 10px;
  @media (max-width: 420px) {
    width: 250px;
    padding: 5px 10px;
  }
`;

const SetUpInput = styled(Input)`
  text-align: center;
  font-size: 1rem;
`;

const EditInput = styled(Input)`
  font-size: 1rem;
  width: 70%;
  @media (max-width: 420px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  font-size: 1.2rem;
  height: 100px;
  width: 100%;
  @media (max-width: 420px) {
    font-size: 0.9rem;
    height: 70px;
  }
`;

export { Input, SetUpInput, LoginInput, SearchInput, EditInput, TextArea };
