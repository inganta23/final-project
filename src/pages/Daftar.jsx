import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Daftar = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [validasi, setValidasi] = useState(false);

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/v1/register/", {
        nama_lengkap: nama,
        email: email,
        nik: nik,
        password: password
      });

        setNama('');
        setNik('');
        setEmail('');
        setPassword('');
        setKonfirmasi('');
        setValidasi(false);
        navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDaftar = (e) => {
    e.preventDefault();
    konfirmasi === password ? setValidasi(false) : setValidasi(true);
    swal({
      title: "Apakah data anda sudah benar?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((benar) => {
      if (benar) {
        register();
        swal("Terimakasih telah mendaftar", {
          icon: "success",
        });
      } 
    });
    
   
  };
  return (
    <div className="flex justify-center items-center h-[90vh] mt-[90px] mb-20">
      <form
        className="flex flex-col w-[520px] bg-[#fff] rounded-xl"
        onSubmit={handleDaftar}
      >
        <div className="mx-auto">
          <img src={require("../assets/img/image 93.png")} alt="Login" />
        </div>
        <div className="w-[356px] mx-auto flex flex-col">
          <h2 className="text-center text-[#605F5F] mb-7">Daftar Akun</h2>
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
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="nik" className="mb-3">
            NIK
          </label>
          <input
            className="mb-8 border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="nik"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            required
          />
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            className="mb-8 border-b-[3px] border-[#1B69B3] focus:outline-none"
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
          {validasi && (
            <small className="text-left text-[#c51111] text-sm">
              Konfrimasi berbeda dengan password
            </small>
          )}
          <button
            className="w-[329px] h-[43px] mx-auto mb-2 mt-8"
            type="submit"
          >
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
