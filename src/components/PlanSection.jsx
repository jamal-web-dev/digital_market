import "./PlanSection.css";

const Card = ({plan, amount = "Custom", button, text})=>{
  return(
    <div className="plcard">
      <h4>{plan}</h4>
      <h3>${amount}<span>/month</span></h3>
      <button>{button}</button>
      <p>{text}</p>
    </div>
  )
}
export function PlanSection(){
  return(    
    <section className="plan_section">
     <h2>Choose the plan that fits your needs</h2>
     <div className="plcontainer">
      <Card
        plan="Free" 
        amount="0"
        button="Sign up now"
        text= "Limited to 100 conversations per month"
      />
      <Card
        plan="Professional" 
        amount="59"
        button="Upgrade now"
        text= "Detailed analytics and reporting"
      />
      <Card
        plan="Enterprise" 
        amount="90"
        button="Request price"
        text= "Custom integration and development"
      />
     </div>
    </section>
  )
}