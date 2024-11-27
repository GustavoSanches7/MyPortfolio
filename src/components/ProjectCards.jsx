export default function ProjectCards({title, img}) {
    return (
        <div className="project_card">
            <div className="project_card_title"><h1>{title}</h1></div>
            <div className="project_card_image"><img src={img} alt=""  /></div>
            <div className="project_card-details">
                <li>Description 1</li>
                <li>Description 2</li>
                <li>Description 3</li>
            </div>
        </div>
    )
}