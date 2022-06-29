import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Daftar = () => {
  const [nama, setNama] = useState("");
  const [nik2, setNik2] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  const [konfirmasi2, setKonfirmasi2] = useState("");
  const [validasi, setValidasi] = useState(false);
  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState({
    nama_lengkap : "",
    email        : "",
    nik          : "",
    password     : "",
    konfirmasi_password : "",
  });

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/v1/register/", {
        nama_lengkap: nama,
        email: email2,
        nik: nik2,
        password: password2
      });

        setNama('');
        setNik2('');
        setEmail2('');
        setPassword2('');
        setKonfirmasi2('');
        setValidasi(false);
        navigate('/');
    } catch (err) {
      console.error(err);
    }
  };
  const handleDaftar = (e) => {
    e.preventDefault();
    const errMessage = {
        nama_lengkap : "",
        email        : "",
        nik          : "",
        password     : "",
        konfirmasi_password : "",
    }

    console.log(nama);
    if(nama === ""){
     errMessage["nama_lengkap"] = "nama lengkap wajib terisi";
    }
    if(email2 === ""){
     errMessage["email"] = "email wajib terisi";
    }
    if(nik2 === ""){
     errMessage["nik"] = "NIK wajib terisi";
    }
    if(password2 === ""){
     errMessage["password"] = "Password wajib terisi";
    }
    if(konfirmasi2 === ""){
     errMessage["konfirmasi_password"] = "Konfirmasi Password wajib terisi";
    }else if(password2 !== konfirmasi2){
      errMessage["konfirmasi_password"] = "Konfirmasi Password tidak sama dengan password";
    }
    setErrMsg(errMessage);

    // konfirmasi === password ? setValidasi(false) : setValidasi(true);
    const {nama_lengkap, email, nik, password, konfirmasi_password} = errMessage; 
  if(nama_lengkap === "" && email === "" && nik === "" && password === "" && konfirmasi_password === ""){
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
  }
    
   
  };

  console.log(errMsg);
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
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          {errMsg.nama_lengkap && <span className="text-red-500">{errMsg.nama_lengkap}</span>}
          <label htmlFor="email" className="mb-3 mt-6">
            Email
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="email"
            name="email"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
          />
          {errMsg.email && <span className="text-red-500">{errMsg.email}</span>}
          <label htmlFor="nik" className="mb-3 mt-6">
            NIK
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="nik"
            value={nik2}
            onChange={(e) => setNik2(e.target.value)}
          />
          {errMsg.nik && <span className="text-red-500">{errMsg.nik}</span>}
          <label htmlFor="password" className="mb-3 mt-6">
            Password
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="password"
            name="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          {errMsg.password && <span className="text-red-500">{errMsg.password}</span>}
          <label htmlFor="konfirmasi" className="mb-3 mt-6">
            Konfirmasi Password
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="password"
            name="konfirmasi"
            value={konfirmasi2}
            onChange={(e) => setKonfirmasi2(e.target.value)}
          />
         {errMsg.konfirmasi_password && <span className="text-red-500">{errMsg.konfirmasi_password}</span>}

          {/* {validasi && (
            <small className="text-left text-[#c51111] text-sm">
              Konfrimasi berbeda dengan password
            </small>
          )} */}
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
