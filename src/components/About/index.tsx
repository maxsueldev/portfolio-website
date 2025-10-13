import { useEffect } from "react";
import styles from "./About.module.css";
import { useTheme } from "../../hooks/useTheme";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`${styles.aboutContainer} ${isDarkMode ? "" : styles.light}`}
      id="about"
    >
      <h2 className={styles.title} data-aos="fade-down">
        Sobre mim
      </h2>
      <p className={styles.content} data-aos="fade-down">
        Sou desenvolvedor Front-End, apaixonado por transformar ideias em
        interfaces funcionais e acessiveis.
      </p>

      <p className={styles.content} data-aos="fade-down">
        Tenho conhecimento sólido em HTML, CSS e JavaScript. Conhecimento em
        Desenvolvimento com React e TypeScript. Conhecimento em React Hooks,
        React-Router, React Hook Form, Context API, Styled Components, CSS
        Modules e Tailwind.
      </p>
      <p className={styles.content} data-aos="fade-down">
        Capacidade de consumir e integrar APIs REST. Proficiência em Git para
        controle de versão e colaboração. Noções de UX/UI, incluindo conceitos
        como usabilidade, acessibilidade e design responsivo. Boa capacidade de
        trabalho em equipe e disposição para aprendizado contínuo.
      </p>
    </section>
  );
};

export default About;
