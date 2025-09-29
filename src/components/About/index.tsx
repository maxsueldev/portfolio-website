import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutContainer} id="about">
      <h2 className={styles.title}>Sobre mim</h2>
      <p className={styles.content}>
        Sou desenvolvedor Front-End, apaixonado por transformar ideias em
        interfaces funcionais e acessiveis.
      </p>

      <p className={styles.content}>
        Tenho conhecimento sólido em tecnologias como React, JavaScript, CSS,
        Tailwind CSS, e estou sempre buscando melhorar minhas habilidades em
        UX/UI, acessibilidade e boas práticas de código.
      </p>

      <p className={styles.content}>
        Meu objetivo é colaborar com equipes que valorizam qualidade,
        aprendizado contínuo e impacto positivo através da tecnologia.
      </p>
    </section>
  );
}

export default About;
