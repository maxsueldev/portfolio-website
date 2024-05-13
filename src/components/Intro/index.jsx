// Icons Imports
import SocialIcons from './SocialIcons';
// import LateralNavbar from './LateralNavbar';

import photo from '../../img/intro/photo.jpg';

import { InfosProfile, Photo } from './style';

function Intro() {
    return (
        <InfosProfile className='infosProfile'>
            <Photo src={photo} alt="photo image" />
            <h1>Maxsuel Fernando</h1>
            <p>Front-end Developer | JavaScript + React</p>
            
            <SocialIcons />
        </InfosProfile>
    );
}

export default Intro;