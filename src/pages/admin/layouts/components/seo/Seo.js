import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
// Pages
import AddSeo from "./components/AddSeo";

const Seo = () => {
  // Seo useState Call
  const [seodata, setseodata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  // Add Sidebar
  const [seosidebar, setseosidebar] = useState(false);
  console.log(deltedata);
  // Search
  const[search, setsearch] = useState("");

  // API Call
  const getseodata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data);
  };
  const deleteseo = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/deleteseodata/${id}`,
    });
    setdeltedata(deleteres);
    if (deleteres.status === 201) {
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };

  // Render API
  useEffect(() => {
    getseodata();
  }, []);

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      {/* ========= Add Seo ========= */}
      {seosidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Add SEO
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setseosidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <AddSeo />
            </div>
          </div>
        </div>
      ) : null}
      {/* ========= Add Seo ========= */}
      <div className="">
        <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
          Search Engine Optimization (SEO)
        </h6>
        <div className="mtpx18 rounded-10 border-ec p20">
          <div className="mtpx5 mbpx15 flex gap-12 items-center">
            <div className="w-60">
              <div className="relative">
                <input
                  className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                  placeholder="Search"
                  onChange={(e) => setsearch(e.target.value)}
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
            <div className="w-40 flex justify-end">
              <button
                className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 plpx25 prpx25 fsize14 bgprimary"
                onClick={() => setseosidebar(true)}
              >
                Add SEO
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th className="fsize13 textwhite w-10 font-300">
                  <p>Id</p>
                </th>
                <th className="fsize13 textwhite w-10 font-300">
                  <p>Meta Title</p>
                </th>
                <th className="fsize13 textwhite w-10 font-300">
                  <p>Meta Author</p>
                </th>
                <th className="fsize13 textwhite w-20 font-300">
                  <p>Meta Keyword</p>
                </th>
                <th className="fsize13 textwhite w-30 font-300">
                  <p>Meta Description</p>
                </th>
                <th className="fsize13 textwhite w-10 font-300">
                  <p>Actions</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {seodata
                .filter((e) => {
                  return search.toLowerCase() === ""
                    ? e
                    : e.metatitle.toLowerCase().includes(search);
                })
                .map((e, id) => (
                  <tr>
                    <td className="fsize13 textforth w-10 font-300">
                      <p>{id + 1}</p>
                    </td>
                    <td className="fsize13 textforth w-10 font-300">
                      <p>{e.metatitle}</p>
                    </td>
                    <td className="fsize13 textforth w-10 font-300">
                      <p>{e.metaauthor}</p>
                    </td>
                    <td className="fsize13 textforth w-20 font-300">
                      <p>{e.metakeyword}</p>
                    </td>
                    <td className="fsize13 textforth w-30 font-300">
                      <p>{e.metadescription}</p>
                    </td>
                    <td className="fsize13 textforth">
                      <NavLink to={`/editseo/${e._id}`}>
                        <FeatherIcon
                          icon="edit"
                          className="textgray cursor-pointer"
                          size={15}
                        />
                      </NavLink>

                      <FeatherIcon
                        icon="trash"
                        className="textgray mlpx3 cursor-pointer"
                        size={15}
                        onClick={() => deleteseo(e._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Seo;
