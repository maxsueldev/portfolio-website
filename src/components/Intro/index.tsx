import LanguageIcons from "./LanguageIcons";
import curriculumVitae from "../../curriculo/curriculum-vitae.pdf";
import Menu from "../Menu";
// Icons Imports
import SocialIcons from "./SocialIcons";
// import LateralNavbar from './LateralNavbar';

import photo from "/assets/intro/photo.jpeg";

import {
  Container,
  IntroContainer,
  InfosProfile,
  Photo,
  Languages,
  BtnCurriculo,
} from "./style";

function Intro() {
  return (
    <Container>
      <IntroContainer>
        <Photo src={photo} alt="photo image" />
        <InfosProfile className="infosProfile">
          <h1>Maxsuel Fernando</h1>
          <p>Front-end Developer | JavaScript + React</p>

          <SocialIcons />

          <Languages>
            <LanguageIcons />
            <BtnCurriculo>
              <a href={curriculumVitae} download>
                Meu currículo
              </a>
            </BtnCurriculo>
          </Languages>
        </InfosProfile>
      </IntroContainer>
      <Menu />
    </Container>
  );
}

export default Intro;
