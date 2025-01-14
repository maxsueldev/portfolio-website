import styled from "styled-components";

const SocialIconsContainer = styled.div`
    display: var(--flex-display);
    gap: 1.25rem;
    margin-top: 1.25rem;

    img:hover {
        transform: translateY(-50%);
        transition: transform .5s ease;
    }

    @media (481px <= width) {   
        img {
            width: 2rem;
        }   
    }

    @media (1025px <= width) {
        margin-top: 0.7rem;
    }
`;

export { SocialIconsContainer };

