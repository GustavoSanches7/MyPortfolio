import { useContext} from 'react';
import { LanguageContext } from '../LanguageContext';

import ProjectCards from '../components/ProjectCards.jsx'

export default function Projects() {

    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className='projects'>
                <div className='projects_title'><h1>{language.projects_title}</h1></div>
                <div className="projects_cards">
                    <ProjectCards title={'Alocama'} img={'public/Alocama.png'} />
                    <ProjectCards title={'FTP Soluções'} img={'public/ftpsolucoes.png'} />
                </div>
            </div>
        </>
    )
}