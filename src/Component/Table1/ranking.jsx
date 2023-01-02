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
const Ranking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState("");
  const [user, setUser] = useState(null);
  const [ranking, setRanking] = useState(null);
  const [state, setState] = useState({
    club: "",
    played: "",
    won: "",
    drawn: "",
    lost: "",
    gf: "",
    ga: "",
    gd: "",
    points: "",
    form: "",
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
        .get(`/ranking/findAll/${user?._id}`)
        .then((res) => {
          setRanking(res.data);
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
        state.club === "" ||
        state.played === "" ||
        state.won === "" ||
        state.drawn === "" ||
        state.lost === "" ||
        state.gf === "" ||
        state.ga === "" ||
        state.gd === "" ||
        state.points === "" ||
        state.form === ""
      ) {
        Swal.fire("Fill all the fields", "", "error");
      } else {
        serverInstance
          .put(`/ranking/edit/${editId}`, { state })
          .then((res) => {
            setIsModalOpen(false);
            setState({
              club: "",
              played: "",
              won: "",
              drawn: "",
              lost: "",
              gf: "",
              ga: "",
              gd: "",
              points: "",
              form: "",
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
        state.club === "" ||
        state.played === "" ||
        state.won === "" ||
        state.drawn === "" ||
        state.lost === "" ||
        state.gf === "" ||
        state.ga === "" ||
        state.gd === "" ||
        state.points === "" ||
        state.form === ""
      ) {
        Swal.fire("Fill all the fields", "", "error");
      } else {
        serverInstance
          .post("/ranking/add", { state })
          .then((res) => {
            setRanking(res.data.ranking);
            setIsModalOpen(false);
            setState({
              club: "",
              played: "",
              won: "",
              drawn: "",
              lost: "",
              gf: "",
              ga: "",
              gd: "",
              points: "",
              form: "",
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
    serverInstance
      .delete(`/ranking/delete/${id}`)
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
                  <div className="labe">Club</div>
                  <input
                    className="label_input"
                    value={state.club}
                    onChange={(e) => {
                      setState({ ...state, club: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Played</div>
                  <input
                    className="label_input"
                    value={state.played}
                    onChange={(e) => {
                      setState({ ...state, played: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Won</div>
                  <input
                    className="label_input"
                    value={state.won}
                    onChange={(e) => {
                      setState({ ...state, won: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Drawn</div>
                  <input
                    className="label_input"
                    value={state.drawn}
                    onChange={(e) => {
                      setState({ ...state, drawn: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Lost</div>
                  <input
                    className="label_input"
                    value={state.lost}
                    onChange={(e) => {
                      setState({ ...state, lost: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Gf</div>
                  {/* <select
                    name="pets"
                    className="label_input"
                    value={state.gf}
                    onChange={(e) => {
                      setState({ ...state, gf: e.target.value });
                    }}
                  >
                    <option value="" disabled>
                      --Please choose a sex--
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-Binary">Non binary</option>
                    <option value="other">Other</option>
                  </select> */}
                  <input
                    className="label_input"
                    value={state.gf}
                    onChange={(e) => {
                      setState({ ...state, gf: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Ga</div>
                  <input
                    className="label_input"
                    value={state.ga}
                    type="text"
                    onChange={(e) => {
                      setState({ ...state, ga: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">Gd</div>
                  <input
                    className="label_input"
                    type="number"
                    value={state.gd}
                    onChange={(e) => {
                      setState({ ...state, gd: e.target.value });
                    }}
                  />
                </div>

                <div className="holdalltogather">
                  <div className="labe">Points</div>
                  <input
                    type="number"
                    className="label_input"
                    value={state.points}
                    onChange={(e) => {
                      setState({ ...state, points: e.target.value });
                    }}
                  />
                </div>
                <div className="holdalltogather">
                  <div className="labe">form</div>
                  <input
                    type="text"
                    className="label_input"
                    value={state.form}
                    onChange={(e) => {
                      setState({ ...state, form: e.target.value });
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
                + ranking TCEVCEGEN
              </div>
            </div>

            {/* <Table2 data={players} handleDelete={handleDelete} /> */}
            {ranking && (
              <RankingTable
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

export default Ranking;
