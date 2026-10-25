import "./ReviewSection.css";
import userOne from "../assets/images/user01.jpg";


const Review = ({avater, text, name, occupation})=>{
  return(
    <div className="review">
      <img src={avater} alt="" />
      <p>{text}</p>
      <div className="name">
        <h4>{name}</h4>
        <span>{occupation}</span>
      </div>
    </div>
  )
}
export function ReviewSection (){
  return(
    <section className="review_section">
      <div className="container">
        <Review 
          avater={userOne}
          text={" Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled."}
          name="Jacqueline Miller"
          occupation="Product designer"
        />
      </div>
    </section>
  )
}