import React, { useState } from "react";
import axios from "axios";

const AddText = () => {
  const [inpval, setInpval] = useState({
    position: "",
    title: "",
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
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/api/textregister",
      data: {
        ...inpval,
      },
    });
    console.log(response.data);
    if (response.status === 201) {
      alert("Cms Submited");
      window.location.reload(true);
    } else {
      alert("Cmss Not Submitted");
    }
  };
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
              value={inpval.position}
              onChange={setVal}
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
              value={inpval.text}
              onChange={setVal}
              name="title"
              id="title"
            />
          </div>
        </div>
      </div>
      <div className="mtpx15 flex justify-center">
        <button
          className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          onClick={addUserdata}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddText;
