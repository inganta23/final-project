import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const TiketItem = () => {
  return (
       <>
        <div className="shadow-lg p-4 rounded-lg bg-white mb-2">
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

          <div className="flex justify-between items-center border-y-2 border-lightGrey py-3">
            <div>
              <p className="text-base text-carbonGrey">Kode Pemesanan</p>
              <h2 className="text-carbonGrey">LM27NV</h2>
            </div>
            <div className="object-contain">
              <img src={require("../assets/img/barcode.png")} alt="barcode" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex w-[90%] justify-around items-center mb-5">
              <div className="text-center">
                <h2 className="text-orange text-xl lg:text-2xl">BD</h2>
                <h2 className="text-carbonGrey text-xl lg:text-2xl">BANDUNG</h2>
              </div>
              <MdOutlineArrowRightAlt className="text-lightGrey text-3xl lg:text-5xl" />
              <div className="text-center">
                <h2 className="text-orange text-xl lg:text-2xl">GMR</h2>
                <h2 className="text-carbonGrey text-xl lg:text-2xl">GAMBIR</h2>
              </div>
            </div>
          </div>

          <div className="flex justify-center h-11 font-bold tracking-wide">
            <button className="w-2/4 font-bold" type="submit">
              Detail
            </button>
          </div>
        
        </div>
       </>
  );
};

export default TiketItem;
