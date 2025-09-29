import Experience from "./Experience";

import styles from "./Experiences.module.css";

function Experiences() {
  return (
    <section className={styles.experiencesContainer} id="experiences">
      <h2 className={styles.title}>Experiências</h2>
      <Experience
        title="Empreendedor"
        local="Update Personalizados"
        description="Empreendimento de sublimação de artigos personalizados como canecas e camisetas onde desenvolvi algumas habilidades comportamentais como linguagem corporal e inteligência emocional."
        date="Out 2020 - Dez 2024"
      />
      <Experience
        title="Professor de Informática Básica"
        local="EJA - Penedo/AL"
        description="Uma das melhores satisfações da minha vida. Para Paulo Freire, ensinar é ter a oportunidade de transmitir conhecimento e ao mesmo tempo de aprender com quem ensinamos. Aprendi muito com meus alunos EJA de Penedo."
        date="Abr 2024 - Dez 2024"
      />
      <Experience
        title="Operador de Caixa"
        local="Ponto do suco"
        description="Experiência diretamente ligada ao atendimento de clientes. Tive como habilidades a empatia, comunicação e gestão de conflitos."
        date="Out 2021 - Abr 2022"
      />
      <Experience
        title="Estagiário de Suporte Técnico"
        local="SERVEAL - Maceió/AL"
        description="Suporte interno aos usuários; instalação e manutenção de computadores; configuração, monitoramento e suporte de redes; instalação e configuração de impressoras; Instalação, configuração e suporte com sistemas Windows; instalação e suporte básico com os programas CorelDRAW, AutoCAD, Microsoft Office, entre outros."
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
        description="Suporte interno aos usuários; suporte externo aos administradores dos mercados os quais esta secretaria tem acordo; instalação e manutenção de computadores; configuração, monitoramento e suporte à redes; instalação e configuração de impressoras; impressões de provas e documentos para a empresa AlmaViva; Instalação, configuração e suporte com sistemas Windows e Linux; utilização e configuração dos firewalls Zentyal e BrazilFW."
        date="Nov 2013 - Out 2015"
      />
    </section>
  );
}

export default Experiences;
