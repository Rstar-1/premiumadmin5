import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";

const Premium = () => {
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
  const getdata = async () => {
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
        url: "http://localhost:8000/api/getpremiumdata",
        data: payload, // Pass the payload as data in the POST request
      });

      setUserdata(response.data.data);
      setpageCount(Math.ceil(response.data.totalCount / 4));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteuser = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/deletepremiumdata/${id}`,
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
    const curoffset = page > 1 ? (page - 1) * 4 : 0;
    setOffset(curoffset);

    getdata();
  };
  const statustrue = async (e) => {
    const payload = {
      status: false,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updatepremiumdata/${e}`,
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
      url: `http://localhost:8000/api/updatepremiumdata/${e}`,
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
    getdata();
  }, [search]);

  return (
    <div className="mtpx9 p20">
      <div className="flex justify-between items-center w-full">
        <div>
          <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
            Premium User
          </h6>
          <p className="mtpx2 textgray fsize13">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to content.
          </p>
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
              <th className="fsize13 w-10 textwhite font-300">
                <p>ID</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Name</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Message</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Udated Date</p>
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
            {getuserdata.map((e, id) => (
              <tr>
                <td className="fsize13 w-10 textforth">
                  <p>{id + 1}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{e.name}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p className="line-clamp2">{e.message}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{new Date(e.createdAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{new Date(e.updatedAt).toDateString()}</p>
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
                  <NavLink to={`/editenquiry2/${e._id}`}>
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
            pageRangeDisplayed={4}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};
export default Premium;
