import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlanAdd = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    plan: "",
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
      url: "http://localhost:8000/api/plansregister",
      data: {
        ...inpval,
      },
    });
    console.log(response.data);
    if (response.status === 201) {
       alert("Plan Submited");
       window.location.reload(true);
    } else {
     alert("Plans Not Submitted");
    }
  };
  return (
    <div>
      <div className="mtpx6 grid-cols-1 gap-12">
        <div className="w-full">
          <label className="fsize13 textforth">Add Plans</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Plan"
              type="text"
              value={inpval.plan}
              onChange={setVal}
              name="plan"
              id="plan"
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

export default PlanAdd;
