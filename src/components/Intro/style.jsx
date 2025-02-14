import styled from "styled-components";

const IntroContainer = styled.div`
    display: var(--flex-display);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media(768px <= width) {
        flex-direction: row;
        gap: 2rem;
    }
`;

const InfosProfile = styled.div`
    display: var(--flex-display);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    gap: 0.2rem;

    h1 {
        font-size: 1.8rem;
        margin-top: 1rem;
    }

    p {
        font-size: 0.938rem;
        font-weight: 100;
    }

    @media (768px <= width) {
        width: 45%;
    }

    @media (1025px <= width) {
        width: 45%;

        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.3rem;
        }
    }
`;


const Photo = styled.img`
    width: 10rem;
    border-radius: 5rem;

    @media(768px <= width) {
        width: 12rem;
    }

    @media(1025px <= width) {
        width: 12rem;
        border-radius: 8rem;
    }
`;

const Languages = styled.div`
    a {
        background-color: var(--black-color);
        color: var(--white-color);
        border-radius: 1.25rem;
        padding: 0.3rem 1.4rem;
        margin: 1.2rem 0 1rem 0;

        &:hover {
            color: var(--red-color);
        }
    }

    @media (768px <= width) {
        justify-content: center;
    }
`;

const BtnCurriculo = styled.div`
    text-align: center;
    margin-top: 2rem;

    @media (1025px <=width) {
        margin-top: 2.5rem;
        
        a {
            font-size: 1rem;
            padding: .7rem 1.8rem;
        }
    }
`;

export { IntroContainer, InfosProfile, Photo, Languages, BtnCurriculo };