import "./Productivity.css";
import chatBotImg from "../assets/images/chatbot-03.png";

const ProImg = ()=>{
  return(
    <div className="img_box">
      <img src={chatBotImg} alt="" />
    </div>
  )
}
const Card = ({ heading, desc})=>{
  return(
    <div className="pro_card">
      <div className="heading">
        <h4>{heading}</h4>
        <div className="icon">
          &lt; 
        </div>
      </div>
      <div className="content">
        <p>{desc}</p>
      </div>
    </div>
  )
}
export const ProductivitySection = ()=>{
  return (
    <section className="productivity_section">
      <ProImg />
      <div className="text_box">
        <h2>Boost productivity with intelligent automation</h2>
        <div className="pro_card_container">
          <Card heading="Accelerate brainstorming with AI" desc="Our AI-powered tool helps you brainstorm faster by providing instant suggestions and creative prompts, enabling you to stay ahead of the competition and bring your visions to life effortlessly." />

          <Card heading="Instant access to accurate information" desc="Obtain reliable and factual content at lightning speed. Our advanced AI ensures you get precise and verified information quickly, saving you time and effort in research while ensuring your content is always accurate and trustworthy." />

          <Card heading="Seamless content distribution" desc="Reach your audience wherever they are. Our platform allows you to publish content effortlessly across multiple channels, ensuring your message is delivered consistently and effectively." />
        </div>
      </div>
    </section>
  )
}