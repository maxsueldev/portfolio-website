import {ListaMenu } from './style';

function ListaMenuMobile({ isOpen }) {
    if(isOpen) {
        return (
            <ListaMenu>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#experiences">Experiências</a></li>
                <li><a href="#message">Contato</a></li>
            </ListaMenu>
        );
    }
}

export default ListaMenuMobile;