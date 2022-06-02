import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const TiketItem = () => {
  return (
    <div className="bg-white w-[90%] sm:w-2/3 rounded-xl p-2 sm:p-10">
      <div className="flex mb-2 items-center">
        <div className="object-contain">
          <img
            src={require("../assets/img/logo-argo.png")}
            alt="argo"
            className="mr-2"
          />
        </div>
        <div>
          <h4 className="text-sm xs:text-base sm:text-lg text-midBlue">
            ARGO PARAHYANGAN
          </h4>
          <p className="text-sm font-light">Ekonomi - 17 Sep 2021</p>
        </div>
      </div>
      <div className="flex justify-between border-y-2 border-lightGrey py-3">
        <div>
          <p className="text-lg text-carbonGrey">Kode Pemesanan</p>
          <h2 className="text-carbonGrey">LM27NV</h2>
        </div>
        <div className="object-contain">
          <img src={require("../assets/img/barcode.png")} alt="barcode" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="flex w-[90%] md:w-1/2 justify-between items-center mb-5">
          <div>
            <h2 className="text-orange text-xl lg:text-3xl">BD</h2>
            <h2 className="text-carbonGrey text-xl lg:text-3xl">BANDUNG</h2>
          </div>
          <MdOutlineArrowRightAlt className="text-lightGrey text-3xl lg:text-5xl" />
          <div>
            <h2 className="text-orange text-xl lg:text-3xl">GMR</h2>
            <h2 className="text-carbonGrey text-xl lg:text-3xl">GAMBIR</h2>
          </div>
        </div>
        <button className="w-[90%] h-11 font-bold tracking-wide" type="submit">
          Detail
        </button>
      </div>
    </div>
  );
};

export default TiketItem;
