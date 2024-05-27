// Icons Imports
import HtmlIcon from '../../../img/intro/languages/html5.png';
import CssIcon from '../../../img/intro/languages/css3.png';
import JsIcon from '../../../img/intro/languages/js.png';
import ReactIcon from '../../../img/intro/languages/react.svg';
import TypescriptIcon from '../../../img/intro/languages/typescript.png';
import SassIcon from '../../../img/intro/languages/sass.png';
import GitIcon from '../../../img/intro/languages/git.png';
import FigmaIcon from '../../../img/intro/languages/figma.png';

import { LanguageIconsContainer } from './style';

function LanguageIcons() {
    return (
        <LanguageIconsContainer>
            <img src={HtmlIcon} alt="HTML Icon" />
            <img src={CssIcon} alt="CSS Icon" />
            <img src={JsIcon} alt="JS Icon" />
            <img src={ReactIcon} alt="React Icon" />
            <img src={TypescriptIcon} alt="Typescript Icon" />
            <img src={SassIcon} alt="Sass Icon" />
            <img src={GitIcon} alt="Git Icon" />
            <img src={FigmaIcon} alt="Figma Icon" />
        </LanguageIconsContainer>
    );
}

export default LanguageIcons;