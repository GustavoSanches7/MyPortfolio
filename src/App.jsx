import './App.scss'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'


function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <Main />
        <About/>
        <Projects/>
        <Footer />
      </div>
    </>
  )
}

export default App
