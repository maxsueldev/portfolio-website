import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: var(--black-color);
  display: var(--flex-display);
  justify-content: space-between;
  position: fixed;
  padding: 1.25rem 2.5rem;
  z-index: 4;
`;

const ImageLogo = styled.img`
  width: 3.125rem;
`;

const MenuHamburger = styled.div`
  width: fit-content;
  position: absolute;
  top: 2.25rem;
  right: 2.5rem;
  display: var(--flex-display);
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;

  span {
    display: block;
    width: 1.625rem;
    height: 0.188rem;
    background-color: var(--white-color);
    transition: all 0.8s ease-in;
  }

  &.active span:first-child {
    transform: rotate(45deg) translate(12px, 10%);
  }

  &.active span:last-child {
    transform: rotate(-45deg) translate(11px, 10%);
  }

  &.active span:nth-child(2) {
    transform: scale(0);
  }

  @media (768px <= width) {
    display: none;
  }
`;

const ListaMenu = styled.ul`
  height: 100%;
  display: none;

  li a {
    color: var(--white-color);
    padding: 0.625rem 0.938rem;
  }

  li a:hover {
    color: var(--tertiary-color);
    transition: 0.4s ease;
  }

  @media (768px <= width) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.313rem;
  }
`;

export { HeaderContainer, ImageLogo, MenuHamburger, ListaMenu };
