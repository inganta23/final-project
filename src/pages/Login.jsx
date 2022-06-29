import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMsg, setIsLoginMsg] = useState(false)

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/v1/login/", {
        email: email,
        password: password,
      });
      if(res.data.message !== "login gagal"){
        localStorage.setItem("token", res.data.data.token);
        setIsLoggedIn(true);
        navigate("/beranda");
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
    <div className="flex justify-center items-center h-[90vh] mt-20">
      <form
        className="flex flex-col w-[520px] bg-[#fff] rounded-xl"
        onSubmit={handleLogin}
      >
        <div className="mx-auto">
          <img src={require("../assets/img/image 93.png")} alt="Login" />
        </div>
        <div className="w-[356px] mx-auto flex flex-col">
          <h2 className="text-center text-[#605F5F] mb-7">Login Akun</h2>
          {isLoginMsg && <span className="text-red-500 text-center text-lg mb-2">Login Gagal</span>}
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            className="mb-8 border-b-[3px] border-[#1B69B3] focus:outline-none"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
          <small className="text-right text-[#1B69B3] text-base mb-8">
            lupa kata sandi?
          </small>
          <button className="w-[329px] h-[43px] mx-auto mb-2" type="submit">
            <b>Masuk</b>
          </button>
          <small className="text-center text-[#AFAEAE] text-base mb-16">
            Tidak memiliki akun?
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
