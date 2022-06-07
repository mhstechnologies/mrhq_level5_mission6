import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext }     from "react-icons";
import { useState } from "react";
import NavBar from "./NavBar";
import "./HamburgerMenu.css"

function HamburgerMenu() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <IconContext.Provider value ={{ size: 60 }}>
        <div>
          <GiHamburgerMenu onClick={() => setMenuShow(!menuShow)}/>
        </div>
      </IconContext.Provider>
      <NavBar render={menuShow} />
    </>
  );
};

export default HamburgerMenu;