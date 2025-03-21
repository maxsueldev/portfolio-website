import styled from "styled-components";

const SkillsContainer = styled.section`
  color: var(--quaternary-color);
  background-color: var(--secondary-color);
  padding: 3rem 2.5rem;

  h2 {
    color: var(--tertiary-color);
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    text-align: center;
  }

  @media (768px <= width) {
    padding: 4rem 6rem;

    h3 {
      text-align: center;
    }
  }

  @media (1025px <= width) {
    padding: 4rem 8rem;

    .design {
      margin: 0 10rem;
    }
  }

  @media (1280px <= width) {
    .design {
      margin: 0 15rem;
    }
  }
`;

const FrontEnd = styled.div`
  margin-bottom: 1.2rem;
`;

const TechsFrontEnd = styled.div`
  display: flex;
  gap: 1rem;

  div {
    width: 100%;
  }

  @media (1025px <= width) {
    gap: 2.5rem;
  }
`;

export { SkillsContainer, FrontEnd, TechsFrontEnd };
