import "./App.css";
import React, { useContext, useState } from "react";
import NavbarCoaching from "./Component/Navbar/Navbar";
import Login from "./Component/Login/Login";
import HeaderCompoent from "./Component/SideBar/SideBar";

// import { MenuContext } from "react-flexible-sliding-menu";
import Landing from "./Component/LandingPage/Landing";
import MemberPage from "./Component/MemberPage/MemberPage";
import SideApp from "./Component/SideBar/SideBar";
import Table1 from "./Component/Table1/Table1";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import jwt from "jwt-decode";
import Table2 from "./Component/Table1/table2";
import Staff from "./Component/Staf/Staf";
import GameTable from "./Component/Game/GameTable";
import Game from "./Component/Game/Game";
import Signup from "./Component/Login/Signup";
import Ranking from "./Component/Table1/ranking";
import MyCalendar from "./Component/calander/Calendar";

import AddEvents from "./Component/calander/AddEvents";
import UpdateEvent from "./Component/calander/UpdateEvent";
import Forgot from "./Component/Login/forgot";
import Resetpassword from "./Component/Login/Resetpassword";
import PlayerStat from "./Component/Table1/playerStat";
const PrivateRoutes = () => {
  const [token, setAdminToken] = useState(sessionStorage?.getItem("token"));

  return token !== null ? <Outlet /> : <Navigate to="/login" />;
};
const Redirect = () => {
  const [token, setAdminToken] = useState(sessionStorage?.getItem("token"));

  return token !== null ? <Navigate to="/member" /> : <Outlet />;
};
function App() {
  // const { toggleMenu } = useContext(MenuContext);
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route element={<PrivateRoutes />}>
          <Route path="/member" element={<MemberPage />} />
          {/* this is the table for the players */}
          <Route path="/players" element={<Table1 />} />{" "}
          <Route path="/game" element={<Game />} />
          {/* staff page */}
          <Route path="/staff" element={<Staff />} />
          <Route path="/player-statics" element={<PlayerStat />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/calender" exact element={<MyCalendar />} />
          <Route path="/events/add" element={<AddEvents />} />
          <Route path="/event/:id/update" element={<UpdateEvent />} />{" "}
        </Route>{" "}
        <Route element={<Redirect />}>
          {" "}
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" element={<Login />} exact />{" "}
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Resetpassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
