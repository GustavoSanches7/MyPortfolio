import './App.scss'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import ProjectCards from './components/ProjectCards.jsx'

function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <Main />
        <About/>
        <div className='projects'>
          <ProjectCards title={'Alocama'} img={'public/Alocama.png'}/>
          <ProjectCards title={'FTP Soluções'} img={'public/ftpsolucoes.png'}/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
