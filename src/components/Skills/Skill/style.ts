import styled from "styled-components";

const SkillContainer = styled.div`
  margin: 0.7rem 0;

  p {
    font-size: 0.8rem;
    font-style: italic;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 1.2rem;
  background-color: var(--gray-color);
  border-radius: 2rem;
  margin: 0.3rem 0;

  span {
    display: block;
    height: 100%;
    background-color: var(--tertiary-color);
    border-radius: 2rem;
  }
`;

export { SkillContainer, ContentBox };
