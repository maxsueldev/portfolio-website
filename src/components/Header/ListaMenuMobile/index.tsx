import {ListaMenu } from './style';

interface IListaMenuMobileProps {
    isOpen: boolean
}

function ListaMenuMobile({ isOpen  }: IListaMenuMobileProps) {
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