import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import Select from "react-select";
import EcomStatus from "./components/EcomStatus";

const Ecommerce = () => {
  const [ecomsidebar, setecomsidebar] = useState(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      {ecomsidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Ecommerce Management
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setecomsidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <EcomStatus />
            </div>
          </div>
        </div>
      ) : null}
      <div className="">
        <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
          Ecommerce Management
        </h6>
        <div className="mtpx18 rounded-10 border-ec p20">
          <div className="mtpx5 mbpx15 flex gap-12 items-center">
            <div className="w-60">
              <div className="relative">
                <input
                  className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                  placeholder="Search"
                />
                <div className="absolute top-0 right-0 mtpx9 mrpx2">
                  <FeatherIcon
                    icon="search"
                    className="textgray cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            </div>
            <div className="w-40 mlpx15">
              <Select
                className="w-full fsize14"
                placeholder="Category"
                options={options}
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Image</p>
                </th>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Title</p>
                </th>
                <th className="fsize13 w-20 textwhite font-300">
                  <p>Description</p>
                </th>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Price</p>
                </th>
                <th className="fsize13 w-20 textwhite font-300">
                  <p>Created Date</p>
                </th>
                <th className="fsize13 w-20 textwhite font-300">
                  <p>Category</p>
                </th>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Status</p>
                </th>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Actions</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fsize13 w-10 textforth">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
                    alt="blog"
                    className="blog-img"
                  />
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>Lorem ipsum may be used</p>
                </td>
                <td className="fsize12 w-10 textforth">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text content.
                  </p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>1200/-</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>12/12/2023</p>
                </td>
                <td className="w-20 textforth">
                  <div className="flex flex-wrap gap-6 items-center">
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      Learnig
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      ecommerce
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      eLearnig
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      blog
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      new
                    </p>
                  </div>
                </td>
                <td className="fsize13 w-10 textsuccess">
                  <p className="rounded-20 fsize12 textsuccess ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-success">
                    Active
                  </p>
                </td>
                <td className="fsize13 w-10 textforth plpx15">
                  <FeatherIcon
                    onClick={() => setecomsidebar(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 w-10 textforth">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
                    alt="blog"
                    className="blog-img"
                  />
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>Lorem ipsum may be used</p>
                </td>
                <td className="fsize12 w-10 textforth">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text content.
                  </p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>1200/-</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>12/12/2023</p>
                </td>
                <td className="w-20 textforth">
                  <div className="flex flex-wrap gap-6 items-center">
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      Learnig
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      ecommerce
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      eLearnig
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      blog
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      new
                    </p>
                  </div>
                </td>
                <td className="fsize13 w-10 textsuccess">
                  <p className="rounded-20 fsize12 textsuccess ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-success">
                    Active
                  </p>
                </td>
                <td className="fsize13 w-10 textforth plpx15">
                  <FeatherIcon
                    onClick={() => setecomsidebar(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                </td>
              </tr>
              <tr>
                <td className="fsize13 w-10 textforth">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
                    alt="blog"
                    className="blog-img"
                  />
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>Lorem ipsum may be used</p>
                </td>
                <td className="fsize12 w-10 textforth">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text content.
                  </p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>1200/-</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>12/12/2023</p>
                </td>
                <td className="w-20 textforth">
                  <div className="flex flex-wrap gap-6 items-center">
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      Learnig
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      ecommerce
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      eLearnig
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      blog
                    </p>
                    <p className="rounded-20 fsize11 textwarning ptpx2 pbpx2 plpx13 prpx13 flex justify-center bg-light-warning">
                      new
                    </p>
                  </div>
                </td>
                <td className="fsize13 w-10 textsuccess">
                  <p className="rounded-20 fsize12 textsuccess ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-success">
                    Active
                  </p>
                </td>
                <td className="fsize13 w-10 textforth plpx15">
                  <FeatherIcon
                    onClick={() => setecomsidebar(true)}
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
