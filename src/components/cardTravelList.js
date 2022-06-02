import React from 'react';
import { CgChevronRight } from "react-icons/cg";
import logoKai from "../assets/img/logo-KAI.png";
export const CardTravelList = () => {
  return (
    <div className="shadow-lg p-4 rounded-lg cursor-pointer bg-white my-2">
      <img src={logoKai} alt="" className="w-20 mb-2" />
      <div className="flex">
        <div className="flex-1">
          <p className="text-lg uppercase text-midBlue font-bold">
            parahyangan
          </p>
          <p className="text-xs uppercase mt-1 font-light text-carbonGrey">
            Ekonomi
          </p>
          <p className="text-sm font-bold text-carbonGrey">BANDUNG (BD)</p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-lg uppercase text-midBlue font-bold">Rp. 90000</p>
          <p className="text-xs capitalize mt-1 text-green-500 font-semibold">Tersedia</p>
          <p className="text-sm font-bold text-carbonGrey">GAMBIR(GMR)</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <p className="text-2xl capitalize mt-2 text-midBlue font-bold">
            06:00
          </p>
          <p className="text-sm font-bold text-carbonGrey">17 Sep 2021</p>
        </div>
        <div className="flex-1 flex text-center flex-col mt-4 items-center">
          <p>
            <CgChevronRight className="block w-full text-lg" />
          </p>
          <p className="text-sm bold mt-1 text-carbonGrey font-light">Durasi 3J 23m</p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-2xl capitalize mt-2 text-midBlue font-bold">
            09:23
          </p>
          <p className="text-sm font-bold text-carbonGrey">17 Sep 2021</p>
        </div>
      </div>
    </div>
  );
}
