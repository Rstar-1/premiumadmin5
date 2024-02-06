import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";
import PlanAdd from "./components/PlanAdd";

const SuperPremiumPlans = () => {
  // sidebar UseState Data
  const [plansidebar, setplansidebar] = useState(false);
  // API UseState Data
  const [getuserdata, setUserdata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  console.log(deltedata);
  // Search UseState Data
  const [search, setsearchdata] = useState("");
  // Pagination UseState Data
  const [pageCount, setpageCount] = useState(0);
  const [offset, setOffset] = useState(0);

  // API Call
  const getplandata = async () => {
    const payload = {};
    if (search) {
      Object.assign(payload, { search: search });
    }
    if (offset) {
      Object.assign(payload, { offset: offset });
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/api/getplanthirddata",
        data: payload, // Pass the payload as data in the POST request
      });

      setUserdata(response.data.data);
      setpageCount(Math.ceil(response.data.totalCount / 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteuser = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/deleteplanthirddata/${id}`,
    });
    setdeltedata(deleteres);
    console.log(deleteres, "delete");
    if (deleteres.status === 201) {
      alert("delete data");
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };

  // Function
  const handlePageClick = (event) => {
    console.log(event, "handle");
    let page = event.selected + 1;
    const curoffset = page > 1 ? (page - 1) * 10 : 0;
    setOffset(curoffset);

    getplandata();
  };
  const statustrue = async (e) => {
    const payload = {
      status: false,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updateplanthirddata/${e}`,
      data: payload,
    });
    //setupdate(editresponse);
    if (editresponse.status === 201) {
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };
  const statusfalse = async (e) => {
    const payload = {
      status: true,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updateplanthirddata/${e}`,
      data: payload,
    });
    //setupdate(editresponse);
    if (editresponse.status === 201) {
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };

  // Render API
  useEffect(() => {
    getplandata();
  }, [search]);

  return (
    <div className="mtpx9 p20">
      {plansidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Add Plan
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setplansidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <PlanAdd />
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center w-full">
        <div>
          <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
            Super Premium Plan
          </h6>
          <p className="mtpx2 textgray fsize13">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to content.
          </p>
        </div>
        <div>
          <button
            onClick={() => setplansidebar(true)}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 plpx25 prpx25 fsize14 bgprimary"
          >
            Add Plan
          </button>
        </div>
      </div>

      <div className="mtpx18 rounded-10 border-ec p20">
        <div className="mtpx5 mbpx15 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
                onChange={(e) => setsearchdata(e.target.value)}
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
        </div>
        <table>
          <thead>
            <tr>
              <th className="fsize13 w-40 textwhite font-300">
                <p>Plan Name</p>
              </th>
              <th className="fsize13 w-30 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Status</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e) => (
              <tr>
                <td className="fsize13 w-40 textforth">
                  <p>{e.plan}</p>
                </td>
                <td className="fsize13 w-30 textforth">
                  <p>{new Date(e.createdAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  {e.status === true ? (
                    <>
                      {" "}
                      <p
                        onClick={() => statustrue(e._id)}
                        className="cursor-pointer"
                      >
                        true
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        onClick={() => statusfalse(e._id)}
                        className="cursor-pointer"
                      >
                        false
                      </p>
                    </>
                  )}
                </td>
                <td className="fsize13 w-10 textforth plpx15">
                  <NavLink to={`/editplan/${e._id}`}>
                    {" "}
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={16}
                    />
                  </NavLink>

                  <FeatherIcon
                    onClick={() => deleteuser(e._id)}
                    icon="trash"
                    className="textgray mlpx4 cursor-pointer"
                    size={16}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex w-full justify-end">
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};
export default SuperPremiumPlans;
