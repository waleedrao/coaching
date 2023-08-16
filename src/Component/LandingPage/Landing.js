import React from "react";
import NavbarCoaching from "../Navbar/Navbar";
import "./landing.css";
import Bottom from "../Images/bottom-bg.jpeg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <div className="landing-main">
        <NavbarCoaching />
        <div className="oveLay">
          <div className="title-2">Welkon bij Digi Coaching Unitt</div>
          <div className="description-2">
            Moderne trauners hebben graag alle data op een vaste plek.Digi
            Coaching uniy helpt daarbij. <br />
            Binnen Digi Coaching Unit beskchik je digitaal over alle informatie
            die je nodig hebt gedurende een sportseizoen. <br />
            Interesse in meer informatie? <br />
            Houd onze website in de gaten!
          </div>

          <div className="grid-1">
            <div>
              <Link
                to="/game"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Tactieken
              </Link>
            </div>
            <div>
              <Link
                to="/calender"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Speelschema
              </Link>
            </div>
            <div>
              {" "}
              <Link
                to="/players"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Spelerslijst
              </Link>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <Link
                to="/ranking"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Scorebord
              </Link>
            </div>
            <div>
              <Link
                to="/ranking"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Competitie
              </Link>
            </div>
            <div>
              <Link
                to="/staff"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Trainingen
              </Link>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Landing;
