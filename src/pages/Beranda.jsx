import React, {  useEffect, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css/bundle";

const Beranda = ({ setTiket, stasiun, setTglBerangkat }) => {
  const navigate = useNavigate();
  const [asal, setAsal] = useState("");
  const [date, setDate] = useState("");
  const [kelas, setKelas] = useState("ekonomi");
  const [tujuan, setTujuan] = useState("");
  const [penumpang, setPenumpang] = useState(1);

  const getTiket = async (newDate) => {
    try {
      const res = await axios.get(
        `http://localhost:9000/api/v1/tiket?tgl_berangkat=${newDate}&stasiun_berangkat=${asal}&stasiun_tujuan=${tujuan}&kelas=${kelas}`
      );
      setTiket(res.data.data)
      await setTglBerangkat(newDate);
    } catch (err) {
      console.error(err);
    }
  };
  const handleTiketSubmit = async (e) => {
    e.preventDefault();
    const newDate = date.split("-").reverse().join("-");
    await getTiket(newDate);
    navigate("/list-tiket");
  };

  useEffect(() => {
    localStorage.setItem('penumpang',penumpang)
  },[penumpang])

  return (
    <div className="flex flex-col items-center mt-[130px]">
      <section className="w-5/6 shadow-lg">
        <div className="flex justify-between text-lg font-bold text-[#1B69B3]">
          <p>
            Spesial di KAI Access
          </p>
          <p className="capitalize">
            lihat semua
          </p>
        </div>
        <div className="py-5 px-4 bg-white rounded-xl">
            <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide> <img className="h-44 w-full"
                      src={require("../assets/img/kai-promo-1.jpg")}
                      alt="pemberitahuan"
                    /></SwiperSlide>
                    <SwiperSlide> <img className="h-44 w-full"
                      src={require("../assets/img/kai-promo-2.jpg")}
                      alt="pemberitahuan"
                    /></SwiperSlide>
                    <SwiperSlide> <img className="h-44 w-full"
                      src={require("../assets/img/kai-promo-3.jpg")}
                      alt="pemberitahuan"
                    /></SwiperSlide>
                    <SwiperSlide> <img className="h-44 w-full"
                      src={require("../assets/img/kai-promo-4.jpg")}
                      alt="pemberitahuan"
                    /></SwiperSlide>
                    <SwiperSlide> <img className="h-44 w-full"
                      src={require("../assets/img/kai-promo-5.jpg")}
                      alt="pemberitahuan"
                    /></SwiperSlide>
                    <SwiperSlide> <img className="h-44 w-full"
                      src={require("../assets/img/kai-promo-6.jpg")}
                      alt="pemberitahuan"
                    /></SwiperSlide>
                  </Swiper>
        </div>
      </section>

      <div className="flex w-3/5 lg:w-3/5 bg-white justify-between p-8 rounded-xl m-6 flex-wrap shadow-lg">
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
      <div className="bg-white rounded-xl p-10 w--1/3 lg:w-3/5 mx-6 mb-12 shadow-lg">
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
                className="uppercase cursor-pointer border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                value={asal}
                onChange={(e) => setAsal(e.target.value)}
                required
              >
                <option value="">None</option>
                {stasiun?.map((asal, index) => (
                  <option key={index} value={asal.nama}>
                    {asal.nama + ` (${asal.inisial_stasiun}) `}
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
                className="uppercase cursor-pointer border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
                required
              >
                <option value="">None</option>
                {stasiun?.map((tujuan, index) => (
                  <option key={index} value={tujuan.nama}>
                    {tujuan.nama + ` (${tujuan.inisial_stasiun}) `}
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
                <option value="ekonomi" defaultChecked >Ekonomi</option>
                <option value="bisnis">Bisnis</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-[50%]">
              <label htmlFor="penumpang" className="text-base sm:mb-1">
                Penumpang
              </label>
              <div className="flex gap-5">
              <select
                name="kelas"
                className="cursor-pointer border-b-[3px] border-[#1B69B3] text-[#1B69B3] placeholder:text-[#1B69B3] focus:outline-none w-full"
                value={penumpang}
                onChange={(e) => setPenumpang(e.target.value)}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
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
