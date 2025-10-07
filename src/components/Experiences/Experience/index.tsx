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
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
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
