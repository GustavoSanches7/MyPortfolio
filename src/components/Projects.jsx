import ProjectCards from '../components/ProjectCards.jsx'

export default function Projects() {
    return (
        <div className="projects">
            <ProjectCards title={'Alocama'} img={'public/Alocama.png'}/>
            <ProjectCards title={'FTP Soluções'} img={'public/ftpsolucoes.png'}/>
        </div>
    )
}