import styled from "styled-components";

const MenuNavegation = styled.div`
  position: absolute;
  bottom: 1rem;
  display: none;
  margin-top: 6rem;
  gap: 1rem;

  @media (768px <= width) {
    gap: 3.5rem;
    display: flex;
  }

  @media (1025px <= width) {
    flex-direction: column;
    gap: 2.6rem;
    left: 3.6rem;
    bottom: 6rem;
    padding: 0;
    margin: 0;
  }

  @media (1280px <= width) {
    flex-direction: row;
    left: 0;
    bottom: 0;
    justify-content: center;
    position: relative;
  }
`;

const LinkSection = styled.a`
  display: flex;

  p {
    color: var(--white-color);
    font-weight: 400;
  }

  &:hover {
    span {
      color: var(--tertiary-color);
      transition: color 1s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0.4rem;
    }

    svg {
      fill: var(--tertiary-color);
      transition: fill 1s ease;
    }
  }

  span {
    display: none;
  }

  @media (400px <= width) {
    &:nth-child(1) {
      margin-bottom: 1.5rem;
    }
  }

  @media (1025px <= width) {
    span {
      display: none;
    }
  }
`;

const ImageLogo = styled.img`
  width: 3.125rem;
`;

export { MenuNavegation, LinkSection, ImageLogo };
