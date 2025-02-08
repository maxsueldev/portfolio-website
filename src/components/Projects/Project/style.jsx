import styled from "styled-components";

const ProjectContainer = styled.div` 
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;

    img {
        width: 340px;
        border-radius: 16px;
    }

    @media(768px <= width) {
        padding: 0 3rem;
        margin-top: 4rem;

        img {
            width: 600px;
        }
    }

    @media(1025px <= width) {
        flex-direction: row;
        gap: .4rem;
        padding: 0 5rem;

        img {
            width: 450px;
        }
    }

    @media(1280px <= width) {
        gap: 1rem;
        padding: 0 4rem;

        img {
            width: 600px;
        }
    }
`;

const Description = styled.div`
    font-size: 1rem;
    margin-top: 1rem;

    h3 {
        font-size: 2rem; 
        font-weight: 500;
        color: var(--red-color);  
        text-align: center;
    }

    p {
        margin-top: .75rem;
    }

    @media(1280px <= width) {
        width: 40%;
    }
`;

const TechsList = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .25rem 1rem;
    margin-top: 2rem;

    li {
        background-color: var(--black-color);
        padding: .2rem;
    }
`;

const ViewProject = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    img {
        width: 3rem;
        cursor: pointer;
    }
`;

export { ProjectContainer, Description, TechsList, ViewProject };