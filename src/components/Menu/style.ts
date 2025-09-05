import styled from "styled-components";

const MenuNavegation = styled.div`
  position: absolute;
  bottom: 1rem;
  display: none;
  //   flex-direction: column;
  margin-top: 6rem;
  gap: 1rem;

  @media (768px <= width) {
    gap: 3.5rem;
    display: flex;
  }

  @media (1025px >= width) {
    margin: 0;
    padding: 0;
  }
`;

const LinkSection = styled.a`
  display: flex;

  p {
    color: var(--white-color);
    font-weight: 400;
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

    span {
      display: flex;
      justify-content: center;
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
    display: inline;
  }
`;

const ImageLogo = styled.img`
  width: 3.125rem;
`;

export { MenuNavegation, LinkSection, ImageLogo };
