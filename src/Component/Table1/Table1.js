import React from "react";
import SideApp from "../SideBar/SideBar";
import "./table.css";
import Table2 from "./table2";
import Bottom from "../Images/bottom-bg.jpeg";

const Table1 = () => {
  return (
    <div>
      <div className="table-back">
        <SideApp />
<div className="dd">
        <div className="table-main">
          <div className="table-titel">Welkom bij de Staf pagina</div>
          <div className="table-detail">
            Op deze pagina kunnen de stafleden worden toegevoegd aan het team
          </div>
          <div className="staf-black">+ STAFLEDEN TCEVCEGEN</div>

          {/* <div class="table-responsive table-main1 " style={{ overflow: "auto" }}>
          <table class="table table-bordered  table_border_black ">
            <thead>
              <tr>
                <th scope="col">Nr</th>
                <th scope="col">Voornaam</th>
                <th scope="col">Tussenv</th>
                <th scope="col">Achternaam</th>
                <th scope="col">Positie</th>
                <th scope="col">Been</th>
                <th scope="col">Geslacht</th>
                <th scope="col">Geboortedatum</th>
                <th scope="col">Leeftijd</th>
                <th scope="col">Email</th>
                <th scope="col">Tekefoonnummmer</th>
                <th scope="col">Beheer</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <th scope="row">{item.nr}</th>
                    <td>{item.Voornaam}</td>
                    <td>{item.Tussenv}</td>
                    <td>{item.Achternaam}</td>
                    <td>{item.Positie}</td>
                    <td>{item.Been}</td>
                    <td>{item.Geslacht}</td>
                    <td>{item.Geboortedautum}</td>
                    <td>{item.Leedtijd}</td>
                    <td>{item.Email}</td>
                    <td>{item.Telefoonnummer}</td>
                    <td>{item.Beheer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}

          <Table2 />
          <div>
            <input className="input-white-color" />
          </div>
        </div>
      </div>
      <div>
        <img src={Bottom} alt="" className="bottom-mg" />
      </div></div>
    </div>
  );
};

export default Table1;
