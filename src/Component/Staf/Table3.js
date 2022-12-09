import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./stafData";
import { TbEdit } from "react-icons/tb";
import { BsFillPersonDashFill } from "react-icons/bs";
import "./staf.css";

// import "./style.css";
const Table3 = () => (
  <div>
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Functie</TableCell>
            <TableCell numeric>Voornaam</TableCell>
            <TableCell numeric>Tussenv</TableCell>
            <TableCell numeric>Achternaam</TableCell>
            <TableCell numeric>Geboortedatum</TableCell>
            <TableCell numeric>Geslacht</TableCell>
            <TableCell numeric>Email</TableCell>
            <TableCell numeric>Tekefoonnummmer</TableCell>
            <TableCell numeric>Beheer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ({
              functie,
              Voornaam,
              Tussenv,
              Achternaam,
              Geboortedautum,
              Geslacht,
              Email,
              Telefoonnummer,
              Beheer,
            }) => (
              <TableRow>
                <TableCell numeric>{functie}</TableCell>
                <TableCell numeric>{Voornaam}</TableCell>
                <TableCell numeric>{Tussenv}</TableCell>
                <TableCell numeric>{Achternaam}</TableCell>
                <TableCell numeric>{Geslacht}</TableCell>
                <TableCell numeric>{Geboortedautum}</TableCell>

                <TableCell numeric>{Email}</TableCell>
                <TableCell numeric>{Telefoonnummer}</TableCell>
                <TableCell numeric>
                  <div className="edit-person">
                    <div>
                      <TbEdit fontSize={25} fill="Black"  />
                    </div>
                    <div>
                      <BsFillPersonDashFill fontSize={25}  fill="Black"/>
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
export default Table3;
