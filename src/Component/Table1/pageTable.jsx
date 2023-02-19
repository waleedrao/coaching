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
  { id: "nr", label: "Nr", minWidth: 170 },
  { id: "firstName", label: "Functie", minWidth: 100 },
  {
    id: "lastName",
    label: "Voornaaam",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "int",
    label: "TussenV",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "position",
    label: "Achternaam",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  // {
  //   id: "bean",
  //   label: "Geboortedatum",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toFixed(2),
  // },
  {
    id: "sex",
    label: "Geslacht",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "dob",
    label: "Geboortedatum",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  // {
  //   id: "age",
  //   label: "Leeftijd",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toFixed(2),
  // },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "phone",
    label: "Tekefoonnummmer",
    minWidth: 200,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable({
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
                            ? column.format(value)
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
                              firstName: row.firstName,
                              lastName: row.lastName,
                              int: row.int,
                              position: row.position,
                              bean: row.bean,
                              sex: row.sex,
                              dob: row.dob,
                              age: row.age,
                              email: row.email,
                              phone: row.phone,
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
