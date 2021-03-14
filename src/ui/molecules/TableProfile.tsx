import styled from "styled-components";
import { TableRoom, TableList } from "../molecules/TableRoom";

const TableProfile = styled(TableRoom)`
  padding: 20px 90px;
  position: relative;
  @media (max-width: 420px) {
    padding: 15px 10px;
  }
`;

const TableButton = styled.div`
  text-align: right;
  @media (max-width: 420px) {
    text-align: left;
  }
`;

const TableIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  @media (max-width: 420px) {
    top: unset;
    right: 15px;
    bottom: 5px;
  }
`;

const TableDelete = styled.div`
  position: absolute;
  bottom: 18px;
  right: 20px;
  @media (max-width: 420px) {
    bottom: 5px;
  }
`;

const TableText = styled.div`
  text-align: left;
  margin: 0 20px;
`;

export { TableText, TableProfile, TableIcon, TableButton, TableDelete };
