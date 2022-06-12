import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardDate } from "../components/cardDate";
import { CardTravel } from "../components/cardTravel";

export const TravelList = ({allTickets, setAllTickets, setTicketDetailsId, tickets, setTickets, asal, setAsal, setTujuan, setDate, tujuan, date}) => {
  
  useEffect(() => {
    if(asal != '' || tujuan != '' || date != ''){
      searchTickets();
    }else{
      setTickets(allTickets)
    }
    
  }, []);

  const searchTickets = async () => {
    try {
      const response = await axios.post("http://localhost:5000/searchTickets",{
        tanggal_berangkat: date,
        kotaAsal: asal,
        kotaTujuan: tujuan,
        namaKereta: "PARAHYANGAN"
      });
      setTickets({ Tickets: [...response.data] });
      setAsal('')
      setDate('')
      setTujuan('')
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <div className="flex justify-center">
        <div className="w-3/5">
          <div className="flex justify-center">
            <CardDate day={"Kamis"} date={"16"} />
            <CardDate day={"Jumat"} date={"17"} />
            <CardDate day={"Sabtu"} date={"18"} />
            <CardDate day={"Minggu"} date={"19"} />
            <CardDate day={"Senin"} date={"20"} />
          </div>

          <div className="mt-4">
            {tickets.Tickets?.map((ticket) => (
              
              <CardTravel setTicketDetailsId={setTicketDetailsId} key={ticket.id} ticketId={ticket.id} kotaAsal={ticket.kota_asal} waktuBerangkat={new Date(ticket.waktu_berangkat)} kotaTujuan={ticket.kota_tujuan} waktuTiba = {new Date(ticket.waktu_tiba)} namaKereta ={ticket.nama_kereta} harga={ticket.harga} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
