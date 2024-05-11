import { ModalOut, ContainerImage, ImageProject } from './style';

function Modal({ isOpen, nameProject, imageUrl }) {
    if (isOpen) {
        return (
            <ModalOut>
                <ContainerImage>
                    <ImageProject style={{backgroundImage: "url("+ imageUrl +")"}}>

                    </ImageProject>
                </ContainerImage>
            </ModalOut>
        );
    }
}

export default Modal;