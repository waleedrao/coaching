import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TbEdit } from "react-icons/tb";
import { BsFillPersonDashFill } from "react-icons/bs";
const columns = [
  { id: "name", label: "name", minWidth: 170 },
  { id: "goals", label: "goals", minWidth: 100 },
  {
    id: "assists",
    label: "assists",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "yellowCard",
    label: "yellowCard",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "redCard",
    label: "redCard",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "matches",
    label: "matches",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "minutes",
    label: "minutes",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export default function PlayerStatTable({
  data,
  handleDelete,
  setState,
  setIsModalOpen,
  setEdit,
  setEditId,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [no, setNo] = React.useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    setNo(data?.length);
  }, [data]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "transparent",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                id="Beheer"
                align="center"
                style={{
                  minWidth: "200px",
                  backgroundColor: "transparent",
                }}
              >
                Beheer
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, ind) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>{ind + 1}</TableCell>
                    {columns.slice(1).map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? value
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell numeric>
                      <div className="edit-person">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            setEdit("edit");
                            setEditId(row._id);
                            setIsModalOpen(true);
                            setState({
                              name: row.name,
                              goals: row.goals,
                              assists: row.assists,
                              yellowCard: row.yellowCard,
                              redCard: row.redCard,
                              matches: row.matches,
                              minutes: row.minutes,
                              playerTable: row.playerTable,
                              user: row.user,
                            });
                          }}
                        >
                          <TbEdit fontSize={25} fill="blue" />
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleDelete(row._id);
                          }}
                        >
                          <BsFillPersonDashFill fontSize={25} fill="black" />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="mainPage"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={no && no}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
