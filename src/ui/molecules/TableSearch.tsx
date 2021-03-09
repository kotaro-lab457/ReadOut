import styled from "styled-components";

const TableSearch = styled.div`
  text-align: center;
`;

const ItemSearch = styled.div`
  display: flex;
  padding: 20px 40px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    padding: 10px 20px;
    margin: 10px;
  }
`;

const TextSearch = styled.div`
  text-align: left;
  margin-left: 3rem;
  @media (max-width: 420px) {
    margin-left: 1rem;
  }
`;

const ImageSearch = styled.div`
  height: 200px;
  @media (max-width: 420px) {
    height: 100px;
    width: 80px;
  }
`;

export { TableSearch, ItemSearch, TextSearch, ImageSearch };
