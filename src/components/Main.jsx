import { useContext, useState, useEffect } from "react"
import { LanguageContext } from "../LanguageContext"
import Tilt from "react-parallax-tilt"


export default function Main() {
    const { language } = useContext(LanguageContext)
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;



    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        let i = loopNum % language.main_subtitle.length;
        let fullText = language.main_subtitle[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(400)
        }
    };

    return (
        <section className="main">
            <div className="main_textbox">
                <div className="main_textbox_h1"> <h1> {language.main_title} </h1> </div>
                <div> <h3 className="main_textbox_h3">{text} </h3> </div>
            </div>
            <Tilt reset={false} >
                <div className="main_picture">
                    <img src="public/icon_spin.svg" alt="geometry spin" />
                </div>
            </Tilt>
        </section>
    )
}