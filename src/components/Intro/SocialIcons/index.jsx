// Icons Imports
import linkedinIcon from '../../../img/intro/social/linkedin.svg';
import mailIcon from '../../../img/intro/social/mail.svg';
import githubIcon from '../../../img/intro/social/github.svg';
import whatsappIcon from '../../../img/intro/social/whatsapp.svg';
import curriculumIcon from '../../../img/intro/social/curriculum.svg';

import curriculumVitae from '../../../curriculo/curriculum-vitae.pdf';

import { SocialIconsContainer } from './style';

function SocialIcons() {
    return (
        <SocialIconsContainer>
            <a href="https://www.linkedin.com/in/maxsuelfernandob/" target="_blank"><img src={linkedinIcon} alt="linkedin icon" /></a>
            <a href="mailto:maxsuel.dev@gmail.com"><img src={mailIcon} alt="mail icon" /></a>
            <a href="https://github.com/maxsueldev" target="_blank"><img src={githubIcon} alt="github icon" /></a>
            <a href="https://web.whatsapp.com/send?phone=5582999808600" target="_blank"><img src={whatsappIcon} alt="whatsapp icon" /></a>
            <div>
                <a href={curriculumVitae} download><img src={curriculumIcon} alt="curriculum icon" /></a>
            </div>
        </SocialIconsContainer>
    );
}

export default SocialIcons;