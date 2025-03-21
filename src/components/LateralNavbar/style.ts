import styled from "styled-components";

const LateralNavbarContainer = styled.div`
  display: none;
  background-color: var(--quaternary-color);
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 2rem;
  z-index: 3;

  @media (768px <= width) {
    display: var(--flex-display);
    width: 200px;
  }
`;

const LinkSection = styled.a`
  display: var(--flex-display);
  align-items: center;
  gap: 0.75rem;

  p {
    color: var(--white-color);
    font-weight: bold;
  }

  &:hover {
    p {
      color: var(--tertiary-color);
      transition: color 1s ease;
    }

    svg {
      fill: var(--tertiary-color);
      transition: fill 1s ease;
    }
  }

  &:nth-child(1) {
    margin-bottom: 1.5rem;
  }
`;

const ImageLogo = styled.img`
  width: 3.125rem;
`;

export { LateralNavbarContainer, LinkSection, ImageLogo };
