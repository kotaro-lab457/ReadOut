import styled from "styled-components";

const TableProfile = styled.div`
  text-align: left;
  padding: 20px 90px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const TableButton = styled.div`
  text-align: right;
`;

const TableIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const TableDelete = styled.div`
  position: absolute;
  bottom: 18px;
  right: 20px;
`;

const TableText = styled.div`
  text-align: left;
  margin: 0 20px;
`;

export { TableText, TableProfile, TableIcon, TableButton, TableDelete };
