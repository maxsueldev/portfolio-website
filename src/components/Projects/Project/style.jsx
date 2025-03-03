import styled from "styled-components";

const ProjectContainer = styled.div` 
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    margin-top: 1rem;

    img {
        width: 340px;
        border-radius: 16px;
        border: 1px solid red;
    }

    @media(768px <= width) {
        padding: 0 3rem;
        margin-top: 2.6rem;

        img {
            width: 500px;
        }
    }

    @media(1025px <= width) {
        flex-direction: row;
        gap: .4rem;
        padding: 0 5rem;
    }

    @media(1280px <= width) {
        gap: 1rem;
        padding: 0 4rem;
    }
`;

const Description = styled.div`
    font-size: 1.05rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    padding: 0 3rem;

    h3 {
        font-weight: 500;
        color: var(--red-color);  
        text-align: center;
    }

    p {
        line-height: 1.6rem;
        margin-top: 1rem;
    }

    @media(1025px <= width) {
        width: 40%;
    }

    @media(1280px <= width) {
        p {
            font-size: 1.25rem;
            line-height: 1.8rem;
        }
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
        // margin: .2rem 0;
    }
`;

const ViewProject = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    svg {
        font-size: 2.6rem;
        cursor: pointer;
    }

    svg:hover {
        color: var(--red-color);
    }
`;

export { ProjectContainer, Description, TechsList, ViewProject };