import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const handleActiveNav = (elm) =>{
        let nav_item = document.getElementsByClassName("nav-item");
        for(let i=0; i<nav_item.length; i++){
          nav_item[i].classList.remove("underline")
        }
        elm.classList += " underline";
    }
  return (
    <nav className="fixed top-0 right-0 left-0 h-[71px] flex justify-between items-center px-[26px] bg-[#1B69B3]">
      <div>
        <img src={require("../assets/image 34.png")} alt="" />
      </div>

      <ul className="flex text-white font-bold font">
        <Link to="beranda" onClick={(e) => handleActiveNav(e.target.parentElement)}>
          <li className="nav-item flex items-center">
            <img
              className="w-[25px] h-[19px]"
              src={require("../assets/Vector.png")}
              alt="icon"
            />
            <span>Beranda</span>
          </li>
        </Link>
        <Link to="tiket" onClick={(e) => handleActiveNav(e.target.parentElement)}>
          <li className="nav-item flex items-center ml-3 md:ml-10">
            <img
              className="w-[25px] h-[19px]"
              src={require("../assets/Tiket.png")}
              alt="icon"
            />
            <span>Tiket</span>
          </li>
        </Link>
        <Link to="riwayat" onClick={(e) => handleActiveNav(e.target.parentElement)}>
          <li className="nav-item flex items-center ml-3 md:ml-10">
            <img
              className="w-[25px] h-[19px]"
              src={require("../assets/Riwayat.png")}
              alt="icon"
            />
            <span>Riwayat</span>
          </li>
        </Link>
        <Link to="login" onClick={(e) => handleActiveNav(e.target.parentElement)}>
          <li className="nav-item flex items-center ml-3 md:ml-10">
            <img
              className="w-[25px] h-[19px]"
              src={require("../assets/Akun.png")}
              alt="icon"
            />
            <span>Akun</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
