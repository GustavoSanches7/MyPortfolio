import { useContext} from 'react';
import { LanguageContext } from '../LanguageContext';

export default function Header() {

const {language, handleLanguage} = useContext(LanguageContext)

    return (
        <header className="header">
            <div>
                <img src="public/javascript.svg" alt="logo" className="header_logo" />
            </div>
            <div className="header_contact">
                <img src="public/octocat.svg" alt="github" className="header_svg" onClick={()=> {window.open('https://github.com/GustavoSanches7')}} />
                <img src="public/linkedin.svg" alt="linkedin" className="header_svg" onClick={()=> {window.open('https://www.linkedin.com/in/gustavo-sanches-33a442188/')}} />
                <a href="mailto:gustavo.sanches.silva@gmail.com"><img src="public/google-mail.svg" alt="email: gustavo.sanches.silva@gmail.com" className="header_svg"/></a>
                <div className="language_select">
                    <div className='language_select_container'>
                        <h1 className={language.id === 'EN_US' ? 'active' : 'innactive'} onClick={()=> handleLanguage('EN_US')}>EN</h1>
                        <h1 className='language_bar'>/</h1>
                        <h1 className={language.id === 'PT_BR' ? 'active' : 'innactive'} onClick={()=> handleLanguage('PT_BR')}>PT-BR</h1>
                    </div>
                </div>
            </div>

        </header>
    )
}