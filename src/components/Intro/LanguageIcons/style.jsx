import styled from "styled-components";

const LanguageIconsContainer = styled.div`
    display: var(--flex-display);
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.625rem;
    margin-top: .6rem;
    margin-bottom: 0.4rem;

    img {
        width: 7%;
    }

    @media (481px <= width) { 
        img {
            width: 2.25rem;
        }
    }

    @media (768px <= width) {
        img {
            width: 1.875rem;
        }
    }

    @media (1025px <= width) {
        img {
            width: 9%;    
        }
    }
`;

export { LanguageIconsContainer };