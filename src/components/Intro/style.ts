import styled from "styled-components";

const Container = styled.section`
  display: var(--flex-display);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;

  @media (768px <= width) {
    height: 100vh;
  }
`;

const IntroContainer = styled.div`
  display: var(--flex-display);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (768px <= width) {
    flex-direction: row;
    gap: 4rem;
  }

  @media (1025px <= width) {
    height: 100vh;
  }

  @media (1280px <= width) {
    gap: 0;
  }
`;

const InfosProfile = styled.div`
  display: var(--flex-display);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  gap: 0.2rem;

  h1 {
    margin-top: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 100;
  }

  @media (768px <= width) {
    width: 45%;
  }

  @media (1025px <= width) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.15rem;
    }
  }
`;

const Photo = styled.img`
  width: 10rem;
  border-radius: 4px;

  @media (768px <= width) {
    width: 12rem;
  }
`;

const Languages = styled.div`
  @media (768px <= width) {
    justify-content: center;
  }
`;

const BtnCurriculo = styled.div`
  text-align: center;
  margin-top: 2rem;

  a {
    background-color: var(--quaternary-color);
    color: var(--white-color);
    border-radius: 4px;
    padding: 0.3rem 1.4rem;
    margin: 1.2rem 0 1rem 0;

    &:hover {
      color: var(--tertiary-color);
      transition: color 1s ease;
    }
  }

  @media (1025px <=width) {
    margin-top: 2.5rem;

    a {
      font-size: 1rem;
      padding: 0.7rem 1.8rem;
    }
  }
`;

export {
  Container,
  IntroContainer,
  InfosProfile,
  Photo,
  Languages,
  BtnCurriculo,
};
