import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";
import AddText from "./components/AddText";

const TextCms = () => {
  // sidebar UseState Data
  const [textsidebar, settextsidebar] = useState(false);
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
  const gettextdata = async () => {
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
        url: "http://localhost:8000/api/gettextdata",
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
      url: `http://localhost:8000/api/deletetextdata/${id}`,
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

    gettextdata();
  };

  // Render API
  useEffect(() => {
    gettextdata();
  }, [search]);

  return (
    <div className="">
      {textsidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Add Text
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => settextsidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <AddText />
            </div>
          </div>
        </div>
      ) : null}
      <div className="mtpx5 mbpx15 justify-between flex gap-12 items-center">
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
        </div>{" "}
        <button
          onClick={() => settextsidebar(true)}
          className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 plpx25 prpx25 fsize14 bgprimary"
        >
          Add Text
        </button>
      </div>
      <div className="">
        <table>
          <thead>
            <tr>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Position</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Text</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e) => (
              <tr>
                <td className="fsize13 w-20 textforth font-300">
                  <p>{e.position}</p>
                </td>
                <td className="fsize13 w-20 textforth font-300">
                  <p className="line-clamp2">{e.title}</p>
                </td>
                <td className="fsize13 w-20 textforth font-300">
                  <p>{new Date(e.createdAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-10 textforth font-300">
                  <NavLink to={`/edittext/${e._id}`}>
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

export default TextCms;
