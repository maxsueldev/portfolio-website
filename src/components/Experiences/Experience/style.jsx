import styled from "styled-components";

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    @media (768px <= width) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8rem;
        position: relative;
        padding-left: 4rem;

        .content {
            width: 70%;
            border: 2px solid var(--gray-color);
            border-radius: 0.4rem;
            padding: 1rem 0.5rem;
        }
    }
`;

const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.1rem;
`;

const Local = styled.p`
    font-style: italic;
    font-weight: bold;
`;

const Description = styled.p`
    line-height: 1.4rem;
    margin-top: 0.5rem;
`;

const ImageWork = styled.div`
    display: none;
    position: absolute;
    left: 70%;

    @media (768px <= width) {
        display: block;
    }

    @media(1025px <= width) {
        left: 75%;
    }
`;  

const Date = styled.div`
    font-style: italic;
`;

export { ExperienceContainer, Title, Local, Description, ImageWork, Date };