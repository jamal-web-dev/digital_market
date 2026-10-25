import "./Experience.css";
import chatBotImg from "../assets/images/chatbot-cta.png";
import blurImg from "../assets/images/blur-decoration.svg";
import { Button } from "./Button.jsx"
export function ExperienceSection (){
  return(
    <section className="experience_section">
      <div className="container">
        <div className="etext">
          <h2>Experience the Power of <span>AI Chatbot</span></h2>
          <p>Our AI chatbot offers enhancing customer satisfaction and boosting your business efficiency.</p>
          <Button text="Start free trial" />
        </div>
        <img src={chatBotImg} alt="" className="bot" />
        <img src={blurImg} alt="" className="blur" />
      </div>
    </section>
  )
}