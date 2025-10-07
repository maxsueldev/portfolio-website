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
        Tenho conhecimento sólido em tecnologias como React, JavaScript, CSS,
        Tailwind CSS, e estou sempre buscando melhorar minhas habilidades em
        UX/UI, acessibilidade e boas práticas de código.
      </p>

      <p className={styles.content} data-aos="fade-down">
        Meu objetivo é colaborar com equipes que valorizam qualidade,
        aprendizado contínuo e impacto positivo através da tecnologia.
      </p>
    </section>
  );
};

export default About;
