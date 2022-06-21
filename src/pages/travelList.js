import React from "react";
import { Link } from "react-router-dom";
import { CardDate } from "../components/cardDate";
import { CardTravel } from "../components/cardTravel";

export const TravelList = (tikets) => {
  if(tikets.tikets === '') return <h2 className="text-center mt-[100px]">Tidak ada tiket tersedia</h2>
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
              <Link key={index} to={`/beli-tiket/${index}`}>
                <CardTravel tiket={tiket}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
