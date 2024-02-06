import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();
  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginuser = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;

    if (email === "") {
      alert("email is required!");
    } else if (!email.includes("@")) {
      alert("includes @ in your email!");
    } else if (password === "") {
      alert("password is required!");
    } else if (password.length < 6) {
      alert("password must be 6 char!");
    } else {
      const data = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await data.json();
      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/dashboard");
        setInpval({ ...inpval, email: "", password: "" });
      }
    }
  };
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll flex items-center justify-center p20">
      <div className="d-shadow rounded-10 p30 w-40">
        <h3 className="fsize25 font-600 text-center mtpx1 mbpx1 textprimary">
          Welcome Back
        </h3>
        <p className="fsize14 font-500 textforth text-center mtpx4">
          Don't have ana account
          <NavLink to="register">
            <span className="textprimary">Register</span>
          </NavLink>
        </p>
        <div className="p20">
          <div className="">
            <label className="fsize15 textforth">Email</label>
            <input
              className="w-login mtpx5 h-input fsize12 rounded-5 plpx10 border-ec"
              placeholder="Enter Email"
              type="email"
              value={inpval.email}
              onChange={setVal}
              name="email"
              id="email"
            />
          </div>
          <div className="mtpx20">
            <label className="fsize15 textforth">Password</label>
            <div className="relative">
              <input
                className="w-login mtpx5 h-input fsize12 rounded-5 plpx10 border-ec"
                placeholder="Enter Password"
                type={!passShow ? "password" : "text"}
                onChange={setVal}
                value={inpval.password}
                name="password"
                id="password"
              />
              <div
                className="absolute top-0 right-0 mtpx14 mrpx9"
                onClick={() => setPassShow(!passShow)}
              >
                {!passShow ? (
                  <>
                    <FeatherIcon className="textgray" icon="eye" size={14} />
                  </>
                ) : (
                  <>
                    <FeatherIcon
                      className="textgray"
                      icon="eye-off"
                      size={14}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="mtpx30 flex justify-center">
            <button
              className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary"
              onClick={loginuser}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
