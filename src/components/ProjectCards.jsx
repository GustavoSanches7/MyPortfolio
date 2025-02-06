import { useContext} from 'react';
import { LanguageContext } from '../LanguageContext';

export default function ProjectCards({title, img, link, visit, description}) {

    const { language } = useContext(LanguageContext)

    return (
        <div className="project_card">
            <div className="project_card_title"><h1>{title}</h1></div>
            <div className="project_card_image" onClick={()=> {window.open(link)}} ><img src={img} alt=""  /></div>
            <div className="project_card_details">
                <div className='project_card_details_link' onClick={()=> {window.open(link)}}><h2 > {visit}</h2> <img src="/globe-svgrepo-com.svg" alt="" /></div>
                <li><p>{description}</p></li>
            </div>
        </div>
    )
}