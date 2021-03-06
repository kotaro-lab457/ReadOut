import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  margin 0;
  @media(max-width:420px){
    font-size:2rem;
    margin:0 auto;
  }
`;

const HeaderTitle = styled(Title)`
  font-family: Chalkboard SE;
`;

const LoginTitle = styled(Title)`
  margin: 2rem 0 1rem;
`;

export { HeaderTitle, LoginTitle, Title };
