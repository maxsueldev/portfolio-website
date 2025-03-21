import styled from "styled-components";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (768px <= width) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    .content {
      width: 80%;
      padding: 1rem 0.5rem;
    }
  }
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
`;

const Local = styled.p`
  font-style: italic;
  font-weight: bold;
`;

const Description = styled.p`
  line-height: 1.6rem;
  margin-top: 0.5rem;
`;

const Date = styled.div`
  font-style: italic;
  color: var(--tertiary-color);
`;

export { ExperienceContainer, Title, Local, Description, Date };
