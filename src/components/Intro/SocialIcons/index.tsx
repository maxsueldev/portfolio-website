import { useTheme } from "../../../hooks/useTheme";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";

import curriculumVitae from "../../../curriculo/curriculum-vitae.pdf";

import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.socialIconsContainer} ${
        isDarkMode ? "" : styles.light
      }`}
    >
      <a href="https://www.linkedin.com/in/maxsuelfernandob/" target="_blank">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="mailto:maxsuel.dev@gmail.com">
        <MdEmail className={styles.icon} />
      </a>
      <a href="https://github.com/maxsueldev" target="_blank">
        <FaGithub className={styles.icon} />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=5582999808600"
        target="_blank"
      >
        <FaWhatsapp className={styles.icon} />
      </a>
      <div>
        <a href={curriculumVitae} download>
          <RiArticleLine className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
