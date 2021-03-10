import styled from "styled-components";

const TableMenu = styled.div`
  display: flex;
  @media (max-width: 420px) {
    z-index: 1;
    background-color: #c6e377;
    width: 100%;
    justify-content: center;
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

export default TableMenu;
