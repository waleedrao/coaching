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
import RankingTable from "./rankingTable";
import PlayerStatTable from "./playerStatTable";
const PlayerStat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [edit, setEdit] = useState("");
  const [editTable, setEditTable] = useState("");
  const [editTableId, setEditTableId] = useState("");
  const [editId, setEditId] = useState("");
  const [user, setUser] = useState(null);
  const [ranking, setRanking] = useState(null);
  const [rankingTable, setRankingTable] = useState(null);
  const [tbt, setTbt] = useState(null);
  const [state, setState] = useState({
    name: "",
    goals: "",
    assists: "",
    yellowCard: "",
    redCard: "",
    matches: "",
    minutes: "",
    playerTable: "",
    user: "",
  });
  const [stateTable, setStateTable] = useState({
    user: "",
    name: "",
  });
  useEffect(() => {
    const userAccess = sessionStorage?.getItem("token");
    const user = jwt(userAccess);
    console.log("userAccess", user);
    setUser(user);
    setStateTable({ ...stateTable, user: user._id });
    setState({ ...state, user: user._id });
  }, []);
  useEffect(() => {
    user &&
      serverInstance
        .get(`/playerStatTable/findAll/${user?._id}`)
        .then((res) => {
          setRankingTable(res.data.rankingTable);
          setTbt(res.data.rankingTable[0]);
          setRanking(res.data.ranking);
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
        state.name === "" ||
        state.goals === "" ||
        state.assists === "" ||
        state.yellowCard === "" ||
        state.redCard === "" ||
        state.matches === "" ||
        state.minutes === ""
      ) {
        Swal.fire("Fill all the fields", "", "error");
      } else {
        serverInstance
          .put(`/playerStat/edit/${editId}`, { state })
          .then((res) => {
            setIsModalOpen(false);
            setState({
              name: "",
              goals: "",
              assists: "",
              yellowCard: "",
              redCard: "",
              matches: "",
              minutes: "",
              playerTable: "",
              user: user._id,
            });
            Swal.fire("Updated successfully", "", "success");
            setRanking(res.data.ranking);
            console.log(res, "get res updated", res.data);
          })
          .catch((err) => {
            console.log("err", err);
            Swal.fire("Something went wrong!", "", "error");
          });
      }
    } else {
      if (
        state.name === "" ||
        state.goals === "" ||
        state.assists === "" ||
        state.yellowCard === "" ||
        state.redCard === "" ||
        state.matches === "" ||
        state.minutes === ""
      ) {
        Swal.fire("Fill all the fields", "", "error");
      } else {
        serverInstance
          .post("/playerStat/add", { state })
          .then((res) => {
            setRanking(res.data.ranking);
            setIsModalOpen(false);
            setState({
              name: "",
              goals: "",
              assists: "",
              yellowCard: "",
              redCard: "",
              matches: "",
              minutes: "",
              playerTable: "",
              user: user._id,
            });
            console.log(res, "res.data.players", res.data.ranking);
            Swal.fire("Ranking added successfully", "", "success");
          })
          .catch((err) => {
            console.log("err", err);
            Swal.fire("Something went wrong!", "", "error");
          });
      }
    }
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        serverInstance
          .delete(`/playerStat/delete/${id}`)
          .then((res) => {
            setRanking(
              ranking.filter((data) => data._id !== res.data.deletedRanking)
            );
            Swal.fire("Ranking deleted successfully", "", "success");
            console.log(res, "get res", res.data);
          })
          .catch((err) => {
            console.log("err", err);
            Swal.fire("Something went wrong!", "", "error");
          });
      }
    });
  };
  const handleDeleteTable = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let rna = rankingTable.filter((data) => data._id !== id);
        console.log(rna, "ffff");

        serverInstance
          .get(`/playerStat/findAll/${user?._id}/${rna[0]?._id}`)
          .then((res) => {
            setRanking(res.data);
            console.log(res, "get res", res.data);
          })
          .catch((err) => {
            console.log("err", err);
          });
        serverInstance
          .delete(`/playerStatTable/delete/${id}`)
          .then((res) => {
            setRankingTable(
              rankingTable.filter(
                (data) => data._id !== res.data.deletedRanking
              )
            );
            Swal.fire("Ranking deleted successfully", "", "success");
            console.log(res, "get res", res.data);
          })
          .catch((err) => {
            console.log("err", err);
            Swal.fire("Something went wrong!", "", "error");
          });
      }
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
        <SideApp />
        <div className="d d">
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
                  <div className="labe">Name</div>
                  <input
                    className="label_input"
                    value={state.name}
                    onChange={(e) => {
                      setState({ ...state, name: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Goals</div>
                  <input
                    className="label_input"
                    value={state.goals}
                    onChange={(e) => {
                      setState({ ...state, goals: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Assists</div>
                  <input
                    className="label_input"
                    value={state.assists}
                    onChange={(e) => {
                      setState({ ...state, assists: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">YellowCard</div>
                  <input
                    className="label_input"
                    value={state.yellowCard}
                    onChange={(e) => {
                      setState({ ...state, yellowCard: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">RedCard</div>
                  <input
                    className="label_input"
                    value={state.redCard}
                    onChange={(e) => {
                      setState({ ...state, redCard: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Matches</div>

                  <input
                    className="label_input"
                    value={state.matches}
                    onChange={(e) => {
                      setState({ ...state, matches: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Minutes</div>
                  <input
                    className="label_input"
                    value={state.minutes}
                    type="text"
                    onChange={(e) => {
                      setState({ ...state, minutes: e.target.value });
                    }}
                  />
                </div>

                <div className="holdalltogather">
                  <div className="labe">Table</div>

                  <select
                    name="pets"
                    className="label_input"
                    value={state.playerTable}
                    onChange={(e) => {
                      setState({ ...state, playerTable: e.target.value });
                    }}
                  >
                    <option value="" disabled>
                      --Please choose a Table--
                    </option>
                    {rankingTable?.length === 0 ? (
                      <option value="" disabled>
                        No table created yet
                      </option>
                    ) : (
                      rankingTable?.map((data) => {
                        return <option value={data._id}>{data.name}</option>;
                      })
                    )}
                  </select>
                </div>
              </div>
              <div className="topSubmit">
                <div className="buttondiv" onClick={handleSubmit}>
                  {edit == "edit" ? "Update" : "Submit"}
                </div>
              </div>
            </Modal>
            <Modal
              title="Add new Table"
              open={isModal}
              onOk={() => {
                setIsModal(false);
              }}
              footer={false}
              onCancel={() => {
                setIsModal(false);
              }}
            >
              <div className="mainInputs">
                <div className="holdalltogather">
                  <div className="labe">Name</div>
                  <input
                    className="label_input"
                    value={stateTable.name}
                    onChange={(e) => {
                      setStateTable({ ...stateTable, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="topSubmit">
                <div
                  className="buttondiv"
                  onClick={() => {
                    if (stateTable.name !== "") {
                      if (editTable == "edit") {
                        serverInstance
                          .put(`/playerStatTable/edit/${editTableId}`, {
                            stateTable,
                          })
                          .then((res) => {
                            setIsModal(false);

                            setStateTable({
                              user: user._id,
                              name: "",
                            });
                            setEditTable("");
                            setRankingTable(res.data.ranking);
                            Swal.fire(
                              "Player statistic table updated successfully",
                              "",
                              "success"
                            );
                          })
                          .catch((err) => {
                            console.log("err", err);
                            Swal.fire("Something went wrong!", "", "error");
                          });
                      } else {
                        serverInstance
                          .post("/playerStatTable/add", { stateTable })
                          .then((res) => {
                            setRankingTable(res.data.rankingTab);

                            setStateTable({
                              user: user._id,
                              name: "",
                            });
                            console.log(
                              res,
                              "res.data.players",
                              res.data.rankingTab
                            );
                            Swal.fire(
                              "Player statistic added successfully",
                              "",
                              "success"
                            );
                          })
                          .catch((err) => {
                            console.log("err", err);
                            Swal.fire("Something went wrong!", "", "error");
                          });
                      }
                    } else {
                      Swal.fire("Fill table name", "", "error");
                    }
                  }}
                >
                  {editTable == "edit" ? "Update" : "Submit"}
                </div>
              </div>
            </Modal>
            <div className="table-titel">Welkom bij de player Statics</div>
            <div className="table-detail">
              Op deze pagina kunnen de player worden toegevoegd aan het team
            </div>
            <div className="d-flex justify-content-center align-content-center">
              <div
                className="staf-black"
                onClick={() => {
                  setIsModal(true);
                }}
              >
                + Player statistic table
              </div>
            </div>
            <div
              className="d-flex justify-content-center flex-column align-items-center"
              style={{ width: "100%", marginBottom: "30px" }}
            >
              {rankingTable?.map((data) => {
                return (
                  <div className="tableeee">
                    <div>{data.name}</div>{" "}
                    <div className="d-flex">
                      <div
                        className="tableBY"
                        onClick={() => {
                          setIsModal(true);
                          setEditTableId(data._id);
                          setEditTable("edit");
                          setStateTable({ ...stateTable, name: data.name });
                        }}
                      >
                        Edit{" "}
                      </div>
                      <div
                        className="tableBY"
                        onClick={() => {
                          handleDeleteTable(data._id);
                        }}
                      >
                        {" "}
                        Delete
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center">
              {" "}
              <div
                className="staf-black"
                onClick={() => {
                  setEdit("");
                  showModal();
                }}
              >
                + ranking TCEVCEGEN
              </div>
            </div>
            <div style={{ color: "white" }}>Please choose a Table</div>
            <select
              name="pets"
              style={{ minWidth: "150px" }}
              className="label_input"
              value={tbt}
              onChange={(e) => {
                setTbt(e.target.value);
                serverInstance
                  .get(`/ranking/findAll/${user?._id}/${e.target.value}`)
                  .then((res) => {
                    setRanking(res.data);
                    console.log(res, "get res", res.data);
                  })
                  .catch((err) => {
                    console.log("err", err);
                  });
              }}
            >
              {rankingTable?.length === 0 ? (
                <option value="" disabled>
                  No table created yet
                </option>
              ) : (
                <>
                  <option value="" disabled>
                    --Please choose a Table--
                  </option>
                  {rankingTable?.map((data) => {
                    return <option value={data._id}>{data.name}</option>;
                  })}
                </>
              )}
            </select>

            {/* <Table2 data={players} handleDelete={handleDelete} /> */}
            {ranking && (
              <PlayerStatTable
                data={ranking}
                handleDelete={handleDelete}
                setState={setState}
                setIsModalOpen={setIsModalOpen}
                setEdit={setEdit}
                setEditId={setEditId}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStat;
