import React from "react";
import NavbarCoaching from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import "./Login.css";
import Bottom from "../Images/bottom-bg.jpeg";
const Login = () => {
  return (
    <div>
      <div className="login-bg">
        <NavbarCoaching />
        <div className="login-main">
          <div className="login-title">Welkom bij Digi Coaching Unit</div>
          <div className="login-detail">
            Vul hier de logingegevens in om gerbruik te maken van Difi Coaching
            Unit!
          </div>

          <div className="">
            <input placeholder="Voer uw emailadres in" className="email" />
          </div>
          <div>
            <input placeholder="Voer uw wachtwoord in" className="password" />
          </div>
          <div>
            <button className="login-button">Log in</button>
          </div>
          <div className="watch-link">
            Wachtwoord vergeten?
            {/* <Link>  Wachtwoord vergeten? </Link> */}
          </div>

          <div className="kilk-main">
            <span
              className=""
              style={{
                color: "white",
              }}
            >
              Heeft u nog geen account?
            </span>{" "}
            <div className="klik-text"> Klik dan hier.</div>
          </div>
          <div>
            <input className="empty-input" />
          </div>
        </div>
      </div>
      <div>
        <img src={Bottom} alt="" className="bottom-mg" />
      </div>
    </div>
  );
};

export default Login;
