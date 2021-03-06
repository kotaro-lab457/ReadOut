import styled from "styled-components";

const TableRoom = styled.div`
  text-align: left;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const TableRoomForm = styled.form`
  @media (max-width: 420px) {
    margin: 1rem 0;
  }
`;

export { TableRoom, TableRoomForm };
