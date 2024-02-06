import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditReview = () => {
  // Form UseState
  const [Fullname, setFullname] = useState("");
  const [Message, setMessage] = useState("");
  // Edit UseState
  const [update, setupdate] = useState("");
  console.log(update);

  const { id } = useParams("");
  console.log(id);

  // API Call
  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getreviewsingledata/${id}`,
    });
    console.log(editresponse);
    setFullname(editresponse.data.fullname);
    setMessage(editresponse.data.message);
  };
  const editUserdata = async (e) => {
    e.preventDefault();
    const payload = {
      fullname: Fullname,
      message: Message,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updatereviewdata/${id}`,
      data: payload,
    });
    setupdate(editresponse);
  };

  // Render API
  useEffect(() => {
    getsingledata();
  }, []);

  return (
    <div>
      <div className="mtpx6 grid-cols-1 gap-12">
        <div className="w-full">
          <label className="fsize13 textforth">Name</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Name"
              type="text"
              value={Fullname}
              onChange={(e) => setFullname(e.target.value)}
              name="fullname"
              id="fullname"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Message</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Message"
              type="text"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              name="fullname"
              id="fullname"
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

export default EditReview;
