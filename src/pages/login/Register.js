import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addUserdata = async (e) => {
    e.preventDefault();
    const { fname, email, password, cpassword } = inpval;
    if (fname === "") {
      alert("fname is required!");
    } else if (email === "") {
      alert("email is required!");
    } else if (!email.includes("@")) {
      alert("includes @ in your email!");
    } else if (password === "") {
      alert("password is required!");
    } else if (password.length < 6) {
      alert("password must be 6 char!");
    } else if (cpassword === "") {
      alert("cpassword is required!");
    } else if (cpassword.length < 6) {
      alert("confirm password must be 6 char!");
    } else if (password !== cpassword) {
      alert("pass and Cpass are not matching!");
    } else {
      const data = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          password,
          cpassword,
        }),
      });
      const res = await data.json();
      if (res.status === 201) {
        alert("Registration Successfully done 😃!");
        setInpval({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
        });
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
          Don't have ana account{" "}
          <NavLink to="/login">
            <span className="textprimary">Login</span>
          </NavLink>
        </p>
        <div className="p20">
          <div className="">
            <label className="fsize15 textforth">Name</label>
            <input
              className="w-login mtpx5 h-input fsize12 rounded-5 plpx10 border-ec"
              placeholder="Enter Name"
              type="text"
              onChange={setVal}
              value={inpval.fname}
              name="fname"
              id="fname"
            />
          </div>
          <div className="mtpx10">
            <label className="fsize15 textforth">Email</label>
            <input
              className="w-login mtpx5 h-input fsize12 rounded-5 plpx10 border-ec"
              placeholder="Enter Email"
              type="email"
              onChange={setVal}
              value={inpval.email}
              name="email"
              id="email"
            />
          </div>
          <div className="mtpx10">
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
          <div className="mtpx10">
            <label className="fsize15 textforth">Confirm Password</label>
            <div className="relative">
              <input
                className="w-login mtpx5 h-input fsize12 rounded-5 plpx10 border-ec"
                placeholder="Enter Confirm Password"
                type={!cpassShow ? "password" : "text"}
                value={inpval.cpassword}
                onChange={setVal}
                name="cpassword"
                id="cpassword"
              />
              <div
                className="absolute top-0 right-0 mtpx14 mrpx9"
                onClick={() => setCPassShow(!cpassShow)}
              >
                {!cpassShow ? (
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
              onClick={addUserdata}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
