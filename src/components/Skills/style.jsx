import styled from "styled-components";

const SkillsContainer = styled.div`
    color: var(--black-color);
    background-color: var(--grey-bg-color);
    padding: 3rem 2.5rem;

    h1 {
        color: var(--red-color);
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (768px <= width) {
        padding: 4rem 6rem;
        
        h2 {
            text-align: center;
        }

        .design {
            margin: 0 9rem;
        }
    }
        
    @media(1025px <= width) {
        padding: 4rem 8rem;

        .design {
            margin: 0 15rem;
        }
    }
`;

const FrontEnd = styled.div`
    margin-bottom: 1.2rem;
`;

const TechsFrontEnd = styled.div`
    display: flex;
    gap: 1rem;

    div {
        width: 100%;
    }

    @media (1025px <= width) {
        gap: 2.5rem;
    }
`;

export { SkillsContainer, FrontEnd, TechsFrontEnd };
