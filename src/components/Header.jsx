import { useState} from 'react';

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className="header">
            <div>
                <img src="public/javascript.svg" alt="logo" className="header_svg" />
            </div>
            <div className="header_contact">
                <img src="public/octocat.svg" alt="github" className="header_svg" />
                <img src="public/linkedin.svg" alt="linkedin" className="header_svg" />
                <img src="public/google-mail.svg" alt="email" className="header_svg" />
                <div className="language_select">
                    <div>
                        <h1>EN</h1>
                        <h1>/</h1>
                        <h1>PT-BR</h1>
                    </div>
                </div>
            </div>

        </header>
    )
}