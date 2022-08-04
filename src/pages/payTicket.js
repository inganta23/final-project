import React, { useEffect, useState } from 'react'
import { CardTravel } from '../components/CardTravel'
import { CardService } from '../components/CardService'
import { Passenger } from '../components/passenger'
import { Title } from '../components/title'
import { Button } from '../components/Button'
import { CardContact } from '../components/cardContact'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { convertToRupiah } from '../utils/convertToRupiah'

export const PayTicket = ({tiket, dataUser}) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [detail, setDetail] = useState();

  const bayar = async(tiket) =>{
    try {
      const res = await axios.post("http://localhost:9000/api/v1/tiket-user", {
        tiket_id: tiket.id_tiket,
        total_harga: localStorage.getItem('penumpang')*tiket.harga_tiket,
        total_penumpang: localStorage.getItem('penumpang')
      },
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
     
      setDetail(res);
    } catch (err) {
      console.error(err);
    }
  }

  const handleBayar = (tiket) => {
    swal({
      title: "Apakah anda yakin?",
      text: "Tiket yang sudah dibeli tidak dapat dikembalikan!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willBuy) => {
      if (willBuy) {
        bayar(tiket)
        swal("Anda telah membeli tiket", {
          icon: "success",
        });
      } 
    });
    
  }


  useEffect(()=>{
    if(detail?.data?.data?.id){
      navigate(`/detail-tiket/${detail.data.data.id}`)
    }
  },[detail])
  
  return (
    <div>
      <div className="flex justify-center mt-24">
        <div className="w-3/5">
          <Title name={"Detail Perjalanan"} />
          <CardTravel tiket={tiket[id]} />
          <Title name={"Detail Pembeli"} className="mt-4" />
          <CardContact dataUser={dataUser} />
          <Title name={"Detail Harga"} className="mt-4" />
          <div className="shadow-lg p-4 rounded-lg bg-white flex justify-between">
            <div className="font-bold">Total Harga </div>
            <div className="font-bold text-midBlue">
              {convertToRupiah(
                tiket[id].harga_tiket * localStorage.getItem("penumpang")
              )}
            </div>
          </div>
          <Title name={"Layanan"} className="mt-4" />
          <CardService />
        </div>
      </div>

      <Button name="bayar" handleOnClick={() => handleBayar(tiket[id])} />
    </div>
  );
}
