import styled from "styled-components";

const PaginationUl = styled.ul`
    display: flex;
    justify-content: center;
    gap: 0.313rem;
    margin-top: 1.875rem;
`;

const PageItem  = styled.li`
    cursor: pointer;
    background-color: var(--white-color);
    border-radius: 0.375rem;
    padding: 0.313rem 0.875rem;

    &:hover {
        opacity: 0.7;
    }
`;

const PageLink = styled.a`
    color: var(--black-color);
`;

export { PaginationUl, PageItem, PageLink };