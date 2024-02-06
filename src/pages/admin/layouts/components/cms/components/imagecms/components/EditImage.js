import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const EditImage = () => {
  const [Position, StepPosition] = useState("");
  const [image, SetImage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const [File, setFile] = useState(null);

  const { id } = useParams("");
  console.log(id);

  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getimagesingledata/${id}`,
    });
    StepPosition(editresponse.data.position);
    SetImage(editresponse.data.picture);
  };

  const editUserdata = async (e) => {
    e.preventDefault();
    const formData = new FormData();
     if (File) {
       formData.append("image", File);
     }
    formData.append("position", Position);
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updateimagedata/${id}`,
      data: formData,
    });
    if (editresponse.status === 201) {
      alert("completeda");
    } else {
      alert("Category Not Submitted");
    }
  };

  useEffect(() => {
    getsingledata();
  }, []);

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Update Blogs</h6>
      <p className="mtpx2 textgray fsize13">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to content.
      </p>
      <div className="mtpx18">
        <div className="grid-cols-1 w-60 gap-12">
          <div className="w-full">
            <label className="fsize13 textforth">Position</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Position"
                type="text"
                value={Position}
                onChange={(e) => StepPosition(e.target.value)}
                name="position"
                id="position"
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
                name="img"
                id="img"
              />
            </div>
            <img
              src={image}
              alt="new"
              className="object-contain mtpx10 bg-fa cms-edit-img"
              crossOrigin="true"
            />
          </div>
        </div>
        <div className="mtpx15">
          <button
            onClick={editUserdata}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditImage;
