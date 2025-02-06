import { useContext, useState } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function Header() {

    const { language, handleLanguage } = useContext(LanguageContext)
    const [openHamburger, setOpenHamburger] = useState(false)


    return (
        <header className="header">

            <div className='hamburgerNav' >
                <img src="/burger-list-menu-navigation-svgrepo-com.svg" alt="Expandir menu" onClick={() => setOpenHamburger(!openHamburger)} />
            </div>
            <div>
                <img src="/GSS.svg" alt="logo" className="header_logo" />
            </div>
            <div className={`header_contact ${openHamburger ? 'show' : ''}`}>
                <img src="/octocat.svg" alt="github" className="header_svg" onClick={() => { window.open('https://github.com/GustavoSanches7') }} />
                <img src="/linkedin.svg" alt="linkedin" className="header_svg" onClick={() => { window.open('https://www.linkedin.com/in/gustavo-sanches-33a442188/') }} />
                <a href="mailto:gustavo.sanches.silva@gmail.com"><img src="/google-mail.svg" alt="email: gustavo.sanches.silva@gmail.com" className="header_svg" /></a>
                <div className="language_select">
                    <div className='language_select_container'>
                        <h1 className={language.id === 'EN_US' ? 'active' : 'innactive'} onClick={() => handleLanguage('EN_US')}>EN</h1>
                        <h1 className='language_bar'>/</h1>
                        <h1 className={language.id === 'PT_BR' ? 'active' : 'innactive'} onClick={() => handleLanguage('PT_BR')}>PT-BR</h1>
                    </div>
                </div>
            </div>

        </header>
    )
}