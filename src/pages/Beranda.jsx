import React, {  useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaTrophy,
  FaShoppingBasket,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Beranda = ({ setTiket, stasiun, setTglBerangkat }) => {
  const navigate = useNavigate();
  const [asal, setAsal] = useState("");
  const [date, setDate] = useState("");
  const [kelas, setKelas] = useState("");
  const [tujuan, setTujuan] = useState("");

  const getTiket = async (newDate) => {
    try {
      const res = await axios.get(
        `http://localhost:9000/api/v1/tiket?tgl_berangkat=${newDate}&stasiun_berangkat=${asal}&stasiun_tujuan=${tujuan}&kelas=${kelas}`
      );
      setTiket(res.data.data)
      setTglBerangkat(newDate);
    } catch (err) {
      console.error(err);
    }
  };
  const handleTiketSubmit = (e) => {
    e.preventDefault();
    const newDate = date.split("-").reverse().join("-");
    getTiket(newDate);
    navigate("/list-tiket");
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
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleTiketSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-10 justify-between w-full">
            <div className="flex flex-col w-full sm:w-[45%]">
              <label htmlFor="asal" className="text-base sm:mb-1">
                Asal
              </label>
              <select
                name="asal"
                className="cursor-pointer border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                value={asal}
                onChange={(e) => setAsal(e.target.value)}
                required
              >
                <option value="">None</option>
                {stasiun?.map((asal, index) => (
                  <option key={index} value={asal.nama}>
                    {asal.nama}
                  </option>
                ))}
              </select>
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
              <select
                name="tujuan"
                className="cursor-pointer border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
                required
              >
                <option value="">None</option>
                {stasiun?.map((tujuan, index) => (
                  <option key={index} value={tujuan.nama}>
                    {tujuan.nama}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-10 justify-between w-full">
            <div className="flex flex-col w-full sm:w-[45%]">
              <label htmlFor="asal" className="text-base sm:mb-1">
                Tanggal Berangkat
              </label>
              <input
                className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                type="date"
                value={date}
                name="berangkat"
                placeholder="Tanggal Berangkat"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              />
            </div>
            {/* {isToggle ? (
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
                type="date"
                value={date.tiba}
                name="kembali"
                onChange={(e) => {
                  setDate({...date, tiba: e.target.value})
                }}
                placeholder="Tanggal Kembali"
                required
              />
            </div> */}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-10 justify-between w-full">
            <div className="flex flex-col w-full sm:w-[50%]">
              <label htmlFor="kereta" className="text-base sm:mb-1">
                Kelas Kereta
              </label>
              <select
                name="kelas"
                className="cursor-pointer border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                required
              >
                <option value="">None</option>
                <option value="ekonomi">Ekonomi</option>
                <option value="bisnis">Bisnis</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-[50%]">
              <label htmlFor="penumpang" className="text-base sm:mb-1">
                Penumpang
              </label>
              <div className="flex gap-5">
                <input
                  className="border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                  type="text"
                  name="penumpang"
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
