import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  margin 0;
  font-family:revert;
  @media(max-width:420px){
    font-size:2rem;
    margin: 1.5rem auto 0;
  }
`;

const HeaderTitle = styled(Title)`
  font-family: Chalkboard SE;
  @media (max-width: 420px) {
    margin: 0 auto;
  }
`;

const MainTitle = styled(HeaderTitle)`
  font-size: 4rem;
  color: #fff;
  text-shadow:5px 0 5px black;
}
`;

const LoginTitle = styled(Title)`
  margin: 2rem 0 1rem;
`;

export { HeaderTitle, MainTitle, LoginTitle, Title };
