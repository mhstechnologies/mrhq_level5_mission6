import { useNavigate } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IconContext }  from 'react-icons';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';

function Header() {
  let navigate = useNavigate();

  return (
    <>
      <header className="Header_Body">
        <HamburgerMenu />
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
      </header>
    </>
  );
};

export default Header;