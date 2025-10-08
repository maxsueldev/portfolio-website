import curriculumVitae from "../../curriculo/curriculum-vitae.pdf";
import Menu from "../Menu";
// Icons Imports
import SocialIcons from "./SocialIcons";
// import LateralNavbar from './LateralNavbar';

import photo from "/assets/intro/photo.jpeg";

import styles from "./Intro.module.css";
import BtnDarkMode from "./BtnDarkMode";
import { useTheme } from "../../hooks/useTheme";

const Intro = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`${styles.introSection} ${isDarkMode ? "" : styles.light}`}
    >
      <BtnDarkMode />
      <div className={styles.introContainer}>
        <div className={styles.circleImage}>
          <img className={styles.photo} src={photo} alt="photo image" />
        </div>
        <div className={styles.infosProfile}>
          <h1>Olá, eu sou o Maxsuel (Max) ✌</h1>
          <p className={styles.description}>
            Desenvolvedor Front-end focado em criar interfaces modernas,
            responsivas e performáticas.
          </p>
          <SocialIcons />

          <div className={styles.btnProjects}>
            <a href="#projects">Meus projetos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
