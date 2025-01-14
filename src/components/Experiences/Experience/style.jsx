import styled from "styled-components";

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    p {
        font-size: 0.8rem;
    }

    @media (768px <= width) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8rem;
        position: relative;
        padding-left: 4rem;

        .content {
            width: 30%;
            border: 2px solid var(--gray-color);
            border-radius: 0.4rem;
            padding: 1rem 0.5rem;
        }
    }
`;

const Title = styled.p`
    font-weight: bold;
    margin-bottom: 0.1rem;
`;

const Local = styled.p`
    font-style: italic;
    font-weight: bold;
`;

const Description = styled.p`
    margin-top: 0.5rem;
`;

const ImageWork = styled.div`
    display: none;
    position: absolute;
    left: 50%;

    @media (768px <= width) {
        display: block;
    }
`;

const Date = styled.div`
    font-style: italic;
    width: 36%;
`;

export { ExperienceContainer, Title, Local, Description, ImageWork, Date };