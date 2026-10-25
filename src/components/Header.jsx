import "./Header.css";
import logoImg from "../assets/images/logo-light.svg";
import { useState, useEffect} from "react";

const Logo = ()=>{
  return <img src={logoImg} alt="logo" className="logo" />
}

const Nav = ({show})=>{
  return(
    <nav className={show ? " active-menu" : ""}> 
      <a href="">Home</a>
      <a href="">Services</a>
      <a href="">Contact</a>
    </nav>
  )
}
const Button = ({text, background="purple"})=>{
  return <button className={background == "white" ? "whiteCta" : "purpleCta"}>{text}</button>
}
const ButtonBox = ()=>{
  return(
    <div className="navButtonBox"> 
      <Button text="Login" background="white"/>
      <Button text="Sign up" background="purple"/>
    </div>
  )
}

const MenuIcon = ({onClick, show})=>{
  return(
    <button className={`menu-icon  ${show ? "cancel-icon" : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export function Header(){
  const [active, setActive] = useState(false);
    const [show, setShow] =  useState(false);

  useEffect(()=>{
    function handleScroll(){
      if(window.scrollY > 150){
        setActive(true)
      }else{
        setActive(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  function showMenu(){
    setShow((prevShow) => !prevShow);
  }
  return(
    <header className={active ? "header-active" : ""} >
      <Logo />
      <Nav show={show}/>
      <div className="menu-button">
         <ButtonBox />
        <MenuIcon onClick={showMenu} show={show} />
      </div>
    </header>
  )
}