import React, { useState } from "react";
import { Link } from "react-router-dom";

const Daftar = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [validasi, setValidasi] = useState(false);

  const handleDaftar = (e) => {
    e.preventDefault();
    konfirmasi === password ? setValidasi(false) : setValidasi(true);
  };
  return (
    <div className="flex justify-center items-center h-[90vh] mt-20">
      <form
        className="flex flex-col w-[520px] bg-[#fff] rounded-xl"
        onSubmit={handleDaftar}
      >
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
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            className="mb-8 border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="konfirmasi" className="mb-3">
            Konfirmasi Password
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="password"
            name="konfirmasi"
            value={konfirmasi}
            onChange={(e) => setKonfirmasi(e.target.value)}
            required
          />
          {validasi && <small className="text-left text-[#c51111] text-sm">Konfrimasi berbeda dengan password</small>}
          <button className="w-[329px] h-[43px] mx-auto mb-2 mt-8" type="submit">
            <b>Daftar</b>
          </button>
          <small className="text-center text-[#AFAEAE] text-base mb-16">
            Sudah memiliki akun?
            <Link to="/login" className="text-[#1B69B3] hover:underline">
              Login Sekarang
            </Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Daftar;
