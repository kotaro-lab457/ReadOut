import styled from "styled-components";
import { TableLogin } from "./TableLogin";

const TableTop = styled(TableLogin)`
  top: 20%;
  right: 10%;
  width: 75vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    right: 0;
    width: 90%;
  }
`;

const SubTableTop = styled.div`
  text-align: left;
  @media (max-width: 420px) {
    text-align: center;
  }
`;

const TableTopImages = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 420px) {
    display: none;
  }
`;
const TableTopImage = styled.div`
  width: 200px;
`;
const SubTableTopImage = styled.div`
  height: 220px;
  width: 350px;
`;

export {
  TableTop,
  SubTableTop,
  TableTopImages,
  TableTopImage,
  SubTableTopImage,
};
