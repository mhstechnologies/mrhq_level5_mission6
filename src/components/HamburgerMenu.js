import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext }     from "react-icons";
import { useState } from "react";

function HamburgerMenu() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <IconContext.Provider value ={{ size: 60 }}>
        <div>
          <GiHamburgerMenu onClick={() => setMenuShow(!menuShow)}/>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default HamburgerMenu;