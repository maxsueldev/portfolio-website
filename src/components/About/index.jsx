import LanguageIcons from './LanguageIcons';
import curriculumVitae from '../../curriculo/curriculum-vitae.pdf';

import { AboutContainer, Languages, BtnCurriculo } from './style';

function About() {
    return (    
        <AboutContainer>
            <h1>Sobre mim</h1>
            <p>Olá, me chamo Maxsuel Fernando e desde pequeno tenho grande interesse pelo mundo da tecnologia, sempre dizendo aos meus pais
                que queria trabalhar com informática. Durante minha jornada acadêmica me via perdido com o tanto de ramos que a
                tecnologia abrange e mesmo querendo ser programador, não tinha noção de qual linguagem estudar. Só em 2017 percebi
                que o Front-end é minha área de interesse e venho estudando e me dedicando cada vez mais.</p>
            <Languages>
                <LanguageIcons />
                <BtnCurriculo>
                    <a href={curriculumVitae} download>Meu currículo</a>
                </BtnCurriculo>
            </Languages>
        </AboutContainer>
    );
}

export default About;