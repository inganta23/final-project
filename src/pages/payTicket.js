import React from 'react'
import { CardTravel } from '../components/cardTravel'
import { CardService } from '../components/cardService'
import { Passenger } from '../components/passenger'
import { Title } from '../components/title'
import { Button } from '../components/button'
import { CardContact } from '../components/cardContact'
import { Link, useParams } from 'react-router-dom'

export const PayTicket = ({tiket}) => {

  const {id} = useParams();
  return (
    <div>
      <div className="flex justify-center mt-24">
        <div className="w-3/5">
          <Title name={"Detail Perjalanan"} />
          <CardTravel tiket={tiket[id]}/>
          <Title name={"Detail Pembeli"} className="mt-4" />
          <CardContact />
          <Title name={"Detail Harga"} className="mt-4" />
          <div className="shadow-lg p-4 rounded-lg bg-white flex justify-between">
            <div className="font-bold">Total Harga </div>
            <div className="font-bold text-midBlue">Rp 90.0000</div>
          </div>
          <Title name={"Layanan"} className="mt-4" />
          <CardService />
        </div>
      </div>
      <Link to={"/detail-tiket"}>
        <Button name="bayar" />
      </Link>
    </div>
  );
}
