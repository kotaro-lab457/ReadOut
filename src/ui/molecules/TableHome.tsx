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

const TableFormComment = styled.form`
  width: 100%;
  text-align: right;
`;

const TableCommentsText = styled.div`
  text-align: left;
  padding-left: 2rem;
`;

const TableList = styled.div`
  @media (max-width: 420px) {
    overflow-y: scroll;
    min-height: 440px;
    max-height: 65vh;
    margin-bottom: 3.5rem;
  }
`;

const TableTexts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TableItem = styled.div`
  width: 45vw;
  text-align: left;
  margin-left: 2rem;
  @media (max-width: 420px) {
    width: 65vw;
    margin-left: 1rem;
  }
`;
export {
  TableList,
  TableHome,
  TableForm,
  TableTexts,
  TableItem,
  TableFormComment,
  TableCommentsText,
};
