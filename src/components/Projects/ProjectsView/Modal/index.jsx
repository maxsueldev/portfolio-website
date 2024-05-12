import eyeView from '../../../../img/projects/eye.svg';
import githubView from '../../../../img/projects/github.svg';

import { ModalOut, ContainerImage, ContentBg, ImageProject, ContentImage, ListaTechs, LinksContainer, Link } from './style';

function Modal({ isOpen, nameProject, description, techs, imageUrl, codeUrl, homepage }) {
    if (isOpen) {
        return (
            <ModalOut>
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
                    </ContentBg>
                </ContainerImage>
            </ModalOut>
        );
    }
}

export default Modal;