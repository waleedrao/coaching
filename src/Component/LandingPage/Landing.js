import React from "react";
import NavbarCoaching from "../Navbar/Navbar";
import "./landing.css";
import Bottom from "../Images/bottom-bg.jpeg"

const Landing = () => {
  return (
    <div>
      <div className="landing-main">
        <NavbarCoaching />
        <div className="op-class">
        <div className="title-2">Welkon bij Digi Coaching Unit</div>
        <div className="description-2">
          Moderne trauners hebben graag alle data op een vaste plek.Digi
          Coaching uniy helpt daarbij. <br />
          Binnen Digi Coaching Unit beskchik je digitaal over alle informatie
          die je nodig hebt gedurende een sportseizoen. <br />
          Interesse in meer informatie? <br />
          Houd onze website in de gaten!
        </div>

        <div className="grid-1">
          <div>Tactieken</div>
          <div>Speelschema</div>
          <div>Spelerslijst</div>
        </div>

        <div className="grid-2">
          <div>Scorebord</div>
          <div>Competitie</div>
          <div>Trainingen</div>
        </div>
        <div className="input-2">
          <input  className="input-11" />
        </div>
      </div>
        <img src={Bottom} alt="" className="bottom-mg" />
      <div></div>
      </div>
    </div>
  );
};

export default Landing;
