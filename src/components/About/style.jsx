import styled from "styled-components";

const AboutContainer = styled.div`
    background-color: var(--blue-color);
    padding: 3rem 4rem;

    h1 {
        color: var(--red-color);
        margin-bottom: 1rem;
    }

    p {
        letter-spacing: 0.063rem;
        line-height: 1.7rem;
        color: var(--white-color);
    }

    @media (768px <= width) {
        padding: 4rem 6rem;

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

export { AboutContainer };