import React from "react";
import { NavLink } from "react-router-dom";

const Coming = () => {

  return (
    <div className="error-h w-full relative bgwhite border-d mtpx9">
      <img
        src="https://imgur.com/FkHCrdg.jpg"
        alt="error"
        className="error-h border-d w-full"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="container mx-auto">
          <div className="flex items-center error-h text-center w-full justify-center">
            <div>
              <h5 className="fsize70 sm-fsize40 mtpx1 mbpx1 textwhite"> Coming Soon</h5>
              <div className="flex justify-center mtpx20">
                <NavLink to="/home">
                  <button className="whitebtn fsize16 sm-fsize13 font-500 cursor-pointer plpx30 prpx30 sm-mtpx5 sm-ptpx10 sm-pbpx10 ptpx12 pbpx12 rounded-5">
                    back to Home
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coming;