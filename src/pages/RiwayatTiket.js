import React, { useEffect } from "react";
import TiketItem from "../components/TiketItem";
import { axiosGet } from "../api/instanceAxios";
import { useState } from "react";

const RiwayatTiket = () => {
  const [tiketList, setTiketList] = useState([]);

  useEffect(() => {
    const getTiket = async () => {
      const token    = localStorage.getItem("token");
      const { data } = await axiosGet("/tiket-user?status=nonaktif", token);
      setTiketList(data.data);
    };
    getTiket();
  }, []);

  return (
    <div className="flex justify-center mt-24 mb-10">
      <div className="w-3/5">
        {tiketList?.map((tiket) => (
          <TiketItem key={tiket.id_tiket_user} {...tiket} />
        ))}
      </div>
    </div>
  );
};

export default RiwayatTiket;
