import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./rowsData";
import { TbEdit } from "react-icons/tb";
import { BsFillPersonDashFill } from "react-icons/bs";
import "./style.css";
const Table2 = () => (
  <div>
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nr</TableCell>
            <TableCell numeric>Voornaam</TableCell>
            <TableCell numeric>Tussenv</TableCell>
            <TableCell numeric>Positie</TableCell>
            <TableCell numeric>Achternaam</TableCell>

            <TableCell numeric>Been</TableCell>
            <TableCell numeric>Geslacht</TableCell>
            <TableCell numeric>Geboortedatum</TableCell>
            <TableCell numeric>Leeftijd</TableCell>
            <TableCell numeric>Email</TableCell>
            <TableCell numeric>Tekefoonnummmer</TableCell>
            <TableCell numeric>Beheer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ({
              nr,
              Voornaam,
              Tussenv,
              Achternaam,
              Positie,
              Been,
              Geslacht,
              Geboortedautum,
              Leedtijd,
              Email,
              Telefoonnummer,
              Beheer,
            }) => (
              <TableRow>
                <TableCell numeric>{nr}</TableCell>
                <TableCell numeric>{Voornaam}</TableCell>
                <TableCell numeric>{Tussenv}</TableCell>
                <TableCell numeric>{Achternaam}</TableCell>
                <TableCell numeric>{Positie}</TableCell>
                <TableCell numeric>{Been}</TableCell>
                <TableCell numeric>{Geslacht}</TableCell>
                <TableCell numeric>{Geboortedautum}</TableCell>
                <TableCell numeric>{Leedtijd}</TableCell>
                <TableCell numeric>{Email}</TableCell>
                <TableCell numeric>{Telefoonnummer}</TableCell>
                <TableCell numeric>
                  <div className="edit-person">
                    <div>
                      <TbEdit fontSize={25} fill="blue" />
                    </div>
                    <div>
                      <BsFillPersonDashFill fontSize={25}  fill="black" />
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
export default Table2;
