import "./InnovateSection.css";
import innovateImg from "../assets/images/innovate.jpg";

const TextHolder = ()=>{
  return(
    <div className="inno-text-holder">
      <h3>"AI chatbots innovate conversations with insights from extensive knowledge repositories"</h3>
      <div className="name-box">
        <span>Jacqueline Miller</span>
        <p>CEO & Founder</p>
      </div>
      <div className="stat-box">
        <div className="stat">
          <h2>5<em>x</em></h2>
          <p>Boost content production</p>
        </div>
        <div className="stat">
          <h2>85<em>%</em></h2>
          <p>Save time on prospecting efforts</p>
        </div>
        <div className="stat">
          <h2>68<em>%</em></h2>
          <p>Reduce editing time</p>
        </div>
      </div>
    </div>
  )
}

const ImageHolder = ()=>{
  return(
    <div className="inno-img-holder">
      <img src={innovateImg} alt="" />
    </div>
  )
}
export function InnovateSection(){
  return(
    <section className="innovate-section">
      <ImageHolder />
      <TextHolder />
    </section>
  )
}
