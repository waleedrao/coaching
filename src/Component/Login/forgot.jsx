import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { serverInstance } from "../../axiosInsatnce";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import NavbarCoaching from "../Navbar/Navbar";
const Forgot = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "" });
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.email == "") return Swal.fire("Enter a valid email", "", "error");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(state.email)) {
      try {
        const data = await serverInstance.put("/user/forgot", state);
        console.log(data, "dataaa");

        Swal.fire("email sent successfully", "", "success");
        navigate(
          "/reset",
          {
            state: {
              email: state.email,
            },
          },
          { replace: true }
        );
      } catch (err) {
        console.log(err);
        Swal.fire(err.response.data.message, "", "error");
      }
    } else return Swal.fire("Enter a valid Email", "", "error");
  };
  return (
    <div>
      <div className="login-bg">
        <div className="oveLay">
          <NavbarCoaching />
          <div className="login-main">
            <div className="login-title">Welkom bij Digi Coaching Unit</div>
            <div className="login-detail">
              Vul hier de forgot gegevens in om gerbruik te maken van Difi
              Coaching Unit!
            </div>

            <div className="">
              <input
                placeholder="Voer uw emailadres in"
                value={state.email}
                onChange={(e) => {
                  setState({ ...state, email: e.target.value });
                }}
                className="email"
              />
            </div>

            <div>
              <button
                className="login-button"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                reset
              </button>
            </div>

            <div className="kilk-main">
              <Link to="/">
                {" "}
                <div className="klik-text">log in</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
