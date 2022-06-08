import { IoIosArrowForward } from "react-icons/io";
import { IconContext }       from "react-icons";
import "./NavBar.css";

function NavBar(props) {
	const items = ["New & Trending", "Pharmacy", "Dog", "Cat", "Fish", "Small Pet", "Reptile", "Bird", "Horse", "Sale"];

	if (props.render) {
    return (
		  <>
      <div className="navbar_menu">
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[0]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[1]}</p>
          <IconContext.Provider value ={{ size: 20, color: "black" }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[2]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[3]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[4]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[5]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[6]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[7]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[8]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
        <div className="navbar_menu_item">
          <p className="navbar_item_ptag">{items[9]}</p>
          <IconContext.Provider value ={{ size: 20 }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </div>
      </div>    
		  </>
 	  );
	}
	else {
    return (
			<>
			</>
		);
	};
};

export default NavBar;