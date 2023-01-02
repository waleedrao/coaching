import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Popping from "./Popping";
import { closeEvent, ShowEventApi, ShowEventsApi } from "../../Redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideApp from "../SideBar/SideBar";
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = ({ events, ShowEventApi, closeEvent, ShowEventsApi }) => {
  const [open, setOpen] = useState(false);
  const [renderStatus, rerender] = useState(false);

  useEffect(() => {
    ShowEventsApi();
    console.log("i renderd because of refresh or start");
  }, []);

  useEffect(() => {
    ShowEventsApi();
    console.log("i renderd");
  }, [renderStatus]);

  const openEventClick = (event) => {
    setOpen(true);
    if (event.id) {
      ShowEventApi(event.id);
    }

    return;
  };

  const closeEventClick = () => {
    setOpen(false);
    setTimeout(() => closeEvent(), 300);
  };

  return (
    <div>
      <Popping
        open={open}
        handleOpen={openEventClick}
        handleClose={closeEventClick}
        renderStatus={renderStatus}
        rerender={rerender}
      />
      <div className="table-back">
        <SideApp />
        <nav className="navbar navbar-li ght bg-li ght">
          <div className="container-fluid align-items-center">
            <span className="navbar-brand mb-0 h2 ">
              <Link className="nav-link pe-0 " to={"/events/add"}>
                Add Event
              </Link>
            </span>
          </div>
        </nav>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: 50, fontFamily: "Patrick Hand" }}
          onSelectEvent={openEventClick}
        />
      </div>
    </div>
  );
};

function mapStateToProps({ event, events }) {
  return {
    event,
    events,
  };
}

export default connect(mapStateToProps, {
  ShowEventApi,
  closeEvent,
  ShowEventsApi,
})(MyCalendar);
