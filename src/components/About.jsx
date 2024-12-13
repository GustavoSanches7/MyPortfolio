import { useContext} from 'react';
import { LanguageContext } from '../LanguageContext';

export default function About() {

    const { language } = useContext(LanguageContext)

    return (
        <section className="about">
            <div className="about_textbox">
                <h1>{language.about_title}</h1>
                <p> {language.about_text}</p>
            </div>
            <div className="about_skills">
                <h3>{language.about_skills}</h3>
                <div className="about_skills_pill_container">
                    <span className="about_skills_pill">JSS <img src="public/javascript-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">HTLM <img src="public/html-5-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">CSS <img src="public/css-3-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">Sass <img src="public/sass-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">React <img src="public/react-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">MongoDB <img src="public/mongodb-svgrepo-com.svg" alt="" /></span>
                </div>
                <div> <button className="download_cv"> {language.about_download}</button></div>
            </div>
        </section>
    )
}