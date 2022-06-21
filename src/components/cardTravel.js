import React from 'react';
import { CgChevronRight } from "react-icons/cg";
import logoKai from "../assets/img/logo-KAI.png";
export const CardTravel = ({className, tiket}) => {
  return (
    <div className={`shadow-lg p-4 rounded-lg cursor-pointer bg-white my-2 ${className}`}>
      <img src={logoKai} alt="" className="w-20 mb-2" />
      <div className="flex">
        <div className="flex-1">
          <p className="text-lg uppercase text-midBlue font-bold">
            {tiket?.nama_kereta_api}
          </p>
          <p className="text-xs uppercase mt-1 font-light text-carbonGrey">
            {tiket?.kelas_kereta_api}
          </p>
          <p className="text-sm font-bold text-carbonGrey">{tiket?.stasiun_berangkat} ({tiket?.stasiun_berangkat_inisial})</p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-lg uppercase text-midBlue font-bold">Rp. {tiket?.harga_tiket}</p>
          <p className="text-xs capitalize mt-1 text-green-500 font-semibold">
            Tersedia
          </p>
          <p className="text-sm font-bold text-carbonGrey">{tiket?.stasiun_tujuan} ({tiket?.stasiun_tujuan_inisial})</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <p className="text-2xl capitalize mt-2 text-midBlue font-bold">
            {tiket?.waktu_berangkat}
          </p>
          <p className="text-sm font-bold text-carbonGrey"> {tiket?.tanggal_berangkat}</p>
        </div>
        <div className="flex-1 flex text-center flex-col mt-4 items-center">
          <p>
            <CgChevronRight className="block w-full text-lg" />
          </p>
          <p className="text-sm bold mt-1 text-carbonGrey font-light">
            {tiket?.durasi}
          </p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-2xl capitalize mt-2 text-midBlue font-bold">
          {tiket?.waktu_tiba}
          </p>
          <p className="text-sm font-bold text-carbonGrey"> {tiket?.tanggal_tiba}</p>
        </div>
      </div>
    </div>
  );
}
