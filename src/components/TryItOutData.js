import { useState } from "react";
import "./TryItOutData.css";

function TryItOutData() {
  const [boy, setBoy] = useState(false);
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(true);

  function genderSelection(e)
  {
    setBoy(false);

    if (e === "boy")
    {
      setBoy(true);
    }
  }

  function sizeSelection(e)
  {
    setSmall(false);
    setMedium(false);
    setLarge(false);

    if (e === "small")
    {
      setSmall(true);
    }
    else if (e === "medium") {
      setMedium(true);
    }
    else {
      setLarge(true);
    }
  }

  return(
    <>
      <div className="tryitoutdata_container">
        <p className="tryitoutdata_title">What is your dogs' name?</p>
        <form action="/" method="post">
          <input className="tryitoutdata_dogsname" placeholder="Dogs Name" type="text" id="dogsname-area" name="dogsname_area" />
        </form>
        <div className="tryitout_gender">
          <div
            className={boy ? "tryitout_gender_selected" : "tryitout_gender_notselected"} 
            onClick={e => genderSelection("boy")}>
            <p>He's a good boy</p>
          </div>
          <div 
            className={boy ? "tryitout_gender_notselected" : "tryitout_gender_selected"} 
            onClick={e => genderSelection("girl")}>
            <p>She's a good girl</p>
          </div>
        </div>
        <p className="tryitoutdata_title">What breed is your dog?</p>
        <form action="/" method="post">
          <input className="tryitoutdata_dogsname" placeholder="Dogs Breed" type="text" id="dogsname-area" name="dogsname_area" />
        </form>
        <p className="tryitoutdata_title">How old is your dog?</p>
        <form action="/" method="post">
          <input className="tryitoutdata_dogsname" placeholder="Dogs Age" type="text" id="dogsname-area" name="dogsname_area" />
        </form>
        <p className="tryitoutdata_title">What size is your dog? </p>
        <div className="tryitout_dogsize">
          <div
            className={small ? "tryitout_size_selected" : "tryitout_size_notselected"} 
            onClick={e => sizeSelection("small")}>
            <p>Small (1-9Kg)</p>
          </div>
          <div 
            className={medium ? "tryitout_size_selected" : "tryitout_size_notselected"} 
            onClick={e => sizeSelection("medium")}>
            <p>Medium (9-22Kg)</p>
          </div>
          <div 
            className={large ? "tryitout_size_selected" : "tryitout_size_notselected"} 
            onClick={e => sizeSelection("large")}>
            <p>Large (22Kg+)</p>
          </div>
        </div>
        <button className="tryitout_button">GET RECOMMENDATIONS</button>
      </div>
      <img
        className="tryitoutdata_background_image"
        src="./herobackground_mesh40.jpeg"
        alt="tryitoutdata_background" 
      />
    </>
  );
};

export default TryItOutData;