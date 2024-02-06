import React, { useState } from "react";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
// Pages
import AddSuccess from "../../popup/AddSuccess";
import RemoveError from "../../popup/RemoveError";

const AddProject = () => {
  // Form UseState
  const [Name, SetName] = useState("");
  const [Image, setImage] = useState(null);

  // Success Popup
  const [Success, setSuccess] = useState(false);

  // Error Popup
  const [Error, setError] = useState(false);

  // Function
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // API Call
  const addUserdata = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", Image);
    formData.append("name", Name);

    const response = await axios({
      method: "post",
      url: "http://localhost:8000/api/projectregister",
      data: formData,
    });
    console.log(response.data);
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
          <label className="fsize13 textforth">Project</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Project"
              type="text"
              onChange={(e) => SetName(e.target.value)}
              name="Project"
              id="Project"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="fsize13 textforth">Image</label>
          <div className="relative">
            <div className="border-images side-input mtpx3">
              <div className="text-center flex justify-center">
                <div>
                  <FeatherIcon icon="upload-cloud" size={35} />
                  <p className="textforth">Upload Here</p>
                </div>
              </div>
            </div>
            <input
              className="absolute top-0 left-0 img-input h-full fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter"
              type="file"
              onChange={handleFileChange}
              name="imagecms"
              id="imagecms"
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

export default AddProject;
