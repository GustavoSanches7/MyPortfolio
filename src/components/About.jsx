import { useContext} from 'react';
import { LanguageContext } from '../LanguageContext';
import { useInView } from "react-intersection-observer";

export default function About() {

    const { language } = useContext(LanguageContext) 

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true, 
      });

    return (
        <section ref={ref} className={`${inView ? 'about' : 'hidden'}`} >
            <div className="about_textbox">
                <h1>{language.about_title}</h1>
                <p> {language.about_text[0]}</p>
                <p> {language.about_text[1]}</p>
            </div>
            <div className="about_skills">
                <h3>{language.about_skills}</h3>
                <div className="about_skills_pill_container">
                    <span className="about_skills_pill">JSS <img src="/javascript-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">HTLM <img src="/html-5-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">CSS <img src="/css-3-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">Sass <img src="/sass-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">React <img src="/react-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">MongoDB <img src="/mongodb-svgrepo-com.svg" alt="" /></span>
                </div>
                {/* <div> <button className="download_cv"> {language.about_download}</button></div> */}
            </div>
        </section>
    )
}