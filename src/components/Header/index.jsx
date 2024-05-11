import logo from '../../img/logoM.png';

import { HeaderContainer, ImageLogo, MenuHamburger, ListaMenu } from './style';

function Header() {
    return (
        <HeaderContainer>
            <a href="./"><ImageLogo src={logo} alt="logo" /></a>

            <MenuHamburger>
                <span></span>
                <span></span>
                <span></span>
            </MenuHamburger>
            
            <nav>
                <ListaMenu>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#experiences">Experiências</a></li>
                    <li><a href="#message">Contato</a></li>
                </ListaMenu>
            </nav>
        </HeaderContainer>
    );
}

export default Header;