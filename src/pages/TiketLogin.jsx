import React, {useEffect} from "react";
import TiketItem from "../components/TiketItem";
import {axiosGet} from "../api/instanceAxios";
import { useState } from "react";
import { TicketEmpty } from "../components/TicketEmpty";
import { TbTicketOff } from "react-icons/tb";

const TiketLogin = () => {
  const [tiketList, setTiketList] = useState([]);
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    setIsToken(localStorage.getItem("token") !== null );
  }, []);

  useEffect(() => {
    const token      = localStorage.getItem("token")
    const getTiket = async() => {
        const { data } = await axiosGet("/tiket-user?status=aktif", token );
        setTiketList(data.data);
    }
    token && getTiket();
  }, []);

   return (
    <div className="flex justify-center mt-24 mb-10">

        {(isToken &&  tiketList.length === 0) && (
          <div className="w-96 flex justify-center text-center">
              <TicketEmpty
                title="Kamu belum memiliki tiket."
                description="Ayo pesan tiket keberangkatan sekarang! Tiket kamu akan ditampilkan disini."
              >
                <TbTicketOff size={120}/>
              </TicketEmpty>
          </div>
        )}

      {(isToken && tiketList.length !== 0) &&  
      <div className="w-3/5">
        {tiketList?.map((tiket)=>(<TiketItem key={tiket.id_tiket_user} {...tiket} />))}
      </div>
      }
    </div>
  );
};

export default TiketLogin;
