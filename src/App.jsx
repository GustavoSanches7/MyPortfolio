import './App.scss'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import { LanguageProvider } from './LanguageContext.jsx'
import { useInView } from "react-intersection-observer";



function App() {

  const { ref: divider1Ref, inView: divider1InView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: divider2Ref, inView: divider2InView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: divider3Ref, inView: divider3InView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <LanguageProvider>
        <div className='container'>
          <Header />
          <Main />
          <div ref={divider1Ref} className={`${divider1InView ? 'divider' : 'hidden'}`}></div>
          <About />
          <div ref={divider2Ref} className={`${divider2InView ? 'divider' : 'hidden'}`}></div>
          <Projects />
          <div ref={divider3Ref} className={`${divider3InView? 'divider' : 'hidden'}`}></div>
          <Footer />
        </div>
      </LanguageProvider>
    </>
  )
}

export default App
