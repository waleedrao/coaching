import React from "react";
import SideApp from "../SideBar/SideBar";
import "./staf.css";
import Table3 from "./Table3";
import Bottom from "../Images/bottom-bg.jpeg";

const Staf = () => {
  return (
    <>
      <div className="staf-bg">
        <SideApp />
        <div className="bbg">
          <div className="staf-p2">
            <div className="staf-titel">Welkom bij de Staf pagina</div>
            <div className="staf-detail">
              Op deze pagina kunnen de stafleden worden toegevoegd aan het team
            </div>
            <div className="staf-black">+ STAFLEDEN TCEVCEGEN</div>

            <Table3 />
          </div>
          <div className="staf-input1">
            <input className="staf-input" />
          </div>
        </div>

        <div>
          <img src={Bottom} alt="" className="bottom-mg" />
        </div>
      </div>
    </>
  );
};

export default Staf;
