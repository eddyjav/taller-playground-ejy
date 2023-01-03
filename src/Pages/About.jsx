import  perfil  from "../img/perfil.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
      <img className="perfil" src={perfil} alt="" />
        <div className="info">
          <h1>Edison Javier Yánez</h1>
          <p>Hi, I'm a Systems Analyst, I like programming, my preferred language is Java Script along with Node for the back and React for the front, currently I'm very interested in Tailwind CSS.
  I am participating in the reality KrugerStar of Kruger, I hope to play a good job until the end of the whole reality.</p>
        </div>
      </div>
    </>
  )
}

export default About