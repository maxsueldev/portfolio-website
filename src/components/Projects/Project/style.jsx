import styled from "styled-components";

const ProjectContainer = styled.div`
    width: 26rem;
    height: 14rem;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    text-align: center;
    cursor: pointer;
    border-radius: 1.25rem;
    padding: 0.625rem 1.25rem;

    h3 {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--red-color);
    }
`;

const Description = styled.div`
    font-size: 0.875rem;
    padding: 0.313rem 0;
`;

const TechsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.625rem;

    p {
        font-size: 0.9rem;
        background-color: var(--red-color);
        padding: 0.188rem 0.625rem;
    }
`;

export { ProjectContainer, Description, TechsContainer };