import styles from "./Technologies.module.css";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";
import { SiCssmodules } from "react-icons/si";
import { useTheme } from "../../hooks/useTheme";

const Technologies = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`${styles.technologiesSection} ${
        isDarkMode ? "" : styles.light
      }`}
    >
      <h2>Tecnologias</h2>
      <div className={styles.container}>
        <FaReact className={styles.icon} />
        <SiTypescript className={styles.icon} />
        <IoLogoJavascript className={styles.icon} />
        <FaSass className={styles.icon} />
        <RiTailwindCssFill className={styles.icon} />
        <SiStyledcomponents className={styles.icon} />
        <SiCssmodules className={styles.icon} />
      </div>
    </section>
  );
};

export default Technologies;
