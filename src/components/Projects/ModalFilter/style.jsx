import styled from "styled-components";

const ModalOut = styled.div`
    display: none;
    width: 100%;
    heigth: 100%;
    background-color: rgb(0, 0, 0, 0.8);
    position: fixed;
    inset: 0 0 0 0;
    z-index: 1;

    @media (768px <= width) {
        display: block;
    }
`;

const ModalContainer = styled.div`
    width: 500px;
    height: 250px;
    background-color: var(--gray-color);
    color: red;
    position: relative;
    top: 14rem;
    left: calc(50% - 250px);
    border-radius: 26px;
`;

const CloseButton = styled.img`
    width: 48px;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

export { ModalOut, ModalContainer, CloseButton };