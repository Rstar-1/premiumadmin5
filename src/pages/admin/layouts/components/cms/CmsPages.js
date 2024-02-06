import React, { useState } from "react";
import TextCms from "./components/textcms/TextCms";
import ImageCms from "./components/imagecms/ImageCms";

const CmsPages = () => {
  const [check, setcheck] = useState("01");
  const cmsOption = [
    {
      id: "01",
      name: "Text Cms",
    },
    {
      id: "02",
      name: "Image Cms",
    },
  ];
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <div className="">
        <h5 className="fsize20 textprimary mtpx1 mbpx1 font-600">
          Content management System (CMS)
        </h5>
        <div className="gap-12 items-start w-full mtpx30">
          <div className="flex items-center gap-4">
            {cmsOption.map((e) => (
              <div
                className={
                  check === e.id
                    ? "textprimary bordactive-tab prpx20 plpx20 cursor-pointer"
                    : "texdark prpx20 plpx20 cursor-pointer"
                }
                onClick={() => setcheck(e.id)}
              >
                <h3 className="fsize13 font-400 mtpx2 mbpx2">{e.name}</h3>
              </div>
            ))}
          </div>
          <div className="w-full mtpx20">
            {check === "01" ? (
              <>
                <div className="mtpx18 rounded-10 border-ec p20">
                  <TextCms />
                </div>
              </>
            ) : null}
            {check === "02" ? (
              <>
                <div className="mtpx18 rounded-10 border-ec p20">
                  <ImageCms />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsPages;
