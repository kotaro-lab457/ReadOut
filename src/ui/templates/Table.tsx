import styled from "styled-components";

const Table = styled.div`
  background-color: #fbfad3;
  height: 100%;
  min-height: 83.5vh;
  padding-top: 7rem;
  @media (max-width: 420px) {
    min-height: 84vh;
    max-height: 800px;
    padding-top: 4rem;
  }
`;

export default Table;
