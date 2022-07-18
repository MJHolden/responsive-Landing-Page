import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faArrowDown,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import drakeImg from "./images/drake-2022-2-tgj.png";
import dotIMG from "./images/Mr. Morale.jpeg";
import snohImg from "./images/Snoh Fall.jpeg";
import weekndImg from "./images/DawnFM.jpeg";
import jackImg from "./images/Harlow.jpeg";
import mainImg from "./images/Dot.jpeg";

import {
  faInstagram,
  faFacebookF,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [navBarOpen, setNavBaropen] = useState(false);

  const handleToggle = () => {
    setNavBaropen((prev) => !prev);
  };
  return (
    <>
      <div className="navBar">
        <p className="roshiLogo">
          <FontAwesomeIcon icon={faHeadphones} />
          =Roshi
        </p>

        <div onClick={handleToggle}>
          <FontAwesomeIcon
            icon={navBarOpen ? faX : faBars}
            className="hamburger"
          />
        </div>

        <ul className={`menuNav ${navBarOpen && "showMenu"}`}>
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <img src={mainImg} className="mainImg"></img>

        <div className="form">
          <h1>Try Roshi Music for FREE</h1>
          <input type="text" className="input" placeholder="Name"></input>
          <br></br>
          <br></br>
          <input type="text" className="input" placeholder="Email"></input>
          <br></br>
          <br></br>
          <button className="submitBtn" type="submit">
            Start Free Trial
          </button>
        </div>
        <div className="next-page">
          <h2>Get instant access to all of your favorite artists</h2>
          <div className="imgContainer">
            <ul className="imgList">
              <li>
                <img className="artistImg" src={drakeImg}></img>
              </li>
              <li>
                <img className="artistImg" src={dotIMG}></img>
              </li>
              <li>
                <img className="artistImg" src={snohImg}></img>
              </li>
              <li>
                <img className="artistImg" src={weekndImg}></img>
              </li>
              <li>
                <img className="artistImg" src={jackImg}></img>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <h3>You can also sign up using</h3>
          <ul className="iconList">
            <li className="listIcon">
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="listIcon">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li className="listIcon">
              <a href="https://accounts.google.com/ServiceLogin/identifier?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
            <li className="listIcon">
              <a href="https://tv.apple.com/?ign-itscg=MC_20000&ign-itsct=atvp_brand_omd&mttn3pid=Google%20AdWords&mttnagencyid=a5e&mttncc=US&mttnsiteid=143238&mttnsubad=OUS2019801_1-518881867139-c&mttnsubkw=102338224941__vYX9jc4t_&mttnsubplmnt=">
                <FontAwesomeIcon icon={faApple} />
              </a>
            </li>
          </ul>

          <strong>
            <p className="footerP">Because music equals Roshi</p>
          </strong>
        </div>
      </div>
    </>
  );
}

export default App;
