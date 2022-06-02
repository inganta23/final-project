import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-[90vh] mt-20">
      <form className="flex flex-col w-[520px] bg-[#fff] rounded-xl">
        <div className="mx-auto">
          <img src={require("../assets/img/image 93.png")} alt="Login" />
        </div>
        <div className="w-[356px] mx-auto flex flex-col">
          <h2 className="text-center text-[#605F5F] mb-7">Login Akun</h2>
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
