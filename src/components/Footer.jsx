import { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../LanguageContext"

export default function Footer() {

    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="footer_title"><h1>{language.contact_title}</h1></div>
            <div className="footer">
                <div className="footer_contact">
                    <div className="footer_contact_availability"><h2>{language.contact_avaiability}</h2></div>
                    <div className="footer_contact_item" onClick={()=> {window.open('https://api.whatsapp.com/send?phone=5521988461696')}}><img src="/whatsapp(1).svg" alt="" /> <h2>whatsapp: +55 21 98846-1696</h2> </div>
                    <div className="footer_contact_item"><img src="/google-mail.svg" alt="" /> <h2> email: gustavo.sanches.silva@gmail.com</h2> </div>
                    <div className="footer_contact_item" onClick={()=> {window.open('https://www.linkedin.com/in/gustavo-sanches-33a442188/')}}><img src="/linkedin.svg"  alt="" /> <h2>Linkedin</h2> </div>
                </div>
            </div>
        </>
    )
}