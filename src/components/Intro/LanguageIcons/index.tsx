// Icons Imports
import HtmlIcon from '/assets/intro/languages/html5.png';
import CssIcon from '/assets/intro/languages/css3.png';
import JsIcon from '/assets/intro/languages/js.png';
import ReactIcon from '/assets/intro/languages/react.svg';
import TypescriptIcon from '/assets/intro/languages/typescript.png';
import SassIcon from '/assets/intro/languages/sass.png';
import GitIcon from '/assets/intro/languages/git.png';
import FigmaIcon from '/assets/intro/languages/figma.png';

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