import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const TiketDetail = () => {
  return (
    <div className="flex justify-center mt-24 mb-10">
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
              <h4 className="text-sm xs:text-base sm:text-lg text-midBlue">
                ARGO PARAHYANGAN
              </h4>
              <p className="text-sm font-light">Ekonomi</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-y-2 border-lightGrey py-3">
            <div>
              <p className="text-base text-carbonGrey">Kode Pemesanan</p>
              <h2 className="text-carbonGrey">LM27NV</h2>
            </div>
            <div className="object-contain">
              <img src={require("../assets/img/barcode.png")} alt="barcode" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex w-[90%] justify-around items-center mb-5">
              <div className="text-center">
                <h2 className="text-orange text-xl lg:text-2xl">BD</h2>
                <h2 className="text-carbonGrey text-xl lg:text-2xl">BANDUNG</h2>
              </div>
              <MdOutlineArrowRightAlt className="text-lightGrey text-3xl lg:text-5xl" />
              <div className="text-center">
                <h2 className="text-orange text-xl lg:text-2xl">GMR</h2>
                <h2 className="text-carbonGrey text-xl lg:text-2xl">GAMBIR</h2>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-lightGrey p-3">
            <div className="text-carbonGrey ">
              <p className="capitalize">penumpang dewasa</p>
              <p className="capitalize font-bold">Ari Cahyono</p>
            </div>

            <div className="flex text-carbonGrey mt-4">
              <div className="flex-1">
                <p>No. Identitas</p>
                <p className="font-bold">35782723812381031</p>
              </div>
              <div className="flex-1 text-right">
                <p>Kursi</p>
                <p className="font-bold">PRE-2 / 1D</p>
              </div>
            </div>
          </div>
          {/* Departure  */}
          <div className="border-t-2 border-lightGrey p-3">
            <div className="flex text-carbonGrey">
              <div className="flex-1">
                <p>Tgl Berangkat</p>
                <p className="font-bold">17 september 2021</p>
              </div>
              <div className="flex-1 text-right">
                <p>Jam Berangkat </p>
                <p className="font-bold">06:00</p>
              </div>
            </div>
          </div>
          {/* arrive */}
          <div className="border-t-2 border-lightGrey p-3">
            <div className="flex text-carbonGrey">
              <div className="flex-1">
                <p>Tgl Tiba</p>
                <p className="font-bold">17 september 2021</p>
              </div>
              <div className="flex-1 text-right">
                <p>Jam Tiba </p>
                <p className="font-bold">09:23</p>
              </div>
            </div>
          </div>
          {/* Price */}
          <div className="border-t-2 border-lightGrey p-3 text-lg text-carbonGrey">
            <p className="inline-block mr-24">Harga</p>
            <p className="inline-block font-bold">Rp 90.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
