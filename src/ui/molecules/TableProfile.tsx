import styled from "styled-components";
import { TableHome } from "./TableHome";

const TableProfile = styled(TableHome)`
  padding: 20px 40px;
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

const TableEdit = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const TableChart = styled.div`
  width: 50vw;
  @media (max-width: 420px) {
    width: 70vw;
  }
`;

const TableTotal = styled.div`
  margin: auto 0 auto 2rem;
  border: 1px solid #000;
  padding: 10px 30px;
  border-radius: 50%;
  @media (max-width: 420px) {
    width: 70px;
    padding: 10px;
    margin: 0 0 0 18rem;
  }
`;

const TablePosts = styled.div`
  display: flex;
  width: 80%;
  @media (max-width: 420px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export {
  TableText,
  TableProfile,
  TableIcon,
  TableButton,
  TableDelete,
  TableEdit,
  TableChart,
  TableTotal,
  TablePosts,
};
