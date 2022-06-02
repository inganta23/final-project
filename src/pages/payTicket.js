import React from 'react'
import { CardTravel } from '../components/cardTravel'
import { CardService } from '../components/cardService'
import { Passenger } from '../components/passenger'
import { Title } from '../components/title'
import { Button } from '../components/button'

export const PayTicket = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-3/5">
          <Title name={"Kereta Api"} />
          <CardTravel />
          <Title name={"Daftar Penumpang"} />
          <Passenger />
          <Title name={"Detail Harga"} />
          <div className="shadow-lg p-4 rounded-lg bg-white flex justify-between">
            <div className='font-bold'>Total Harga </div>
            <div className='font-bold text-midBlue'>Rp 90.0000</div>
          </div>
          <Title name={"Layanan"} />
          <CardService />
        </div>
      </div>
      <Button name="bayar" />
    </div>
  );
}
