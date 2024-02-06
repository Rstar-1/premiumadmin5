import React, { useState } from "react";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
// Pages
import AddSuccess from "../../popup/AddSuccess";
import RemoveError from "../../popup/RemoveError";

const AddSeo = () => {
  // Validation
  const [TitleError, setTitleError] = useState("");
  const [AuthorError, setAuthorError] = useState("");
  const [KeywordError, setKeywordError] = useState("");
  const [DescriptionError, setDescriptionError] = useState("");

  // Success Popup
  const [Success, setSuccess] = useState(false);

  // Error Popup
  const [Error, setError] = useState(false);

  // Add Input
  const [inpval, setInpval] = useState({
    metatitle: "",
    metaauthor: "",
    metakeyword: "",
    metadescription: "",
  });
  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  // API Call
  const addUserdata = async (e) => {
    e.preventDefault();
    // Validations
    const { metatitle, metaauthor, metakeyword, metadescription } = inpval;
    // Title
    if (metatitle === "") {
      setTitleError("Enter Title");
    } else {
      setTitleError(false);
    }
    // Author
    if (metaauthor === "") {
      setAuthorError("Enter Author");
    } else {
      setAuthorError(false);
    }
    // Keyword
    if (metakeyword === "") {
      setKeywordError("Enter Keyword");
    } else {
      setKeywordError(false);
    }
    // Description
    if (metadescription === "") {
      setDescriptionError("Enter Description");
    } else {
      setDescriptionError(false);
    }
    // Add Data
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/api/seoregister",
      data: {
        ...inpval,
      },
    });
    if (response.status === 201) {
      setSuccess(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {/* ============== Success Popup ============== */}
      {Success ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow w-30 absolute center-absolute rounded-10">
            <div className="p15">
              <div className="flex items-center justify-end gap-4">
                <FeatherIcon
                  icon="x"
                  className="textprimary cursor-pointer"
                  size={20}
                  onClick={() => setSuccess(false)}
                />
              </div>
            </div>
            <AddSuccess />
          </div>
        </div>
      ) : null}
      {/* ============== Success Popup ============== */}

      {/* ============== Error Popup ============== */}
      {Error ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow w-30 absolute center-absolute rounded-10">
            <div className="p15">
              <div className="flex items-center justify-end gap-4">
                <FeatherIcon
                  icon="x"
                  className="textprimary cursor-pointer"
                  size={20}
                  onClick={() => setError(false)}
                />
              </div>
            </div>
            <RemoveError />
          </div>
        </div>
      ) : null}
      {/* ============== Error Popup ============== */}

      <div className="mtpx6 grid-cols-1 gap-12">
        <div className="w-full">
          <label className="fsize13 textforth">Meta Title</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Title"
              type="text"
              value={inpval.metatitle}
              onChange={setVal}
              name="metatitle"
              id="metatitle"
            />
          </div>
          <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{TitleError}</p>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Meta Author</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Author"
              type="text"
              value={inpval.metaauthor}
              onChange={setVal}
              name="metaauthor"
              id="metaauthor"
            />
          </div>
          <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{AuthorError}</p>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Meta Keyword</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Keyword"
              type="text"
              value={inpval.metakeyword}
              onChange={setVal}
              name="metakeyword"
              id="metakeyword"
            />
          </div>
          <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{KeywordError}</p>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Meta Description</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Description"
              type="text"
              value={inpval.metadescription}
              onChange={setVal}
              name="metadescription"
              id="metadescription"
            />
          </div>
          <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{DescriptionError}</p>
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

export default AddSeo;
