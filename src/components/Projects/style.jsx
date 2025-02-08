import styled from "styled-components";

const ProjectsContainer = styled.div`  
    color: var(--white-color);
    padding: 3rem 0;
    position: relative;
    
    @media(1280px <= width) {
        padding: 3rem 10rem;
    }
`;

const InputGroup = styled.div`
    height: 2.188rem;
    background-color: var(--gray-color);
    font-size: 1rem;
    display: var(--flex-display);
    align-items: center;
    border-radius: 1.25rem;
    padding: 1.2rem 1.375rem;
    margin: 1.6rem auto;

    @media (481px <= width) {
        width: 80%;
    }

    @media (768px <= width) {
        width: 50%;
    }
`;

const PesquisaInput = styled.input`
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    background-color: var(--gray-color);
    color: var(--white-color);
    border: none;
    outline: none;
    padding: 1.2rem;
    &::placeholder {
        color: var(--color-search-placeholder);
        letter-spacing: .5px;
    }
    &::-webkit-search-cancel-button {
        display: none;
    }
`;

const FilterImage = styled.img`
    cursor: pointer;
    margin-right: 0.625rem;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.563rem;
    padding-top: 1.25rem;
`;

export { ProjectsContainer, InputGroup, PesquisaInput, FilterImage, Content };