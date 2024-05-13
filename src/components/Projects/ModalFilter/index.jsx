import closeButton from '../../../img/projects/close-white.svg';

import { ModalOut, ModalContainer, CloseButton } from './style';

function ModalFilter({ isOpen, closeModal }) {
    if (isOpen) {
        return (
            <ModalOut>
                <ModalContainer>
                    <CloseButton onClick={closeModal} src={closeButton} alt="close button" />
                </ModalContainer>
            </ModalOut>
        );
    }
}

export default ModalFilter;