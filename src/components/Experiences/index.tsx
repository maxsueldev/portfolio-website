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
        title="Estagiário de Desenvolvimento Back-End"
        local="Prática STI - Maceió/AL"
        description="Apoio na implementação de funcionalidades em PHP, JavaScript e PL/SQL; Integração com banco de dados e resolução de bugs; Colaboração com a equipe de Front-End"
        date="Jun 2015 - Nov 2015"
      />
      <Experience
        title="Estagiário de Suporte Técnico"
        local="SERVEAL - Maceió/AL"
        description="Atendimento a usuários, diagnóstico e manutenção de equipamentos; Instalação e configuração de softwares e redes internas; Desenvolvimento de autonomia e raciocínio lógico para resolução de problemas"
        date="Dez 2015 - Nov 2016"
      />
      <Experience
        title="Estagiário de Suporte Técnico"
        local="SEMTABES - Maceió/AL"
        description="Atendimento a usuários, diagnóstico e manutenção de equipamentos; Instalação e configuração de softwares e redes internas; Desenvolvimento de autonomia e raciocínio lógico para resolução de problemas"
        date="Nov 2013 - Out 2015"
      />
      <Experience
        title="Professor de Informática Básica"
        local="EJA - Penedo/AL"
        description="Ensino de ferramentas digitais com linguagem acessível para um público de jovens e adultos; Planejamento de aulas e suporte individualizado; Aperfeiçoamento de comunicação técnica e didática"
        date="Abr 2024 - Dez 2024"
      />
      <Experience
        title="Empreendedor"
        local="Update Personalizados"
        description="Criação de layouts personalizados e atendimento direto ao cliente; Gestão financeira e operacional do negócio; Desenvolvimento de visão criativa e foco na experiência visual do usuário"
        date="Out 2020 - Dez 2024"
      />
      <Experience
        title="Operador de Caixa"
        local="Ponto do suco"
        description="Atendimento em ambiente dinâmico com alto fluxo de clientes; Organização de transações financeiras, conferência e fechamento de caixa; Trabalho sob pressão com precisão e empatia"
        date="Out 2021 - Abr 2022"
      />
    </section>
  );
};

export default Experiences;
