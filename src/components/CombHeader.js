import { useNavigate } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IconContext }  from 'react-icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavBar from "./NavBar";
import './Header.css';
import './Hero.css';

function CombHeader() {
  const [menuShow, setMenuShow] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      <div className="Header_Body">
      <IconContext.Provider value ={{ size: 60 }}>
        <div>
          <GiHamburgerMenu onClick={() => setMenuShow(!menuShow)}/>
        </div>
      </IconContext.Provider>
        <a href={'/'}>
        <img className="Header_Pet_Logo" src="./petlogoheader.png" alt="header_petshop_logo" />
        </a>
        <form action="/" method="get">
          <input className="Header_Search" placeholder="Example: Dog Treats" type="text" id="search-area" name="search_area" />
        </form>
        <IconContext.Provider value ={{ size: 30 }}>
          <div onClick={() => navigate("/signedin")}>
            <BiUserCircle />
            <p className="Header_Icon_Text">SIGN IN</p>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value ={{ size: 30 }}>
          <div>
            <AiOutlinePlusCircle />
            <p className="Header_Icon_Text">SIGN UP</p>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value ={{ size: 30 }}>
          <div>
            <BsCart />
            <p className="Header_Icon_Text">CART</p>
          </div>
        </IconContext.Provider>
      </div>
      <div className="hero_wrapper">
        <img
          className="hero_background_image"
          src="./herobackground_mesh40.jpeg"
          alt="hero_background" 
        />
        <img 
          className="hero_walkthedog_image"
          src="./bigshoes_walkingthedog2.png"
          alt="bigshoes_walking_the_dog" 
        />
        <h1 className="hero_h1">
          GIVE YOUR DOG EXACTLY <br />
          WHAT THEY WANT
        </h1>
        <h4 className="hero_h4">
          Tell us about your dog and get personalised product <br />
          reccomendations your pet will love.
        </h4>
        <button className="hero_tryitout_button" onClick={() => navigate("/tryitout")}>TRY IT OUT</button>
        <NavBar render={menuShow} />
      </div>
    </>
  );
};

export default CombHeader;