import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavStore } from "../store/navigasiStore";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMsg, setIsLoginMsg] = useState(false)
  const setNavActive = useNavStore((state) => state.addNavActive); 

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/v1/login/", {
        email: email,
        password: password,
      });
      if(res.data.message !== "login gagal"){
        localStorage.setItem("token", res.data.data.token);
        setIsLoggedIn(true);
        navigate("/");
        setNavActive("beranda");
        setIsLoginMsg(false);
      }else{
        setIsLoginMsg(true);
      }
    } catch (err) {
      console.error(err);
      setIsLoginMsg(true);
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    await login();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-[90vh] mt-20 ">
      <form
        className="flex flex-col w-1/3 bg-[#fff] rounded-xl  shadow-lg"
        onSubmit={handleLogin}
      >
        <div className="mx-auto">
           <img src={require("../assets/img/logo-KAI.png")} alt="Login" className="w-40 pt-12 pb-4 px-6" />
        </div>
        <div className=" mx-10 flex flex-col">
          <h2 className="text-center text-[#605F5F] mb-4 text-2xl">Login Akun</h2>
          {isLoginMsg && <span className="text-red-500 text-center text-lg mb-2">Login Gagal</span>}
          <label htmlFor="email">
            Email
          </label>
          <input
            className="mb-8 border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            className="border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className="text-right text-[#1B69B3] text-base mb-4">
            lupa kata sandi?
          </small>
          <button className=" h-[43px] w-full mb-2" type="submit">
            <b>Masuk</b>
          </button>
          <small className="text-center text-[#AFAEAE] text-base mb-12">
            <p className="inline-block mr-2">Tidak memiliki akun?</p>
            <Link to="/daftar" className="text-[#1B69B3] hover:underline">
              Daftar Sekarang
            </Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Login;
