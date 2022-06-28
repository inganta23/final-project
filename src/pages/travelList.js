import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardDate } from "../components/cardDate";
import { CardTravel } from "../components/cardTravel";

export const TravelList = (tikets) => {
  const navigate = useNavigate();
  const handleClickTiket = (index) => {
    if (localStorage.getItem("token")) navigate(`/beli-tiket/${index}`);
    else alert("Silahkan Login Dahulu");
  };
  if (tikets.tikets === "")
    return <h2 className="text-center mt-[100px]">Tidak ada tiket tersedia</h2>;


  return (
    <div>
      <div className="flex justify-center mt-24">
        <div className="w-3/5">
          <div className="flex justify-center">
            <CardDate day={"Kamis"} date={"16"} />
            <CardDate day={"Jumat"} date={"17"} />
            <CardDate day={"Sabtu"} date={"18"} />
            <CardDate day={"Minggu"} date={"19"} />
            <CardDate day={"Senin"} date={"20"} />
          </div>

          <div className="mt-4">
            {tikets.tikets?.map((tiket, index) => (
              <div key={index} onClick={() => handleClickTiket(index)}>
                <CardTravel tiket={tiket} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
