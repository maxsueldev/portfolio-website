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

const ContainerImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentBg = styled.div`
    width: 900px;
    height: 420px;
    position: relative;
`;

const ImageProject = styled.div`
    width: 900px;
    height: 420px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    opacity: 0.5;
    display: flex;
`;

const ContentImage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    h3 {
        font-size: 2rem;
    }
`;

const ListaTechs = styled.ul`
    display: flex;
    gap: 0.4rem;

    li {
        font-size: 14px;
        background-color: var(--black-color);
        padding: 2px 10px;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 0.6rem;
`;

const Link = styled.a`
    width: 48px;
    height: 48px;
    background-color: var(--black-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;    
    cursor: pointer;
`;

const BtnClose = styled.img`
    width: 60px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`;

export { ModalOut, ContainerImage, ContentBg, ImageProject, ContentImage, ListaTechs, LinksContainer, Link, BtnClose };