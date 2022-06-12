import React from 'react';
import { CgChevronRight } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import logoKai from "../assets/img/logo-KAI.png";

export const CardTravel = ({className, setTicketDetailsId, ticketId, kotaAsal, waktuBerangkat, kotaTujuan, waktuTiba, namaKereta, harga}) => {
  const months = ["January", "February", "Maret", "April", "May", "Juni", "Juli", "Agustus", "September", "October", "November", "December"];
  const navigate = useNavigate();

  const handleDetail = () =>{
    setTicketDetailsId(ticketId);
    navigate('/details');
  }
  return (
    <div className={`shadow-lg p-4 rounded-lg cursor-pointer bg-white my-2 ${className}`} onClick={handleDetail}>
      <img src={logoKai} alt="" className="w-20 mb-2" />
      <div className="flex">
        <div className="flex-1">
          <p className="text-lg uppercase text-midBlue font-bold">
            {namaKereta}
          </p>
          <p className="text-xs uppercase mt-1 font-light text-carbonGrey">
            Ekonomi
          </p>
          <p className="text-sm font-bold text-carbonGrey">{kotaAsal}</p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-lg uppercase text-midBlue font-bold">Rp. {harga}</p>
          <p className="text-xs capitalize mt-1 text-green-500 font-semibold">
            Tersedia
          </p>
          <p className="text-sm font-bold text-carbonGrey">{kotaTujuan}</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <p className="text-2xl capitalize mt-2 text-midBlue font-bold">
            {waktuBerangkat?.getHours() > 9 ? `${waktuBerangkat.getHours()}:00` : `0${waktuBerangkat.getHours()}:00`}
          </p>
          <p className="text-sm font-bold text-carbonGrey">{waktuBerangkat.getDate()+` ${months[waktuBerangkat.getMonth()]} ${waktuBerangkat.getFullYear()}`}</p>
        </div>
        <div className="flex-1 flex text-center flex-col mt-4 items-center">
          <p>
            <CgChevronRight className="block w-full text-lg" />
          </p>
          <p className="text-sm bold mt-1 text-carbonGrey font-light">
            Durasi 3J 23m
          </p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-2xl capitalize mt-2 text-midBlue font-bold">
            {waktuTiba?.getHours() > 9 ? `${waktuTiba.getHours()}:00` : `0${waktuTiba.getHours()}:00`}
          </p>
          <p className="text-sm font-bold text-carbonGrey">{waktuTiba.getDate()+` ${months[waktuTiba.getMonth()]} ${waktuTiba.getFullYear()}`}</p>
        </div>
      </div>
    </div>
  );
}
