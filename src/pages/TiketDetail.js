import React, { useEffect, useState } from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { axiosGet, axiosPostWithToken } from '../api/instanceAxios';
import { convertMonth } from '../utils/convertDate';
import { convertToRupiah } from '../utils/convertToRupiah';
import { Button } from '../components/Button';

export const TiketDetail = () => {

  const [token, setToken]     = useState("");
  const [tiket, setTiket]     = useState({});
  const [nikList, setNikList] = useState([]);
  const { tiketUserId }       = useParams();
  const navigate              = useNavigate();
  
  useEffect(() => {

      const getTiketById = async () => {
        const token    = localStorage.getItem("token");
        const { data } = await axiosGet(`/tiket-user/${tiketUserId}?status=aktif`, token);
        setTiket(data.data);
        setToken(token);

        const {total_penumpang, user_nik} = data.data;
        const nikList = [];
        for (let i = 0; i < total_penumpang; i++) {
              nikList.push(user_nik);  
        }
        setNikList(nikList);
      };
      getTiketById();

  }, []);

  const handleClickCheckTiket = async () => {
    const data = {
      tiketUser_id : tiketUserId
    };
      const res = await axiosPostWithToken(
        "http://localhost:9000/api/v1/tiket-user/nonaktif",
        data,
        token
      );
     if(res){
       navigate("/beranda");
     }
  }

  return (
    <>
      <div className="flex justify-center mt-24 mb-10 mt-24">
        <div className="w-3/5">
          <div className="shadow-lg p-4 rounded-lg bg-white">
            <div className="flex mb-2 items-center">
              <div className="object-contain">
                <img
                  src={require("../assets/img/logo-argo.png")}
                  alt="argo"
                  className="mr-2"
                />
              </div>
              <div>
                <h4 className="text-sm xs:text-base sm:text-lg text-midBlue uppercase">
                  {tiket?.nama_kereta_api}
                </h4>
                <p className="text-sm font-light capitalize">
                  {tiket?.kelas_kereta_api}
                </p>
              </div>
              <div className="text-right flex-1 capitalize mr-6">
                status : <span className="font-semibold"> {tiket?.status}</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-y-2 border-lightGrey py-3">
              <div>
                <p className="text-base text-carbonGrey">Kode Pemesanan</p>
                <h2 className="text-carbonGrey">{tiket?.kode_tiket}</h2>
              </div>
              <div className="object-contain">
                <img src={require("../assets/img/barcode.png")} alt="barcode" />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-5">
              <div className="flex w-[90%] justify-around items-center mb-5">
                <div className="text-center uppercase">
                  <h2 className="text-orange text-xl lg:text-2xl">
                    {tiket?.stasiun_berangkat_inisial}
                  </h2>
                  <h2 className="text-carbonGrey text-xl lg:text-2xl">
                    {tiket?.stasiun_berangkat}
                  </h2>
                </div>
                <MdOutlineArrowRightAlt className="text-lightGrey text-3xl lg:text-5xl" />
                <div className="text-center uppercase">
                  <h2 className="text-orange text-xl lg:text-2xl">
                    {tiket?.stasiun_tujuan_inisial}
                  </h2>
                  <h2 className="text-carbonGrey text-xl lg:text-2xl">
                    {tiket?.stasiun_tujuan}
                  </h2>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-lightGrey p-3">
              <div className="text-carbonGrey ">
                <p className="capitalize">penumpang dewasa</p>
                <p className="capitalize font-bold">Ari Cahyono</p>
              </div>

              <div className="flex text-carbonGrey">
                <div className="flex-1">
                  <p className="mt-4">No. Identitas</p>
                </div>
                <div className="flex-1 text-right">
                  <p>Kursi</p>
                </div>
              </div>
              {nikList?.map((nik, i) => {
                const kursi = 1 + i;
                return (
                  <div className="flex text-carbonGrey">
                    <div className="flex-1">
                      <p className="font-bold">{nik}</p>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="font-bold">PRE-2 / {kursi}D</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Departure  */}
            <div className="border-t-2 border-lightGrey p-3">
              <div className="flex text-carbonGrey">
                <div className="flex-1">
                  <p>Tgl Berangkat</p>
                  <p className="font-bold">
                    {convertMonth(tiket?.tanggal_berangkat)}
                  </p>
                </div>
                <div className="flex-1 text-right">
                  <p>Jam Berangkat </p>
                  <p className="font-bold">{tiket?.waktu_berangkat}</p>
                </div>
              </div>
            </div>
            {/* arrive */}
            <div className="border-t-2 border-lightGrey p-3">
              <div className="flex text-carbonGrey">
                <div className="flex-1">
                  <p>Tgl Tiba</p>
                  <p className="font-bold">
                    {convertMonth(tiket?.tanggal_tiba)}
                  </p>
                </div>
                <div className="flex-1 text-right">
                  <p>Jam Tiba </p>
                  <p className="font-bold">{tiket?.waktu_tiba}</p>
                </div>
              </div>
            </div>
            {/* Price */}
            <div className="border-t-2 border-lightGrey p-3 text-lg text-carbonGrey">
              <p className="inline-block mr-24">Harga</p>
              <p className="inline-block font-bold">
                {convertToRupiah(tiket?.total_harga)}
              </p>
            </div>
          </div>
        </div>
      </div>
      {tiket?.status !== "nonaktif" && (
        <Button handleOnClick={handleClickCheckTiket} name={"Check TIket"} />
      )}
    </>
  );
}
