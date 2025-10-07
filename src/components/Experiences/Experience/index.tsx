import { useTheme } from "../../../hooks/useTheme";
import IExperience from "../../../interfaces/IExperience";
import styles from "./Experience.module.css";

const Experience = ({ title, local, description = "", date }: IExperience) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.experienceContainer} ${
        isDarkMode ? "" : styles.light
      }`}
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-mirror="true"
    >
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.local}>{local}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.date}>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Experience;
