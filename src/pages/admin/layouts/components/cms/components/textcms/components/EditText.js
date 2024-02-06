import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditText = () => {
  const [Position, setPosition] = useState("");
  const [Title, setTitle] = useState("");
  const [update, setupdate] = useState("");
  console.log(update);

  const { id } = useParams("");
  console.log(id);

  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/gettextsingledata/${id}`,
    });
    console.log(editresponse);
    setPosition(editresponse.data.position);
    setTitle(editresponse.data.title);
  };
  const editUserdata = async (e) => {
    e.preventDefault();
    const payload = {
      position: Position,
      title: Title,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updatetextdata/${id}`,
      data: payload,
    });
    setupdate(editresponse);
  };
  useEffect(() => {
    getsingledata();
  }, []);
  return (
    <div>
      <div className="mtpx6 grid-cols-1 gap-12">
        <div className="w-full">
          <label className="fsize13 textforth">Position</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Position"
              type="text"
              value={Position}
              onChange={(e) => setPosition(e.target.value)}
              name="position"
              id="position"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Text</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Text"
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              id="title"
            />
          </div>
        </div>
      </div>
      <div className="mtpx15 flex justify-center">
        <button
          className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          onClick={editUserdata}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditText;
