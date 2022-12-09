import React from "react";
import SideApp from "../SideBar/SideBar";
import "./game.css";
import GameTable from "./GameTable";
import Bottom from "../Images/bottom-bg.jpeg";
import { RiTShirtFill } from "react-icons/ri";
import { GiShirt } from "react-icons/gi";

const Game = () => {
  return (
    <>
      <div className="game-bg">
        <SideApp />
        <div className="dd">
        <div className="ground">
          <div className="pitch-width">
            <div className="ground-bg">
              <div className="goal-score">
                <div>4-2-3-1</div>
                <div>4-4-2</div>
                <div>4-1-2-3</div>
                <div>3-4-3</div>
                <div>3-5-2</div>
              </div>
              <div className="div1">
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">LS</div>
                </div>
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">Cs</div>
                </div>
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">Rs</div>
                </div>
              </div>
              <div className="div2">
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">LM</div>
                </div>
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">CM</div>
                </div>
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">CM</div>
                </div>
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">RM</div>
                </div>
              </div>
              <div className="div3">
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">LCV</div>
                </div>
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">CV</div>
                </div>
                <div>
                  <RiTShirtFill fontSize={30} />
                  <div className="shirt-text">RCV</div>
                </div>
              </div>
              <div className="div4">
                <GiShirt fontSize={30} fill="green" />
              </div>
            </div>
          </div>
          <div className="gameTable">
            <GameTable />
            <div className="game-input">
              <input className="gameInput" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={Bottom} alt="" className="bottom-mg" />
      </div></div>
    </>
  );
};

export default Game;
