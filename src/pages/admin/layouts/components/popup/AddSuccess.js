import React from "react";

const AddSuccess = () => {
  const refreshPage = () => {
    window.location.reload(true);
  };
  return (
    <div>
      <div className="prpx30 plpx30 pbpx40">
        <div className="flex justify-center">
          <img
            src="data:image/png;base64,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"
            alt="success"
            className="success-img"
          />
        </div>
        <div className="text-center">
          <h6 className="fsize21 font-500 mtpx1 mbpx1 textdark">Success</h6>
          <p className="fsize13 font-500 mtpx3 textgray">
            placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content.
          </p>
          <button
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 plpx19 prpx19 mtpx15 fsize14 bgprimary"
            onClick={refreshPage}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSuccess;
