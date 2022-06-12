import React, { useEffect, useState } from "react";
import { CardTravel } from "../components/cardTravel";
import { CardService } from "../components/cardService";
import { Passenger } from "../components/passenger";
import { Title } from "../components/title";
import { Button } from "../components/button";
import axios from "axios";

export const PayTicket = ({ ticketDetailsId, setTicketDetailsId }) => {
  const [detailData, setDetailData] = useState("");
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/tickets/${ticketDetailsId}`
      );
      setDetailData(response.data);
      setTicketDetailsId(0);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(detailData);
  return (
    <div>
      <div className="flex justify-center mt-[100px]">
        <div className="w-3/5">
          <Title name={"Kereta Api"} />

          {detailData !== "" && (
            <CardTravel
              key={detailData.id}
              kotaAsal={detailData.kota_asal}
              waktuBerangkat={new Date(detailData.waktu_berangkat)}
              kotaTujuan={detailData.kota_tujuan}
              waktuTiba={new Date(detailData.waktu_tiba)}
              namaKereta={detailData.nama_kereta}
              harga={detailData.harga}
            />
          )}
          <Title name={"Daftar Penumpang"} />
          <Passenger />
          <Title name={"Detail Harga"} />
          <div className="shadow-lg p-4 rounded-lg bg-white flex justify-between">
            <div className="font-bold">Total Harga </div>
            <div className="font-bold text-midBlue">Rp 90.0000</div>
          </div>
          <Title name={"Layanan"} />
          <CardService />
        </div>
      </div>
      <Button name="bayar" />
    </div>
  );
};
