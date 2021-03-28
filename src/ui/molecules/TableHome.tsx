import styled from "styled-components";

const TableHome = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    padding: 10px;
    margin: 5px;
  }
`;

const TableForm = styled.form`
  @media (max-width: 420px) {
    margin: 0.5rem 0;
  }
`;

const TableList = styled.div`
  @media (max-width: 420px) {
    overflow-y: scroll;
    min-height: 440px;
    max-height: 65vh;
    margin-bottom: 3.5rem;
  }
`;
export { TableList, TableHome, TableForm };
