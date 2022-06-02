import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaShoppingBasket,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";

const Beranda = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="flex flex-col items-center mt-[140px]">
      <div className="p-5 md:p-10 bg-white flex items-center justify-center gap-5 rounded-xl relative flex-wrap m-6 max-w-[80%]">
        <Link to="/" className="absolute top-[-30px] left-0">
          <p className="text-lg text-left font-bold text-[#1B69B3]">
            Pemberitahuan
          </p>
        </Link>
        <img
          src={require("../assets/img/annoncement(1).png")}
          alt="pemberitahuan"
        />
        <img
          src={require("../assets/img/annoncement(1).png")}
          alt="pemberitahuan"
        />
        <img
          src={require("../assets/img/annoncement(1).png")}
          alt="pemberitahuan"
        />
      </div>
      <div className="flex w-[80%] lg:w-[960px] bg-white justify-between p-8 rounded-xl m-6 flex-wrap">
        <div className="flex items-center gap-3">
          <FaTrophy color="#AFAEAE" size={70} />
          <div>
            <p className="text-xl">Point anda</p>
            <p className="text-xl text-[#1B69B3] font-bold">0 Point</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaShoppingBasket color="#AFAEAE" size={70} />
          <div>
            <p className="text-xl">Keranjang anda</p>
            <p className="text-xl text-[#1B69B3] font-bold">0 Produk</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-10 w-[80%] lg:w-[960px] m-6">
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-10 justify-between w-full">
            <div className="flex flex-col w-full sm:w-[45%]">
              <label htmlFor="asal" className="text-base sm:mb-1">
                Asal
              </label>
              <input
                className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                type="text"
                name="asal"
                placeholder="Asal"
                required
              />
            </div>
            <RiArrowLeftRightFill
              size={35}
              color="#605F5F"
              className="sm:mt-[20px]"
            />
            <div className="flex flex-col w-full sm:w-[45%]">
              <label htmlFor="tujuan" className="text-base sm:mb-1">
                Tujuan
              </label>
              <input
                className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                type="text"
                name="tujuan"
                placeholder="Tujuan"
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-10 justify-between w-full">
            <div className="flex flex-col w-full sm:w-[45%]">
              <label htmlFor="asal" className="text-base sm:mb-1">
                Tanggal Berangkat
              </label>
              <input
                className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                type="text"
                name="berangkat"
                placeholder="Tanggal Berangkat"
                required
              />
            </div>
            {isToggle ? (
              <FaToggleOn
                size={35}
                color="#605F5F"
                className="sm:mt-[20px] cursor-pointer"
                onClick={handleToggle}
              />
            ) : (
              <FaToggleOff
                size={35}
                color="#605F5F"
                className="sm:mt-[20px] cursor-pointer"
                onClick={handleToggle}
              />
            )}

            <div className="flex flex-col w-full sm:w-[45%]">
              <label htmlFor="tujuan" className="text-base sm:mb-1">
                Tanggal Kembali
              </label>
              <input
                className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                type="text"
                name="kembali"
                placeholder="Tanggal Kembali"
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-10 justify-between w-full">
            <div className="flex flex-col w-full sm:w-[50%]">
              <label htmlFor="kereta" className="text-base sm:mb-1">
                Kelas Kereta
              </label>
              <input
                className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                type="text"
                name="kereta"
                placeholder="Kereta"
                required
              />
            </div>
            <div className="flex flex-col w-full sm:w-[50%]">
              <label htmlFor="penumpang" className="text-base sm:mb-1">
                Penumpang
              </label>
              <div className="flex gap-5">
                <input
                  className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-[50%]"
                  type="text"
                  name="penumpang"
                  placeholder="Dewasa"
                  required
                />
                <input
                  className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-[50%]"
                  type="text"
                  name="penumpang"
                  placeholder="Bayi"
                  required
                />
              </div>
            </div>
          </div>

          <button className="w-[80%] h-[43px] mb-2" type="submit">
            <b>Cari</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Beranda;
