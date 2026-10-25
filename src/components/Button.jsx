import "./Button.css"

export const Button = ({text = "Contact", background = "purple"})=>{
  let class_name;
  if(background == "purple"){
    class_name = "purpleBgBtn";
  }else if(background == "white"){
    class_name = "whiteBgBtn";
  }else{
    class_name = "transparent";
  }

  return(
    <button className={class_name}>{text}</button>
  )
}