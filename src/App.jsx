import './App.scss'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import { LanguageProvider } from './LanguageContext.jsx'

function App() {

  return (
    <>
      <LanguageProvider>
        <div className='container'>
          <Header />
          <Main />
          <div className='divider'></div>
          <About />
          <div className='divider'></div>
          <Projects />
          <div className='divider'></div>
          <Footer />
        </div>
      </LanguageProvider>
    </>
  )
}

export default App
