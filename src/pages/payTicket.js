import React from 'react'
import { CardTravel } from '../components/CardTravel'
import { CardService } from '../components/CardService'
import { Passenger } from '../components/Passenger'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { CardContact } from '../components/CardContact'

export const PayTicket = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-3/5">
          <Title name={"Detail Perjalanan"} />
          <CardTravel />
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
      <Button name="bayar" />
    </div>
  );
}
