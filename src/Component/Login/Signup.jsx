import React, { useState } from "react";
import NavbarCoaching from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { serverInstance } from "../../axiosInsatnce";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";
import Bottom from "../Images/bottom-bg.jpeg";
const Signup = () => {
  let navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  function validate_password(password) {
    let check =
      /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/;
    if (password.match(check)) {
      console.log("Your password is strong.");

      return true;
    } else {
      Swal.fire("Enter strong passwords", "", "error");
      console.log("Meh, not so much.");
      return false;
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.email == "") return Swal.fire("Enter a valid email", "", "error");
    if (state.password == "")
      return Swal.fire("Enter a valid password", "", "error");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(state.email)) {
      if (validate_password(state.password)) {
        try {
          await serverInstance.post("/user/signup", state);

          Swal.fire("Sign up successfully", "", "success");
          navigate("/");
        } catch (err) {
          console.log(err);
          Swal.fire(
            err.response.data.message || "Something went wrong!",
            "",
            "error"
          );
        }
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
              Vul hier de signup gegevens in om gerbruik te maken van Difi
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
            <div className="uppr">
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
              <div style={{ color: "white" }}>
                8 characters. Uppercase, Lowercase, number, and special
              </div>
            </div>
            <div>
              <button
                className="login-button"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Sign up
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

export default Signup;
