import styled from "styled-components";

const AboutContainer = styled.section`
    background-color: var(--grey-bg-color);
    padding: 3rem;

    h2 {
        color: var(--red-color);
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        letter-spacing: 0.063rem;
        line-height: 1.7rem;
        color: var(--black-color);
        margin-top: 1.6rem;
    }

    @media (768px <= width) {
        padding: 3rem 6rem;

        h2 {
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