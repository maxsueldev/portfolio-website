import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    background-color: red;
    padding: 1rem 0;

    img {
        width: 2.2rem;
    }

    @media (1025px <= width) {
        padding: 1.4rem;

        img {
            width: 2.25rem;
        }
    }
`;

export { FooterContainer }