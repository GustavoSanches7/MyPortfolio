export default function About() {
    return (
        <section className="about">
            <div className="about_textbox">
                <h1>About me</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque architecto exercitationem doloremque earum dolore ea cumque necessitatibus. Vero quas dolores iure dolor? Obcaecati nulla porro odio dolorum quis nam cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi laudantium accusantium, eum obcaecati optio repellat inventore deserunt! Voluptate assumenda similique eos architecto. Nam, similique neque architecto deserunt molestias non sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, officia atque doloremque, incidunt nisi nobis temporibus reprehenderit, facilis nulla accusamus necessitatibus porro. Quam voluptatibus harum ratione amet ut ad aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus doloremque totam temporibus possimus corporis magni ea? </p>
            </div>
            <div className="about_skills">
                <h3>My skills</h3>
                <div className="about_skills_pill_container">
                    <span className="about_skills_pill">JSS <img src="public/javascript-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">HTLM <img src="public/html-5-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">CSS <img src="public/css-3-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">Sass <img src="public/sass-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">React <img src="public/react-svgrepo-com.svg" alt="" /></span>
                    <span className="about_skills_pill">MongoDB <img src="public/mongodb-svgrepo-com.svg" alt="" /></span>
                </div>
                <div> <button className="download_cv">Download my CV</button></div>
            </div>
        </section>
    )
}