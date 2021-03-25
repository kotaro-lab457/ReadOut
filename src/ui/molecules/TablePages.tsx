import styled from "styled-components";

const TablePage = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 60%;
  text-align: center;
  position: relative;
  @media (max-width: 420px) {
    width: 100%;
    padding: 10px 0;
  }
`;
const TablePagesText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TablePageList = styled.div`
  width: 40vw;
  text-align: left;
  margin-left: 2rem;
  @media (max-width: 420px) {
    width: 65vw;
    margin-left: 1rem;
  }
`;

export { TablePage, TablePagesText, TablePageList };
