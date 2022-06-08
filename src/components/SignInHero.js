import { RiFileUserLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { MdPets } from "react-icons/md"
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "./SignInHero.css";

function SignInHero() {
  let navigate = useNavigate();

  return (
    <>
      <img className="signinhero_image" src="./womanbird.png" alt="signed_in_image" />
      <div className="signinhero_container">
        <p className="signinhero_ptag">Welcome Back <span className="signinhero_spantag">Papa Bear</span>, Would you like to:</p>
        <div className="signinhero_blocks_wrapper">
          <div className="signinhero_blocks" onClick={() => navigate("/orderhistory")}>
            <p className="signinhero_block_content">View Past <br/> Orders</p>
            <IconContext.Provider value ={{ size: 50, className: "signinhero_block_icon" }}>
              <RiFileUserLine />
            </IconContext.Provider>
          </div>
          <div className="signinhero_blocks">
            <p className="signinhero_block_content">Update Account <br/> Details</p>
            <IconContext.Provider value ={{ size: 50, className: "signinhero_block_icon" }}>
              <TbUsers />
            </IconContext.Provider>
          </div>
          <div className="signinhero_blocks">
            <p className="signinhero_block_content">Update Pet<br/> Details</p>
            <IconContext.Provider value ={{ size: 50, className: "signinhero_block_icon" }}>
              <MdPets />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInHero;