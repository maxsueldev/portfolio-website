import { useTheme } from "../../hooks/useTheme";
import Experience from "./Experience";

import styles from "./Experiences.module.css";

const Experiences = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`${styles.experiencesContainer} ${
        isDarkMode ? "" : styles.light
      }`}
      id="experiences"
    >
      <h2 className={styles.title}>Experiências</h2>
      <Experience
        title="Empreendedor"
        local="Update Personalizados"
        description=""
        date="Out 2020 - Dez 2024"
      />
      <Experience
        title="Professor de Informática Básica"
        local="EJA - Penedo/AL"
        description=""
        date="Abr 2024 - Dez 2024"
      />
      <Experience
        title="Operador de Caixa"
        local="Ponto do suco"
        description=""
        date="Out 2021 - Abr 2022"
      />
      <Experience
        title="Estagiário de Suporte Técnico"
        local="SERVEAL - Maceió/AL"
        description=""
        date="Dez 2015 - Nov 2016"
      />
      <Experience
        title="Estagiário de Desenvolvimento Back-End"
        local="Prática STI - Maceió/AL"
        description="Desenvolvimento Back-End de sistemas Web; operações com banco de dados; implementação de melhorias em sistemas Web; Padrão de arquitetura MVC; Linguagens de programação PHP e JavaScript; Banco de dados Oracle utilizando PL/SQL."
        date="Jun 2015 - Nov 2015"
      />
      <Experience
        title="Estagiário de Suporte Técnico"
        local="SEMTABES - Maceió/AL"
        description=""
        date="Nov 2013 - Out 2015"
      />
    </section>
  );
};

export default Experiences;
