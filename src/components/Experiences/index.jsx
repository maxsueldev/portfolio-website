import Experience from './Experience';

import { ExperiencesContainer } from './style';

function Experiences() {
    return (
        <ExperiencesContainer id="experiences">
            <h1>Experiências</h1>
            <Experience title='CEO' local='Update Personalizados' date='Out 2020 - Dez 2024'/>
            <Experience title='Professor de Informática Básica' local='EJA - Penedo/AL' date='Abr 2022 - Dez 2022'/>
            <Experience title='Estagiário de Suporte Técnico' local='SERVEAL - Maceió/AL' date='Dez 2015 - Nov 2016'/>
            <Experience title='Estagiário de Desenvolvimento Web' local='Prática STI - Maceió/AL' description='Desenvolvimento e implantação de novas funcionalidades e melhorias em Sistemas Web, utilizando PHP, JavaScript e PL/SQL com padrão de arquitetura MVC.' date='Jun 2015 - Nov 2015'/>
            <Experience title='Estagiário de Suporte Técnico' local='SEMTABES - Maceió/AL' date='Nov 2013 - Out 2015'/>
        </ExperiencesContainer>
    );
}

export default Experiences;