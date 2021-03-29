import styled from "styled-components";

const TablePage = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 60vw;
  text-align: center;
  position: relative;
  @media (max-width: 420px) {
    width: 100%;
    padding: 10px 0;
  }
`;
const TablePagesText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TablePageList = styled.div`
  width: 45vw;
  text-align: left;
  margin-left: 2rem;
  @media (max-width: 420px) {
    width: 65vw;
    margin-left: 1rem;
  }
`;

const TableLogin = styled.div`
  position: absolute;
  right: 37%;
  @media (max-width: 420px) {
    right: 0;
    left: 0;
    padding: 1rem;
  }
`;

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

const SubTableLogin = styled.div`
  text-align: center;
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
  TablePage,
  TablePagesText,
  TablePageList,
  TableLogin,
  TableTop,
  SubTableLogin,
  SubTableTop,
  TableTopImages,
  TableTopImage,
  SubTableTopImage,
};
