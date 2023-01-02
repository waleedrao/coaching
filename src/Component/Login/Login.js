import React, { useState } from "react";
import NavbarCoaching from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { serverInstance } from "../../axiosInsatnce";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";
import Bottom from "../Images/bottom-bg.jpeg";
const Login = () => {
  let navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.email == "") return Swal.fire("Enter a valid email", "", "error");
    if (state.password == "")
      return Swal.fire("Enter a valid password", "", "error");

    try {
      const data = await serverInstance.post("/user/login", state);
      console.log(data, "dataaa");
      sessionStorage.setItem("token", data.data.token);
      navigate("/", { replace: true });
      Swal.fire("Login successfully", "", "success");
    } catch (err) {
      console.log(err);
      Swal.fire("Something went wrong!", "", "error");
    }
  };
  return (
    <div>
      <div className="login-bg">
        <div className="oveLay">
          <NavbarCoaching />
          <div className="login-main">
            <div className="login-title">Welkom bij Digi Coaching Unit</div>
            <div className="login-detail">
              Vul hier de logingegevens in om gerbruik te maken van Difi
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
            <div style={{ position: "relative" }}>
              <input
                type={show == true ? "text" : "password"}
                placeholder="Voer uw wachtwoord in"
                className="password"
                value={state.password}
                onChange={(e) => {
                  setState({ ...state, password: e.target.value });
                }}
              />
              {show == true ? (
                <span
                  className="eyee"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <AiOutlineEyeInvisible />
                </span>
              ) : (
                <span
                  className="eyee"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <AiOutlineEye />
                </span>
              )}
            </div>
            <div>
              <button
                className="login-button"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Log in
              </button>
            </div>
            <Link to="/forgot">
              <div className="watch-link">
                Wachtwoord vergeten?
                {/* <Link>  Wachtwoord vergeten? </Link> */}
              </div>
            </Link>

            <div className="kilk-main">
              <span
                className=""
                style={{
                  color: "white",
                }}
              >
                Heeft u nog geen account?
              </span>{" "}
              <Link to="/signup">
                {" "}
                <div className="klik-text"> Klik dan hier.</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
