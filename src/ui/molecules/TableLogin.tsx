import styled from "styled-components";

const TableLogin = styled.div`
  position: absolute;
  right: 39%;
  @media (max-width: 420px) {
    right: 0;
    left: 0;
    padding: 1rem;
  }
`;

const SubTableLogin = styled.div`
  text-align: center;
`;

export { TableLogin, SubTableLogin };
