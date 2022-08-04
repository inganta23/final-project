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
     errMessage["nama_lengkap"] = "Nama lengkap wajib terisi";
    }
    if(email2 === ""){
     errMessage["email"] = "Email wajib terisi";
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

  return (
    <div className="flex justify-center items-center h-[90vh] mb-20 mt-40">
      <form
        className="flex flex-col w-1/3 bg-[#fff] rounded-xl shadow-lg"
        onSubmit={handleDaftar}
      >
        <div className="mx-auto">
          <img src={require("../assets/img/logo-KAI.png")} alt="Login" className="w-40 pt-12 pb-4 px-6" />
        </div>
        <div className=" mx-10 flex flex-col">
          <h2 className="text-center text-[#605F5F] mb-4  text-2xl">Daftar Akun</h2>
          <label htmlFor="nama" className="">
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
          <label htmlFor="email" className=" mt-6">
            Email
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="email"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
          />
          {errMsg.email && <span className="text-red-500">{errMsg.email}</span>}
          <label htmlFor="nik" className="mt-6">
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
          <label htmlFor="password" className="mt-6">
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
          <label htmlFor="konfirmasi" className="mt-6">
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
          <small className="text-center text-[#AFAEAE] text-base mb-12">
            <p className="inline-block mr-2">Sudah memiliki akun?</p>
            <Link to="/" className="text-[#1B69B3] hover:underline">
              Login Sekarang
            </Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Daftar;
