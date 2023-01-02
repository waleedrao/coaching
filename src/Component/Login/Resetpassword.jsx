import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { serverInstance } from "../../axiosInsatnce";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import NavbarCoaching from "../Navbar/Navbar";
const Resetpassword = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState({
    email: location.state.email,
    code: "",
    password: "",
  });
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
    if (state.code == "") return Swal.fire("Enter a otp code", "", "error");
    if (state.password == "")
      return Swal.fire("Enter a strong password", "", "error");
    if (validate_password(state.password)) {
      try {
        const data = await serverInstance.put("/user/reset", state);
        console.log(data, "dataaa");

        navigate("/login", { replace: true });
        Swal.fire("Password changed", "", "success");
      } catch (err) {
        console.log(err);
        Swal.fire(err.response.data.message, "", "error");
      }
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
              Vul hier de Reset password gegevens in om gerbruik te maken van
              Difi Coaching Unit!
            </div>

            <div className="">
              <input
                placeholder="code"
                value={state.code}
                onChange={(e) => {
                  setState({ ...state, code: e.target.value });
                }}
                className="email"
              />
            </div>
            <div>
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
                Create
              </button>
            </div>

            <div className="kilk-main">
              <Link to="/login">
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

export default Resetpassword;
