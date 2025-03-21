import styled from "styled-components";

const ProjectsContainer = styled.section`
  color: var(--white-color);
  position: relative;
  padding: 3rem 0;

  h2 {
    text-align: center;
    padding: 0 3rem;
  }

  @media (1025px <= width) {
    padding: 5rem 5rem;
  }

  @media (1280px <= width) {
    padding: 5rem 10rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.563rem;
`;

export { ProjectsContainer, Content };
