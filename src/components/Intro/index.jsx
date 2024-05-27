import LanguageIcons from './LanguageIcons';
import curriculumVitae from '../../curriculo/curriculum-vitae.pdf';

// Icons Imports
import SocialIcons from './SocialIcons';
// import LateralNavbar from './LateralNavbar';

import photo from '../../img/intro/photo.jpg';

import { IntroContainer, InfosProfile, Photo, Languages, BtnCurriculo } from './style';

function Intro() {
    return (
        <IntroContainer>
            <Photo src={photo} alt="photo image" />
            <InfosProfile className='infosProfile'>
                <h1>Maxsuel Fernando</h1>
                <p>Front-end Developer | JavaScript + React</p>

                <SocialIcons />

                <Languages>
                    <LanguageIcons />
                    <BtnCurriculo>
                        <a href={curriculumVitae} download>Meu currículo</a>
                    </BtnCurriculo>
                </Languages>
            </InfosProfile>
        </IntroContainer>
    );
}

export default Intro;