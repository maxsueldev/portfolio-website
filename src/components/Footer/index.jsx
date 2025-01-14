// Icons
import linkedinIcon from '../../img/intro/social/linkedin.svg';
import githubIcon from '../../img/intro/social/github.svg';
import whatsapp from '../../img/intro/social/whatsapp.svg';

import { FooterContainer } from './style';

function Footer() {
    return (
        <FooterContainer>
            <a href="https://www.linkedin.com/in/maxsuelfernandob/" target='_blank'><img src={linkedinIcon} alt="Linkedin icon" /></a>
            <a href="https://github.com/maxsueldev" target="_blank"><img src={githubIcon} alt="GitHub icon" /></a>
            <a href="https://web.whatsapp.com/send?phone=5582999808600" target="_blank"><img src={whatsapp} alt="WhatsApp icon" /></a>
        </FooterContainer>
    );
}

export default Footer;