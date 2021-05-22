import styled from "styled-components";

const Input = styled.input`
  font-size: 1rem;
  outline: none;
  width: 300px;
  @media (max-width: 420px) {
    font-size: 1rem;
    width: 200px;
  }
`;

const LoginInput = styled(Input)`
  border-radius: 20px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 400px;
  position: relative;
  @media (max-width: 420px) {
    width: 250px;
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
  text-align: center;
  @media (max-width: 420px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  font-size: 1rem;
  height: 100px;
  width: 100%;
  @media (max-width: 420px) {
    font-size: 0.9rem;
    height: 70px;
  }
`;

const CommentInput = styled(Input)`
  border-bottom: 1px solid #a9a9a9;
  border-top: none;
  border-right: none;
  border-left: none;
  box-sizing: border-box;
  padding: 10px 10px 5px 10px;
  width: 100%;
  margin-bottom: 10px;
  &:focus {
    border-bottom: 1px solid #0070f3;
    transition: all 0.8s;
  }
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

export {
  Input,
  SetUpInput,
  LoginInput,
  SearchInput,
  EditInput,
  TextArea,
  CommentInput,
};
