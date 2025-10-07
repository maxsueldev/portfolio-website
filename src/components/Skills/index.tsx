import { useTheme } from "../../hooks/useTheme";
import Skill from "./Skill";

import styles from "./Skills.module.css";

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`${styles.skillsContainer} ${isDarkMode ? "" : styles.light}`}
      id="skills"
    >
      <h2>Habilidades</h2>
      <div className={styles.frontend}>
        <h3>Front-End</h3>
        <div className={styles.techsFrontEnd}>
          <div>
            <Skill title="HTML" percentContent="85%" />
            <Skill title="CSS" percentContent="85%" />
            <Skill title="JavaScript" percentContent="85%" />
            <Skill title="React" percentContent="60%" />
          </div>
          <div>
            <Skill title="TypeScript" percentContent="60%" />
            <Skill title="SASS" percentContent="60%" />
            <Skill title="Tailwind" percentContent="40%" />
            <Skill title="GIT" percentContent="50%" />
          </div>
        </div>
      </div>
      <div className={styles.design}>
        <h3>Design</h3>
        <Skill title="Figma" percentContent="70%" />
        <Skill title="Photoshop" percentContent="30%" />
      </div>
    </section>
  );
};

export default Skills;
