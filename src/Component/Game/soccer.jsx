import React, { useState, useEffect } from "react";
import SoccerLineUp from "react-soccer-lineup";

const Soccer = ({ players, format }) => {
  const [play, setPlay] = useState(null);
  useEffect(() => {
    setPlay(players);
  }, [players]);

  let awayTeam = {
    color: "red",
    squad: {
      cam: [
        { number: 5, name: players && players[4].firstName },
        { number: 6, name: players && players[5].firstName },
        { number: 7, name: players && players[6].firstName },
        { number: 8, name: players && players[7].firstName },
      ],
      df: [
        { number: 2, name: players && players[1].firstName },
        { number: 3, name: players && players[2].firstName },
        { number: 4, name: players && players[3].firstName },
      ],
      fw: [
        { number: 9, name: players && players[8].firstName },
        { number: 10, name: players && players[9].firstName },
        { number: 11, name: players && players[10].firstName },
      ],
      gk: { number: 1, name: players && players[0].firstName },
    },
  };
  let awayTeam1 = {
    color: "red",
    squad: {
      cam: [
        { number: 8, name: players && players[7].firstName },
        { number: 6, name: players && players[5].firstName },
        { number: 7, name: players && players[6].firstName },
      ],
      df: [
        { number: 2, name: players && players[1].firstName },
        { number: 3, name: players && players[2].firstName },
        { number: 4, name: players && players[3].firstName },
        { number: 5, name: players && players[4].firstName },
      ],
      fw: [
        { number: 9, name: players && players[8].firstName },
        { number: 10, name: players && players[9].firstName },
        { number: 11, name: players && players[10].firstName },
      ],
      gk: { number: 1, name: players && players[0].firstName },
    },
  };
  let awayTeam2 = {
    color: "red",
    squad: {
      cam: [
        { number: 5, name: players && players[4].firstName },
        { number: 6, name: players && players[5].firstName },
        { number: 7, name: players && players[6].firstName },
      ],
      df: [
        { number: 2, name: players && players[1].firstName },
        { number: 3, name: players && players[2].firstName },
        { number: 4, name: players && players[3].firstName },
      ],
      fw: [
        { number: 8, name: players && players[7].firstName },
        { number: 9, name: players && players[8].firstName },
        { number: 10, name: players && players[9].firstName },
        { number: 11, name: players && players[10].firstName },
      ],
      gk: { number: 1, name: players && players[0].firstName },
    },
  };
  let awayTeam3 = {
    color: "red",
    squad: {
      cm: [
        { number: 6, name: players && players[5].firstName },
        { number: 7, name: players && players[6].firstName },
        { number: 8, name: players && players[7].firstName },
        { number: 9, name: players && players[8].firstName },
      ],
      df: [
        { number: 2, name: players && players[1].firstName },
        { number: 3, name: players && players[2].firstName },
        { number: 4, name: players && players[3].firstName },
        { number: 5, name: players && players[4].firstName },
      ],
      fw: [
        { number: 10, name: players && players[9].firstName },
        { number: 11, name: players && players[10].firstName },
      ],
      gk: { number: 1, name: players && players[0].firstName },
    },
  };
  let awayTeam4 = {
    color: "red",
    squad: {
      cam: [
        { number: 9, name: players && players[8].firstName },
        { number: 8, name: players && players[7].firstName },
        { number: 6, name: players && players[5].firstName },
      ],
      df: [
        { number: 2, name: players && players[1].firstName },
        { number: 3, name: players && players[2].firstName },
        { number: 4, name: players && players[3].firstName },
        { number: 5, name: players && players[4].firstName },
        { number: 7, name: players && players[6].firstName },
      ],
      fw: [
        { number: 10, name: players && players[9].firstName },
        { number: 11, name: players && players[10].firstName },
      ],
      gk: { number: 1, name: players && players[0].firstName },
    },
  };
  let awayTeam5 = {
    color: "red",
    squad: {
      cam: [
        { number: 8, name: players && players[7].firstName },
        { number: 9, name: players && players[8].firstName },
      ],
      cm: [
        { number: 6, name: players && players[5].firstName },
        { number: 7, name: players && players[6].firstName },
      ],
      df: [
        { number: 2, name: players && players[1].firstName },
        { number: 3, name: players && players[2].firstName },
        { number: 4, name: players && players[3].firstName },
        { number: 5, name: players && players[4].firstName },
      ],
      fw: [
        { number: 10, name: players && players[9].firstName },
        { number: 11, name: players && players[10].firstName },
      ],
      gk: { number: 1, name: players && players[0].firstName },
    },
  };
  return (
    <div className="d-flex justify-content-center">
      <SoccerLineUp
        size={"responsive"}
        pattern={"lines"}
        awayTeam={
          format == "1"
            ? awayTeam
            : format == "2"
            ? awayTeam1
            : format == "3"
            ? awayTeam2
            : format == "4"
            ? awayTeam3
            : awayTeam4
        }
      />
    </div>
  );
};

export default Soccer;
