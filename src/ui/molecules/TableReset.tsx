import styled from "styled-components";

const TableReset = styled.div`
  position: absolute;
  right: 39%;
  @media (max-width: 420px) {
    top: 10%;
    right: 15%;
  }
`;

const SubTableReset = styled.div`
  text-aline: left;
`;

export { TableReset, SubTableReset };
