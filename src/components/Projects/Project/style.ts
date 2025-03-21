import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  margin-top: 1rem;

  img {
    width: 340px;
    border-radius: 4px;
  }

  @media (768px <= width) {
    margin-top: 2.6rem;

    img {
      width: 500px;
    }
  }

  @media (1280px <= width) {
    gap: 1rem;
    padding: 0 4rem;
  }
`;

const Description = styled.div`
  font-size: 1.05rem;
  line-height: 1.5rem;
  margin-top: 1rem;
  padding: 0 3rem;

  h3 {
    font-weight: 500;
    color: var(--tertiary-color);
    text-align: center;
  }

  p {
    line-height: 1.6rem;
    margin-top: 1rem;
  }

  @media (1280px <= width) {
    p {
      font-size: 1.25rem;
      line-height: 1.8rem;
    }
  }
`;

const TechsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem 1rem;
  margin-top: 2rem;

  li {
    background-color: var(--quaternary-color);
    padding: 0.2rem;
  }
`;

const ViewProject = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    font-size: 2.6rem;
    cursor: pointer;
  }

  svg:hover {
    color: var(--tertiary-color);
  }
`;

export { ProjectContainer, Description, TechsList, ViewProject };
