import React from "react";

const RemoveError = () => {
  const refreshPage = () => {
    window.location.reload(true);
  };
  return (
    <div>
      <div className="prpx30 plpx30 pbpx40">
        <div className="flex justify-center">
          <img
            src="data:image/png;base64,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"
            alt="error"
            className="success-img"
          />
        </div>
        <div className="text-center">
          <h6 className="fsize21 font-500 mtpx4 mbpx1 textdark">
            Something went wrong
          </h6>
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

export default RemoveError;
