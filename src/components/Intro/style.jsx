import styled from "styled-components";

const InfosProfile = styled.div`;
    height: 100vh;
    color: var(--white-color);
    display: var(--flex-display);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    padding: 0;

    h1 {
        font-size: 1.8rem;
        margin-top: 1rem;
    }

    p {
        font-size: 0.938rem;
        font-weight: 100;
    }
`;

const Photo = styled.img`
    width: 12rem;
    border-radius: 5rem;
`;

export { InfosProfile, Photo };