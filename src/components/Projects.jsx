import { useContext} from 'react';
import { LanguageContext } from '../LanguageContext';
import { useInView } from "react-intersection-observer";
import ProjectCards from '../components/ProjectCards.jsx'

export default function Projects() {

    const { language } = useContext(LanguageContext)

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true, 
      });

    return (
        <>
            <div ref={ref} className={`${inView ? 'projects' : 'hidden'}`}>
                <div className='projects_title'><h1>{language.projects_title}</h1></div>
                <div className="projects_cards">
                    <ProjectCards title={'Alocama'} img={'/Alocama.png'} link={'https://alocama.com.br/'} visit={language.projects_visit} description={language.card_alocama_description_1}/>
                    <ProjectCards title={'FTP Soluções'} img={'/ftpsolucoes.png'} link={'https://www.ftpsolucoes.net/'} visit={language.projects_visit} description={language.card_FTP_description_1} />
                </div>
            </div>
        </>
    )
}