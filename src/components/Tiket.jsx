import React from "react";
import { Link } from "react-router-dom";

const Tiket = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-[90%] md:w-[60%] max-w-[900px] py-5 md:py-[5rem] bg-[#fff] rounded-xl">
        <div>
          <img src={require("../assets/tiket-image.png")} alt="login first" />
        </div>
        <div className="my-10 w-[80%] md:w-[60%] text-center">
          <p className="font-bold text-[#605F5F] text-2xl md:text-4xl">
            Bergabunglah untuk mendapat keuntungan yang lebih banyak
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-x-7 gap-y-5">
          <Link to="/daftar">
            <button
              className="w-[250px] sm:w-[329px] h-[43px] bg-transparent border-2 border-[#EB6B10] text-[#EB6B10]"
              type="button"
            >
              <b>Daftar</b>
            </button>
          </Link>
          <Link to="/login">
            <button className="w-[250px] sm:w-[329px] h-[43px]" type="button">
              <b>Login</b>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
