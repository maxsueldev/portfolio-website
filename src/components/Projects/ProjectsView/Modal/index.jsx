import eyeView from '../../../../img/projects/eye.svg';
import githubView from '../../../../img/projects/github.svg';
import closeImage from '../../../../img/projects/close-white.svg';

import { ModalOut, ContainerImage, ContentBg, ImageProject, ContentImage, ListaTechs, LinksContainer, Link, BtnClose } from './style';

function Modal({ isOpen, closeModal, nameProject, description, techs, imageUrl, codeUrl, homepage }) {
    if (isOpen) {
        return (
            <ModalOut onClick={closeModal}>
                <ContainerImage>
                    <ContentBg>
                        <ImageProject style={{ backgroundImage: "url(" + imageUrl + ")" }}>
                        </ImageProject>
                        <ContentImage className='contentImage'>
                            <h3>{nameProject}</h3>
                            <p>{description}</p>
                            <ListaTechs>
                                {techs.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ListaTechs>
                            <LinksContainer>
                                <Link href={homepage} target='_blank'><img src={eyeView} alt="visite page" /></Link>
                                <Link href={codeUrl} target='_blank'><img src={githubView} alt="github code" /></Link>
                            </LinksContainer>
                        </ContentImage>
                        <BtnClose onClick={closeModal} src={closeImage} alt="close modal" />
                    </ContentBg>
                </ContainerImage>
            </ModalOut>
        );
    }
}

export default Modal;