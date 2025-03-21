import styled from "styled-components";

const AboutContainer = styled.section`
  background-color: var(--secondary-color);
  padding: 3rem;

  h2 {
    color: var(--tertiary-color);
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    letter-spacing: 0.063rem;
    line-height: 1.7rem;
    color: var(--quaternary-color);
    margin-top: 1.6rem;
  }

  @media (768px <= width) {
    padding: 3rem 4rem;

    h2 {
      margin-bottom: 3rem;
      text-align: center;
    }
  }

  @media (1025px <= width) {
    padding: 5rem 8rem;

    p {
      font-size: 1.12rem;
      line-height: 1.85rem;
      margin-top: 2rem;
    }
  }

  @media (1280px <= width) {
    padding: 5rem 12rem;
  }
`;

export { AboutContainer };
