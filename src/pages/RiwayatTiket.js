import React, { useEffect } from "react";
import TiketItem from "../components/TiketItem";
import { axiosGet } from "../api/instanceAxios";
import { useState } from "react";
import Tiket from "./Tiket";

const RiwayatTiket = () => {
  const [tiketList, setTiketList] = useState([]);
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    setIsToken(localStorage.getItem("token") !== null);
  }, []);

  useEffect(() => {
    const token      = localStorage.getItem("token");
    const getTiket = async () => {
        const { data } = await axiosGet("/tiket-user?status=nonaktif", token);
        setTiketList(data.data);
    };
    token && getTiket();
  }, []);

  return (
    <div className="flex justify-center mt-24 mb-10">
      {!isToken && (
        <div className="w-full">
          <Tiket />
        </div>
      )}

      {isToken && (
        <div className="w-3/5">
          {tiketList?.map((tiket) => (
            <TiketItem key={tiket.id_tiket_user} {...tiket} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RiwayatTiket;
