import React from "react";
import { Link } from "react-router-dom";

const Daftar = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] mt-20">
      <form className="flex flex-col w-[520px] bg-[#fff] rounded-xl">
        <div className="mx-auto">
          <img src={require("../assets/image 93.png")} alt="Login" />
        </div>
        <div className="w-[356px] mx-auto flex flex-col">
          <h2 className="text-center text-[#605F5F] mb-7">Login Akun</h2>
          <label htmlFor="nama" className="mb-3">
            Nama Lengkap
          </label>
          <input
            className="mb-8 border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="nama"
            required
          />
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            className="mb-8 border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="email"
            required
          />
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="password"
            name="password"
            required
          />
           <label htmlFor="konfirmasi" className="mb-3">
            Konfirmasi Password
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] mb-8 focus:outline-none"
            type="password"
            name="konfirmasi"
            required
          />
        </div>
        <button className="w-[329px] h-[43px] mx-auto mb-2" type="submit">
          <b>Daftar</b>
        </button>
        <small className="w-[356px] mx-auto text-center text-[#AFAEAE] text-base mb-16">
          Sudah memiliki akun?
          <Link to="/login" className="text-[#1B69B3] hover:underline">
            Login Sekarang
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Daftar;
