import styled from "styled-components";

const LateralNavbarContainer = styled.div`
    display: none;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    top: 20%;
    left: 3.5%;
    z-index: 3;

    svg:hover {
        fill: var(--red-color);
        transition: fill 1s ease;
    }

    svg:hover + p {
        display: block;
    }

    @media(768px <= width) {
        display: var(--flex-display);
    }
`;

const LinkSection = styled.a`
    display: var(--flex-display);
    align-items: center;
    gap: 0.75rem;

    p {
        display: none;
        color: var(--red-color);
        font-weight: bold;
    }
`;

export { LateralNavbarContainer, LinkSection };
