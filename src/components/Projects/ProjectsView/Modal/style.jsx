import styled from "styled-components";

const ModalOut = styled.div`
    width: 100%;
    heigth: 100%;
    background-color: rgb(0, 0, 0, 0.8);
    position: fixed;
    inset: 0 0 0 0;
    z-index: 2;
`;

const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 14rem;
`;

const ImageProject = styled.img`
    background-repeat: no-repeat;
    width: 500px;
    height: 300px;
    &:hover {
        background-color: red;
        opacity: 0.5;
    }
`;

export { ModalOut, ContainerImage, ImageProject };