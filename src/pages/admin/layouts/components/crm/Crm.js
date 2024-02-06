import React, { useState,useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import Select from "react-select";
import EditCrm from "./components/EditCrm";

const Crm = () => {
  const [editcrm, seteditcrm] = useState(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const getdata = async () => {
    const res = await fetch("http://localhost:8000/api/getloginuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      {editcrm ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Edit CRM
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => seteditcrm(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <EditCrm />
            </div>
          </div>
        </div>
      ) : null}
      <div className="">
        <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
          Customer relationship management (CRM)
        </h6>
        <div className="mtpx18 rounded-10 border-ec p20">
          <div className="mtpx5 mbpx15 flex gap-12 items-center">
            <div className="w-60">
              <div className="relative">
                <input
                  className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                  placeholder="Search"
                />
                <div className="absolute top-0 right-0 mtpx9 mrpx2">
                  <FeatherIcon
                    icon="search"
                    className="textgray cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            </div>
            <div className="w-40 mlpx15">
              <Select
                className="w-full fsize14"
                placeholder="Role"
                options={options}
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th className="fsize13 textwhite font-300">
                  <p>First Name</p>
                </th>
                <th className="fsize13 textwhite font-300">
                  <p>Last Name</p>
                </th>
                <th className="fsize13 textwhite font-300">
                  <p>Email</p>
                </th>
                <th className="fsize13 textwhite font-300">
                  <p>Mobile</p>
                </th>
                <th className="fsize13 textwhite font-300">
                  <p>Role</p>
                </th>
                <th className="fsize13 textwhite font-300">
                  <p>Actions</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fsize13 textforth">
                  <p>Raj</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Shetye</p>
                </td>
                <td className="fsize13 textforth">
                  <p>abcd@gmail.com</p>
                </td>
                <td className="fsize13 textforth">
                  <p>9807654321</p>
                </td>
                <td className="fsize13 textsuccess">
                  <p className="rounded-20 fsize12 ptpx3 pbpx3 w-max plpx15 prpx15 bg-light-success">
                    Admin
                  </p>
                </td>
                <td className="fsize13 textforth plpx15">
                  <FeatherIcon
                    onClick={() => seteditcrm(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 textforth">
                  <p>Aman</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Shukla</p>
                </td>
                <td className="fsize13 textforth">
                  <p>abcd@gmail.com</p>
                </td>
                <td className="fsize13 textforth">
                  <p>9807654321</p>
                </td>
                <td className="fsize13 textprimary">
                  <p className="rounded-20 fsize12 ptpx3 pbpx3 w-max plpx15 prpx15 bg-light-primary">
                    Blog User
                  </p>
                </td>
                <td className="fsize13 textforth plpx15">
                  <FeatherIcon
                    onClick={() => seteditcrm(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 textforth">
                  <p>Aman</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Shukla</p>
                </td>
                <td className="fsize13 textforth">
                  <p>abcd@gmail.com</p>
                </td>
                <td className="fsize13 textforth">
                  <p>9807654321</p>
                </td>
                <td className="fsize13 textwarning">
                  <p className="rounded-20 fsize12 ptpx3 pbpx3 w-max plpx15 prpx15 bg-light-warning">
                    Elearning User
                  </p>
                </td>
                <td className="fsize13 textforth plpx15">
                  <FeatherIcon
                    onClick={() => seteditcrm(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 textforth">
                  <p>Aman</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Shukla</p>
                </td>
                <td className="fsize13 textforth">
                  <p>abcd@gmail.com</p>
                </td>
                <td className="fsize13 textforth">
                  <p>9807654321</p>
                </td>
                <td className="fsize13 textdanger">
                  <p className="rounded-20 fsize12 ptpx3 pbpx3 w-max plpx15 prpx15 bg-light-danger">
                    Ecommerce User
                  </p>
                </td>
                <td className="fsize13 textforth plpx15">
                  <FeatherIcon
                    onClick={() => seteditcrm(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 textforth">
                  <p>Aman</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Shukla</p>
                </td>
                <td className="fsize13 textforth">
                  <p>abcd@gmail.com</p>
                </td>
                <td className="fsize13 textforth">
                  <p>9807654321</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Member</p>
                </td>
                <td className="fsize13 textforth plpx15">
                  <FeatherIcon
                    onClick={() => seteditcrm(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 textforth">
                  <p>Aman</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Shukla</p>
                </td>
                <td className="fsize13 textforth">
                  <p>abcd@gmail.com</p>
                </td>
                <td className="fsize13 textforth">
                  <p>9807654321</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Member</p>
                </td>
                <td className="fsize13 textforth plpx15">
                  <FeatherIcon
                    onClick={() => seteditcrm(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 textforth">
                  <p>Aman</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Shukla</p>
                </td>
                <td className="fsize13 textforth">
                  <p>abcd@gmail.com</p>
                </td>
                <td className="fsize13 textforth">
                  <p>9807654321</p>
                </td>
                <td className="fsize13 textforth">
                  <p>Member</p>
                </td>
                <td className="fsize13 textforth plpx15">
                  <FeatherIcon
                    onClick={() => seteditcrm(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crm;
