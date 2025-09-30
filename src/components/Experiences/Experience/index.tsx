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
    <div
      className={styles.experienceContainer}
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
}

export default Experience;
