import "./GenerateSection.css";
import generateChatImage from "../assets/images/chatbot-02.png";
import blurImg from "../assets/images/blur-decoration.svg";

const GenText = ()=>{
  return(
    <div className="gent-text">
      <h2>Generate content effortlessly in minutes</h2>
      <p>Share your latest product updates directly in-app with visual notifications and interactive widgets for enhanced communication.</p>
       <ul>
        <li>Boost feature adoption and engagement</li>
        <li>Write creatively in any language</li>
        <li>Scalable solutions for your growth</li>
        <li>Unlock possibilities with advanced analytics</li>
       </ul>
    </div>
  )
}
const GentImg = ()=>{
  return(
    <div className="gent-img">
      <img src={blurImg} alt="" className="gen-blur" />
      <img src={generateChatImage} alt="" />
    </div>
  )
}
export function GenerateSection(){
  return(
    <section className="generate_section">
      <GenText />
      <GentImg />
    </section>
  
  )
}