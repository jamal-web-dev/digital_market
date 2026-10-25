import "./Footer.css"
import logo from "../assets/images/logo-light.svg"

export function Footer (){
  return(
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="" className="logo"/>
        <p>A Bootstrap Template that's both stylish and functional, perfect for any type of technology or corporate website.</p>
        <a href="">(251) 854-6308</a>
        <a href="">example@gmail.com</a>
      </div>
      <div>
        <h4>Company</h4>
        <nav>
          <a href="">About us</a>
          <a href="">Contact us</a>
          <a href="">Career</a>
          <a href="">Career detail</a>
          <a href="">Become a partner</a>
          <a href="">Services</a>
        </nav>
      </div>
      <div>
        <h4>Resources</h4>
        <nav>
          <a href="">Case studies</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
          <a href="">Blog detail</a>
          <a href="">Success stories</a>
        </nav>
      </div>
      <div className="input-holder">
        <h4>Star connected with us</h4>
        <div className="input-box">
          <input type="email" placeholder="Enter your email"/>
          <button>Enter</button>
        </div>
        <p>✌️ No Spam — We Promise!</p>
      </div>
    </footer>
  )
}