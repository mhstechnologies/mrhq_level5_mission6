import "./Hero.css";

function Hero() {
  return (
    <>
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
        <button className="hero_tryitout_button">TRY IT OUT</button>
      </div>
    </>
  );
};

export default Hero;