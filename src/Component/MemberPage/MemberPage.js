import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/bs";
import { GiUnlitBomb } from "react-icons/gi";
// import { MdOutlineComputer } from "react-icons/md";
import "./member.css";
import Bottom from "../Images/bottom-bg.jpeg";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home,
} from "@material-ui/icons";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import jwt from "jwt-decode";
import Navbar2Coaching from "../Navbar/Navbar2";
import { Link } from "react-router-dom";
const MemberPage = () => {
  const userAccess = sessionStorage?.getItem("token");
  const user = jwt(userAccess);
  console.log("userAccess", user);
  const data = [
    {
      piture: <GiGraduateCap fontSize={80} />,
      title: "STAFF",
      title_1: "Laidar",
      title_2: "Tainer",
      title_3: "Pysio",
      link: "/staff",
    },
    {
      piture: <GiGraduateCap fontSize={80} />,
      title: "Players",
      title_1: "selectie",
      title_2: "posities",
      title_3: "Contactgegeves",
      link: "/players",
    },
    {
      piture: <GiGraduateCap fontSize={80} />,
      title: "TACTIEK",
      title_1: "sectie",
      title_2: "Formaties",
      title_3: "Opsetelling",
      link: "/game",
    },
    {
      piture: <GiGraduateCap fontSize={80} />,
      title: "Competitie",
      title_1: "Binnenkort",
      title_2: "Binnenkort",
      title_3: "Binnenkort",
      link: "/ranking",
    },
    {
      piture: <GiGraduateCap fontSize={80} />,
      title: "Kalender",
      title_1: "Binnenkort",
      title_2: "Binnenkort",
      title_3: "Binnenkort",
      link: "/calender",
    },
    {
      piture: <GiGraduateCap fontSize={80} />,
      title: "ranking",
      title_1: "Binnenkort",
      title_2: "Binnenkort",
      title_3: "Binnenkort",
      link: "/ranking",
    },
  ];

  return (
    <div>
      <div className="member-main-bg">
        <div className="oveLay">
          <Navbar2Coaching />
          <div className="member-main">
            <div className="member-title">Welkom op de Memberpagina</div>
            <div className="member-detail">
              Dit is de hootdpagina van DigiCoachingUnit. <br />
              Vanaf daze pagina is het mogelijk om gebruik te maken van de
              bestaande functionaliteiten
            </div>
            <div className="data-class">
              {data.map((item) => {
                return (
                  <div className="member-card">
                    {" "}
                    <Link
                      to={item.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className="">{item.piture}</div>
                      <div className="staff-title">{item.title}</div>
                      <div className="staff-title1">{item.title_1}</div>
                      <div className="staff-title1">{item.title_2}</div>
                      <div className="staff-title1">{item.title_3}</div>
                    </Link>{" "}
                  </div>
                );
              })}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
