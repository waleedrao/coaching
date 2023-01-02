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
const Table2 = ({ data, handleDelete }) => (
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
          {data?.map((d, i) => (
            <TableRow>
              <TableCell numeric>{i + 1}</TableCell>
              <TableCell numeric>{d?.firstName}</TableCell>
              <TableCell numeric>{d.lastName}</TableCell>
              <TableCell numeric>{d.int}</TableCell>
              <TableCell numeric>{d.position}</TableCell>
              <TableCell numeric>{d.bean}</TableCell>
              <TableCell numeric>{d.sex}</TableCell>
              <TableCell numeric>{d.dob}</TableCell>
              <TableCell numeric>{d.age}</TableCell>
              <TableCell numeric>{d.email}</TableCell>
              <TableCell numeric>{d.phone}</TableCell>

              <TableCell numeric>
                <div className="edit-person">
                  <div>
                    <TbEdit fontSize={25} fill="blue" />
                  </div>
                  <div
                    onClick={() => {
                      handleDelete(d._id);
                    }}
                  >
                    <BsFillPersonDashFill fontSize={25} fill="black" />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
export default Table2;
