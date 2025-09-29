import styles from "./Experience.module.css";

interface IExperienceProps {
  title: string;
  local: string;
  description?: string;
  date: string;
}

function Experience({
  title,
  local,
  description = "",
  date,
}: IExperienceProps) {
  return (
    <div className={styles.experienceContainer}>
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
}

export default Experience;
