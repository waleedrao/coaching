import React, { useState, useEffect } from "react";
import SideApp from "../SideBar/SideBar";
import "./table.css";
import Table2 from "./table2";
import Bottom from "../Images/bottom-bg.jpeg";
import { Button, Modal } from "antd";
import { serverInstance } from "../../axiosInsatnce";
import jwt from "jwt-decode";
import StickyHeadTable from "./pageTable";
import Swal from "sweetalert2";
const Table1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState("");
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState(null);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    int: "",
    position: "",
    bean: "",
    sex: "",
    dob: "",
    age: "",
    email: "",
    phone: "",
    user: "",
  });
  useEffect(() => {
    const userAccess = sessionStorage?.getItem("token");
    const user = jwt(userAccess);
    console.log("userAccess", user);
    setUser(user);
    setState({ ...state, user: user._id });
  }, []);
  useEffect(() => {
    user &&
      serverInstance
        .get(`/players/findAll/${user?._id}`)
        .then((res) => {
          setPlayers(res.data);
          console.log(res, "get res", res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit == "edit") {
      if (
        state.age === "" ||
        state.firstName === "" ||
        state.lastName === "" ||
        state.int === "" ||
        state.position === "" ||
        state.bean === "" ||
        state.dob === "" ||
        state.email === "" ||
        state.phone === "" ||
        state.user === ""
      ) {
        Swal.fire("Fill all the fields", "", "error");
      } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(state.email)) {
          serverInstance
            .put(`/players/edit/${editId}`, { state })
            .then((res) => {
              setIsModalOpen(false);
              setState({
                firstName: "",
                lastName: "",
                int: "",
                position: "",
                bean: "",
                sex: "",
                dob: "",
                age: "",
                email: "",
                phone: "",
                user: user._id,
              });
              Swal.fire("Updated successfully", "", "success");
              setPlayers(res.data.player);
              console.log(res, "get res updated", res.data);
            })
            .catch((err) => {
              console.log("err", err);
              Swal.fire("Something went wrong!", "", "error");
            });
        } else {
          return Swal.fire("Enter a valid Email", "", "error");
        }
      }
    } else {
      if (
        state.age === "" ||
        state.firstName === "" ||
        state.lastName === "" ||
        state.int === "" ||
        state.position === "" ||
        state.bean === "" ||
        state.dob === "" ||
        state.email === "" ||
        state.phone === "" ||
        state.user === ""
      ) {
        Swal.fire("Fill all the fields", "", "error");
      } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(state.email)) {
          serverInstance
            .post("/players/add", { state })
            .then((res) => {
              setPlayers(res.data.player);
              setIsModalOpen(false);
              setState({
                firstName: "",
                lastName: "",
                int: "",
                position: "",
                bean: "",
                sex: "",
                dob: "",
                age: "",
                email: "",
                phone: "",
                user: user._id,
              });
              console.log(res, "res.data.players", res.data.players);
              Swal.fire("Player added successfully", "", "success");
            })
            .catch((err) => {
              console.log("err", err);
              Swal.fire("Something went wrong!", "", "error");
            });
        } else {
          return Swal.fire("Enter a valid Email", "", "error");
        }
      }
    }
  };
  const handleDelete = (id) => {
    serverInstance
      .delete(`/players/delete/${id}`)
      .then((res) => {
        setPlayers(
          players.filter((data) => data._id !== res.data.deletedPlayer)
        );
        Swal.fire("Player deleted successfully", "", "success");
        console.log(res, "get res", res.data);
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire("Something went wrong!", "", "error");
      });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="table-back">
        <div className="oveLay">
          <SideApp />
          <div className=" d d">
            <div className="table-main">
              <Modal
                title="Add new STAFLEDEN"
                open={isModalOpen}
                onOk={handleOk}
                footer={false}
                onCancel={handleCancel}
              >
                <div className="mainInputs">
                  <div className="holdalltogather">
                    <div className="labe">First Name</div>
                    <input
                      className="label_input"
                      value={state.firstName}
                      onChange={(e) => {
                        setState({ ...state, firstName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">Last Name</div>
                    <input
                      className="label_input"
                      value={state.lastName}
                      onChange={(e) => {
                        setState({ ...state, lastName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">int</div>
                    <input
                      className="label_input"
                      value={state.int}
                      onChange={(e) => {
                        setState({ ...state, int: e.target.value });
                      }}
                    />
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">position</div>
                    <input
                      className="label_input"
                      value={state.position}
                      onChange={(e) => {
                        setState({ ...state, position: e.target.value });
                      }}
                    />
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">bean</div>
                    <input
                      className="label_input"
                      value={state.bean}
                      onChange={(e) => {
                        setState({ ...state, bean: e.target.value });
                      }}
                    />
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">sex</div>
                    <select
                      name="pets"
                      className="label_input"
                      value={state.sex}
                      onChange={(e) => {
                        setState({ ...state, sex: e.target.value });
                      }}
                    >
                      <option value="" disabled>
                        --Please choose a sex--
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-Binary">Non binary</option>
                      <option value="other">Other</option>
                    </select>
                    {/* <input
                    className="label_input"
                    value={state.sex}
                    onChange={(e) => {
                      setState({ ...state, sex: e.target.value });
                    }}
                  /> */}
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">dob</div>
                    <input
                      className="label_input"
                      value={state.dob}
                      type="date"
                      onChange={(e) => {
                        setState({ ...state, dob: e.target.value });
                      }}
                    />
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">age</div>
                    <input
                      className="label_input"
                      type="number"
                      value={state.age}
                      onChange={(e) => {
                        setState({ ...state, age: e.target.value });
                      }}
                    />
                  </div>

                  <div className="holdalltogather">
                    <div className="labe">email</div>
                    <input
                      className="label_input"
                      value={state.email}
                      onChange={(e) => {
                        setState({ ...state, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="holdalltogather">
                    <div className="labe">phone</div>
                    <input
                      type="number"
                      className="label_input"
                      value={state.phone}
                      onChange={(e) => {
                        setState({ ...state, phone: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="topSubmit">
                  <div className="buttondiv" onClick={handleSubmit}>
                    {edit == "edit" ? "Update" : "Submit"}
                  </div>
                </div>
              </Modal>
              <div className="table-titel">Welkom bij de player pagina</div>
              <div className="table-detail">
                Op deze pagina kunnen de player worden toegevoegd aan het team
              </div>
              <div className="d-flex justify-content-center align-content-center">
                <div
                  className="staf-black"
                  onClick={() => {
                    setEdit("");
                    showModal();
                  }}
                >
                  + player TCEVCEGEN
                </div>
              </div>

              {/* <Table2 data={players} handleDelete={handleDelete} /> */}
              <StickyHeadTable
                data={players}
                handleDelete={handleDelete}
                setState={setState}
                setIsModalOpen={setIsModalOpen}
                setEdit={setEdit}
                setEditId={setEditId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;
