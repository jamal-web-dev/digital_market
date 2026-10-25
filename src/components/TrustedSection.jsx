import "./TrustedSection.css";
import graphoImg from "../assets/images/grapho.svg";
import iconicImg from "../assets/images/iconic.svg";
import vectraImg from "../assets/images/vectra.svg";
import logiqueImg from "../assets/images/logique.svg";
import optimalImg from "../assets/images/optimal.svg";
import signumImg from "../assets/images/signum.svg";


export const TrustedSection = ()=>{
  return(
    <section className="trusted_section">
      <h4>Trusted by 10,000+ marketers at leading companies</h4>
      <div className="companies_box">
        <img src={graphoImg} alt="" />
        <img src={iconicImg} alt="" />
        <img src={vectraImg} alt="" />
        <img src={logiqueImg} alt="" />
        <img src={optimalImg} alt="" />
        <img src={signumImg} alt="" />
      </div>
    </section>
  )
}