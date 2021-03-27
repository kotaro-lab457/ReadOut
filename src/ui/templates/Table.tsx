import styled from "styled-components";

const Table = styled.div`
  background-color: #f9f3f3;
  height: 100%;
  min-height: 83.5vh;
  padding-top: 7rem;
  @media (max-width: 420px) {
    min-height: 84.5vh;
    max-height: 800px;
    padding-top: 4rem;
  }
`;

export default Table;
