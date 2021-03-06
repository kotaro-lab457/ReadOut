import styled from "styled-components";

const TableHeader = styled.div`
  display: flex;
  @media (max-width: 820px) {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #c6e377;
    width: 100%;
    justify-content: center;
  }
`;

export default TableHeader;
