import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTicketAlt, FaHistory } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import jwtDecode from "jwt-decode";

const Navbar = ({ dataUser }) => {

  const handleActiveNav = (elm) => {
    let nav_list = document.getElementsByClassName("nav-item");
    let target_nav = document.getElementsByClassName(elm);
    for (let i = 0; i < nav_list.length; i++) {
      nav_list[i].classList.remove("bg-white");
      nav_list[i].classList.remove("h-full");
      nav_list[i].classList.remove("text-[#1B69B3]");
    }
    target_nav[0].classList.add("bg-white");
    target_nav[0].classList.add("h-full");
    target_nav[0].classList.add("text-[#1B69B3]");
  };

  return (
    <nav className="fixed top-0 right-0 left-0 h-[71px] flex justify-between items-center pl-[26px] bg-[#1B69B3] z-[999]">
      <div>
        <img
          src={require("../assets/img/logo-kai-access.jpg")}
          alt=""
          className="w-20"
        />
      </div>

      <ul className="flex text-white font-bold font h-full items-center">
        <Link to="beranda" className="h-full flex items-center"  onClick={() => handleActiveNav("beranda")}>
          <li
            className="nav-item beranda flex items-center px-8"
          >
            <FaHome size={25} />
            <span className="ml-2">Beranda</span>
          </li>
        </Link>
        <Link to="tiket" onClick={() => handleActiveNav("tiket")} className="h-full flex items-center">
          <li
            className="nav-item tiket flex items-center px-8"
            
          >
            <FaTicketAlt size={25} />
            <span className="ml-2">Tiket</span>
          </li>
        </Link>
        <Link  onClick={() => handleActiveNav("riwayat")} to="riwayat" className="h-full flex items-center">
          <li
            className="nav-item riwayat flex items-center px-8"
           
          >
            <FaHistory size={20} />
            <span className="">Riwayat</span>
          </li>
        </Link>
        <Link to="/"  onClick={() => handleActiveNav("login")} className="h-full flex items-center">
          <li
            className="nav-item login flex items-center px-8"
           
          >
            <MdAccountCircle size={27} />
            <span className="ml-2">{dataUser.nama || "Akun"}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
