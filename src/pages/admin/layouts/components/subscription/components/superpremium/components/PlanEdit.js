import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PlanEdit = () => {
  const [single, setSingle] = useState("");
  const [update, setupdate] = useState("");
  console.log(update);

  const { id } = useParams("");
  console.log(id);

  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getplanthirdsingledata/${id}`,
    });
    console.log(editresponse);
    setSingle(editresponse.data.plan);
  };
  const editUserdata = async (e) => {
    e.preventDefault();
    const payload = {
      plan: single,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updateplanthirddata/${id}`,
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
          <label className="fsize13 textforth">Plan</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Plan"
              type="text"
              value={single}
              onChange={(e) => setSingle(e.target.value)}
              name="plan"
              id="plan"
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

export default PlanEdit;
