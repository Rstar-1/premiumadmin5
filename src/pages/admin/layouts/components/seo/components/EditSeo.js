import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import side from "../../../../../../assets/bed.png"

const EditSeo = () => {
  // Navigation
  const history = useNavigate();

  // Input Data
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Keyword, setKeyword] = useState("");
  const [Description, setDescription] = useState("");

  // Update Data
  const [update, setupdate] = useState("");
  console.log(update);

  // Use ID
  const { id } = useParams("");
  console.log(id);

  //API Call
  const singleseodata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getseosingledata/${id}`,
    });
    console.log(editresponse);
    setTitle(editresponse.data.metatitle);
    setAuthor(editresponse.data.metaauthor);
    setKeyword(editresponse.data.metakeyword);
    setDescription(editresponse.data.metadescription);
  };
  const editUserdata = async (e) => {
    e.preventDefault();
    const payload = {
      metatitle: Title,
      metaauthor: Author,
      metakeyword: Keyword,
      metadescription: Description,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updateseodata/${id}`,
      data: payload,
    });
    setupdate(editresponse);
    if (editresponse.status === 201) {
      history("/seo");
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };

  // Render API
  useEffect(() => {
    singleseodata();
  }, []);

  return (
    <div className="relative bgwhite border-d mtpx9 cust-scroll p20">
      <div className="">
        <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
          Edit Search Engine Optimization
        </h6>
        <div className="mtpx20 grid-cols-1 w-60 gap-12">
          <div className="w-full">
            <label className="fsize13 textforth">Meta Title</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Title"
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                name="metatitle"
                id="metatitle"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Meta Author</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Author"
                type="text"
                value={Author}
                onChange={(e) => setAuthor(e.target.value)}
                name="metaauthor"
                id="metaauthor"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Meta Keyword</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Keyword"
                type="text"
                value={Keyword}
                onChange={(e) => setKeyword(e.target.value)}
                name="metakeyword"
                id="metakeyword"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Meta Description</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Description"
                type="text"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                name="metadescription"
                id="metadescription"
              />
            </div>
          </div>
        </div>
        <div className="mtpx20">
          <button
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx7 pbpx7 plpx25 prpx25 fsize13 bgprimary"
            onClick={editUserdata}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 mrpx9">
        <img src={side} alt="side" className="side-img object-contain" />
      </div>
    </div>
  );
};

export default EditSeo;
