import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";
import AddProject from "./components/AddProject";

const Project = () => {
  // Sidebar UseState
  const [projectsidebar, setprojectsidebar] = useState(false);
  // API UseState Call
  const [getuserdata, setUserdata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  console.log(deltedata);
  // Search UseState Data
  const [search, setsearchdata] = useState("");
  // Pagination UseState Data
  const [pageCount, setpageCount] = useState(0);
  const [offset, setOffset] = useState(0);

  // API Call
    const getprojectdata = async () => {
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
        url: "http://localhost:8000/api/getprojectdata",
        data: payload, // Pass the payload as data in the POST request
      });

      setUserdata(response.data.data);
      setpageCount(Math.ceil(response.data.totalCount / 6));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteuser = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/deleteprojectdata/${id}`,
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
    const curoffset = page > 1 ? (page - 1) * 6 : 0;
    setOffset(curoffset);

    getprojectdata();
  };

  // Render API
  useEffect(() => {
    getprojectdata();
  }, [search]);
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      {projectsidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Add Project
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setprojectsidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <AddProject />
            </div>
          </div>
        </div>
      ) : null}

      <div className="">
        <div className="mtpx5 mbpx15 flex justify-between items-center">
          <h5 className="fsize20 textprimary mtpx1 mbpx1 font-600">Projects</h5>
          <button
            onClick={() => setprojectsidebar(true)}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 plpx25 prpx25 fsize14 bgprimary"
          >
            Add projects
          </button>
        </div>
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
        <table className="mtpx15">
          <thead>
            <tr>
              <th className="fsize13 w-30 textwhite font-300">
                <p>Name</p>
              </th>
              <th className="fsize13 w-30 textwhite font-300">
                <p>Image</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e) => (
              <tr>
                <td className="fsize13 w-30 textforth font-300">
                  <p>{e.name}</p>
                </td>
                <td className="fsize13 w-30 textforth font-300">
                  <img
                    src={e.picture}
                    className="object-contain project-image"
                  />
                </td>
                <td className="fsize13 w-20 textforth font-300">
                  <p>{new Date(e.createdAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-20 textforth font-300">
                  <NavLink to={`/editproject/${e._id}`}>
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
            pageRangeDisplayed={6}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
