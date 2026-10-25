import  blurImg from "../assets/images/blur-decoration-2.svg";
import heroImg from "../assets/images/chat-boat.jpg"
import heroMesgImg from "../assets/images/chat-heart.png";
import {Button} from "./Button";
import "./HeroSection.css";

const HeroImage = ()=>{
  return(
    <div className="heroImgBox">
      <div className="dots"><span></span><span></span><span></span></div>
      <img src={heroMesgImg} alt="Hero Message Image" className="msg-icon" />
      <img src={heroImg} alt="Hero Image" className="chatbot-image" />
    </div>
  )
}
export function HeroSection(){
  return(
    <section className="hero_section"> 
      <img src={blurImg} alt="blur iMage" className="hero_blur_style" />
      <h1>Rapidly Develop an <span>AI Chatbot</span> Using Your Expertise</h1>
      <ul>
        <li>Cloud hosting</li>
        <li>Team collaboration</li>
        <li>Fully adaptable</li>
        <li>Unify your data</li>
      </ul>

      <div className="button_hoder">
        <Button text="Start building now!"/>
        <Button text="Get started" background="white"/>
      </div>

      <HeroImage />
    </section>
  )
}