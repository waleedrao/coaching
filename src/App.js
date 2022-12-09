import logo from "./logo.svg";
import "./App.css";
import React, { useContext } from "react";
import NavbarCoaching from "./Component/Navbar/Navbar";
import Login from "./Component/Login/Login";
import HeaderCompoent from "./Component/SideBar/SideBar";

// import { MenuContext } from "react-flexible-sliding-menu";
import Landing from "./Component/LandingPage/Landing";
import MemberPage from "./Component/MemberPage/MemberPage";
import SideApp from "./Component/SideBar/SideBar";
import Table1 from "./Component/Table1/Table1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Table2 from "./Component/Table1/table2";
import Staf from "./Component/Staf/Staf";
import GameTable from "./Component/Game/GameTable";
import Game from "./Component/Game/Game";

function App() {
  // const { toggleMenu } = useContext(MenuContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/MemberPage" element={<MemberPage />} />
        <Route path="/Table1" element={<Table1 />} />
        <Route path="/Table2" element={<Table2 />} />
        <Route path="/staf" element={<Staf />} />
        <Route path="/gametable" element={<GameTable />} />
        <Route path="/game" element={<Game />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
