import styled from "styled-components";

const AboutContainer = styled.div`
    background-color: var(--blue-color);
    padding: 3rem 2rem 3rem 4rem;

    h1 {
        color: var(--red-color);
        margin-bottom: 1rem;
    }

    p {
        letter-spacing: 0.063rem;
        line-height: 1.7rem;
        color: var(--white-color);
    }

    @media (768px <=width) {
        width: 45%;
        background-color: var(--dark-color);
        padding: 0;

        h1 {
            margin-bottom: 0.5rem;
            text-align: center;
        }
    }

    @media(1025px <= width) {
        p  {
            font-size: 1.2rem;
            line-height: 1.65rem;
        }
    }
`;

const Languages = styled.div`
    a {
        background-color: var(--black-color);
        color: var(--white-color);
        border-radius: 1.25rem;
        padding: 0.6rem 2.2rem;
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
        font-size: 1rem;
    }
`;

export { AboutContainer, Languages, BtnCurriculo };