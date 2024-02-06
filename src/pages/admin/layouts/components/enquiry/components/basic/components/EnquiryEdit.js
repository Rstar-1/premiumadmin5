import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EnquiryEdit = () => {
  const history = useNavigate();
  const [EnquiryName, setEnquiryName] = useState("");
  const [Message, setMessage] = useState("");

  const [update, setupdate] = useState("");
  console.log(update);

  const { id } = useParams("");
  console.log(id);

  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getbasicsingledata/${id}`,
    });
    console.log(editresponse);
    setEnquiryName(editresponse.data.name);
    setMessage(editresponse.data.message);
  };

  const editUserdata = async (e) => {
    e.preventDefault();
    const payload = {
      name: EnquiryName,
      message: Message,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updatebasicdata/${id}`,
      data: payload,
    });
    setupdate(editresponse);
    if (editresponse.status === 201) {    
      history("/enquiry");
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };
  
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
              value={EnquiryName}
              onChange={(e) => setEnquiryName(e.target.value)}
              name="EnquiryName"
              id="EnquiryName"
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
              name="Message"
              id="Message"
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

export default EnquiryEdit;
