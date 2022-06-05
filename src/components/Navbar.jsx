import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTicketAlt, FaHistory } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const handleActiveNav = (elm) => {
    let nav_list = document.getElementsByClassName("nav-item");
    let target_nav = document.getElementsByClassName(elm);
    for (let i = 0; i < nav_list.length; i++) {
      nav_list[i].classList.remove("underline");
    }
    target_nav[0].classList.add("underline");
  };
  return (
    <nav className="fixed top-0 right-0 left-0 h-[71px] flex justify-between items-center px-[26px] bg-[#1B69B3] z-[999]">
      <div>
        <img src={require("../assets/img/logo-kai-access.jpg")} alt="" className="w-20" />
      </div>

      <ul className="flex text-white font-bold font">
        <Link to="beranda">
          <li
            className="nav-item beranda flex items-center"
            onClick={() => handleActiveNav("beranda")}
          >
            <FaHome size={25} />
            <span className="ml-2">Beranda</span>
          </li>
        </Link>
        <Link to="tiket" className="ml-3 md:ml-10">
          <li
            className="nav-item tiket flex items-center"
            onClick={() => handleActiveNav("tiket")}
          >
            <FaTicketAlt size={25} />
            <span className="ml-2">Tiket</span>
          </li>
        </Link>
        <Link to="riwayat" className="ml-3 md:ml-10">
          <li
            className="nav-item riwayat flex items-center"
            onClick={() => handleActiveNav("riwayat")}
          >
            <FaHistory size={20} />
            <span className="ml-2">Riwayat</span>
          </li>
        </Link>
        <Link to="login" className="ml-3 md:ml-10">
          <li
            className="nav-item login flex items-center"
            onClick={() => handleActiveNav("login")}
          >
            <MdAccountCircle size={27} />
            <span className="ml-2">Akun</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
