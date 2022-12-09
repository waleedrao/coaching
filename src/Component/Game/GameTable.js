import React from "react";
import SideApp from "../SideBar/SideBar";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./GameData";
// import "./game.css";
import { TbEdit } from "react-icons/tb";
import { BsFillPersonDashFill } from "react-icons/bs";
const GameTable = () => {
  return (
    <div>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nr</TableCell>
              <TableCell numeric>Voornaam</TableCell>
              <TableCell numeric>Tussenvegsel</TableCell>
              <TableCell numeric>Achternaam</TableCell>
              <TableCell numeric>Positie</TableCell>
              <TableCell numeric>Been</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(
              ({ nr, Voornaam, Tussenv, Achternaam, Positie, Been }) => (
                <TableRow>
                  <TableCell numeric>{nr}</TableCell>
                  <TableCell numeric>{Voornaam}</TableCell>
                  <TableCell numeric>{Tussenv}</TableCell>
                  <TableCell numeric>{Achternaam}</TableCell>
                  <TableCell numeric>{Positie}</TableCell>
                  <TableCell numeric>

                  <div className="edit-person">
                    <div>
                      <TbEdit fontSize={25} />
                    </div>
                    <div>
                      <BsFillPersonDashFill fontSize={25} />
                    </div>
                  </div>



                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default GameTable;
