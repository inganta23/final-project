import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTicketAlt, FaHistory } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useNavStore } from "../store/navigasiStore";

const Navbar = ({ dataUser }) => {
 const navActive = useNavStore((state) => state.navActive); 
 const setNavActive = useNavStore((state) => state.addNavActive); 
  useEffect(() => {
    let navActive = "beranda";
    const url = window.location.href;
    if(url.includes("tiket")) navActive = "tiket";
    if(url.includes("riwayat")) navActive = "riwayat";
    if(url.includes("login") || url.includes("daftar")) navActive = "user";
    setNavActive(navActive)
  }, [])
  

  const handleActiveNav = (dt) => setNavActive(dt)

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
        <Link to="/" className="h-full flex" >
          <li
            className={`nav-item beranda flex items-center px-6 ${navActive === "beranda" ? "bg-white text-[#1B69B3]" : ""}`} onClick={() => handleActiveNav("beranda")}
          >
            <FaHome size={25} />
            <span className="ml-2">Beranda</span>
          </li>
        </Link>
        <Link to="tiket"  className="h-full flex">
          <li
            className={`nav-item beranda flex items-center px-6 ${navActive === "tiket" ? "bg-white text-[#1B69B3]" : ""}`} onClick={() => handleActiveNav("tiket")}
            
          >
            <FaTicketAlt size={25} />
            <span className="ml-2">Tiket</span>
          </li>
        </Link>
        <Link   to="riwayat" className="h-full flex">
          <li
            className={`nav-item beranda flex items-center px-6 ${navActive === "riwayat" ? "bg-white text-[#1B69B3]" : ""}`} onClick={() => handleActiveNav("riwayat")}
           
          >
            <FaHistory size={20} />
            <span className="ml-2">Riwayat</span>
          </li>
        </Link>
        <Link to="/login"   className="h-full flex">
          <li
            className={`nav-item beranda flex items-center px-6 ${navActive === "user" ? "bg-white text-[#1B69B3]" : ""}`} onClick={() => handleActiveNav("user")}
           
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
