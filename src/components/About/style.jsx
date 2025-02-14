import styled from "styled-components";

const AboutContainer = styled.div`
    background-color: var(--grey-bg-color);
    padding: 3rem 4rem;

    h1 {
        color: var(--red-color);
        margin-bottom: 1rem;
    }

    p {
        letter-spacing: 0.063rem;
        line-height: 1.7rem;
        color: var(--black-color);
        margin-top: 1.6rem;
    }

    @media (768px <= width) {
        padding: 4rem 6rem;

        h1 {
            margin-bottom: 3rem;
            text-align: center;
        }
    }

    @media(1025px <= width) {
        padding: 5rem 6rem;

        p  {
            font-size: 1.12rem;
            line-height: 1.85rem;
            margin-top: 2rem;
        }
    }
`;

export { AboutContainer };