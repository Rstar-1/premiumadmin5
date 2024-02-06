import React from 'react'

const EditCrm = () => {
  return (
    <div>
      <div className="mtpx6 grid-cols-1 gap-12">
        <div className="w-full">
          <label className="fsize13 textforth">First Name</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter First Name"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Last Name</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Email</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Mobile</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Mobile"
            />
          </div>
        </div>
      </div>
      <div className="mtpx15 flex justify-center">
        <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditCrm;
