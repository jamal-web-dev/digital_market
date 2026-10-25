import "./WorkflowSection.css";
import {Button} from "./Button"
import icon_1 from "../assets/images/01W.svg";
import icon_2 from "../assets/images/02W.svg";
import icon_3 from "../assets/images/03W.svg";
import icon_4 from "../assets/images/04W.svg";
import icon_5 from "../assets/images/logo-icon.svg";
import icon_6 from "../assets/images/06W.svg";
import icon_7 from "../assets/images/07W.svg";
import icon_8 from "../assets/images/08W.svg";
import icon_9 from "../assets/images/09W.svg";
import cardIconA from "../assets/images/download (1).svg"
import cardIconB from "../assets/images/download (2).svg"
import cardIconC from "../assets/images/download (3).svg"
import cardIconD from "../assets/images/download (4).svg"
import cardIconE from "../assets/images/download (5).svg"
import cardIconF from "../assets/images/download.svg"

const LogosBox = ()=>{
  return(
    <div className="logos-box">
      <div className="logo-card">
        <img src={icon_1} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_2} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_3} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_4} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_5} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_6} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_7} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_8} alt="" />
      </div>
      <div className="logo-card">
        <img src={icon_9} alt="" />
      </div>
    </div>
  )
}
const cardArray = [
  {
    img: cardIconE,
    heading: "Natural language processing",
    desc: "NLP allows the chatbot to interpret and process natural language inputs effectively."
  },
  {
    img: cardIconD,
    heading: "Sentiment analysis",
    desc: "This enables the chatbot to respond appropriately, enhancing customer satisfaction and engagement."
  },
  {
    img: cardIconC,
    heading: "Machine learning adaptation",
    desc: "Continuously improve through machine learning algorithms. The chatbot learns from each interaction."
  },
  {
    img: cardIconB,
    heading: "Automated task handling",
    desc: "Perform routine tasks such as scheduling appointments, processing orders, or providing information."
  },
  {
    img: cardIconA,
    heading: "Knowledge base integration",
    desc: "Access and utilize a comprehensive database of information to provide accurate answers."
  },
  {
    img: cardIconF,
    heading: "Voice recognition",
    desc: "Utilize advanced voice recognition technology for more dynamic and versatile communication."
  }
]
const Card = ({cardImg, cardTitle, cardDesc})=>{
  return (
    <div className="card">
        <img src={cardImg} alt="" />
       <h4>{cardTitle}</h4> 
        <p>{cardDesc}</p> 
    </div>
  )
}

export function WorkflowSection (){
  return(
  <section className="workflow-section">
    <div className="workflow-container">
      <LogosBox />
      <h1>Easily bring <span>AI</span> in your workflow to create content</h1>
      <p>Our robust integration capabilities ensure your data flows smoothly across systems, empowering you to streamline operations and boost productivity</p>
      <Button text="Integrate with you app" />

      <div className="card-container">
        {
          cardArray.map((card) => (
           <Card key={card.index} cardImg= {card.img} cardTitle = {card.heading} cardDesc= {card.desc} />
          ))
        }
      </div>
    </div>
  </section>
  )
}