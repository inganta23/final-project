import React from 'react'
import { CardTravel } from '../components/cardTravel'
import { CardContact } from '../components/cardContact'
import { Title } from '../components/title'
import { InputPassenger } from '../components/inputPassenger'

export const TravelDetails = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/5">
          <Title name={"Detail Perjalanan"} />
          <CardTravel />
          <Title name={"Detail Kontak"} className="mt-4" />
          <CardContact />
          <Title name={"Detail Penumpang"} className="mt-4" />
          <div className='className="shadow-lg p-4 rounded-lg bg-white mb-4'>
            <InputPassenger passengerId={1} />
            <InputPassenger passengerId={2} />
            <InputPassenger passengerId={3} />
            <InputPassenger passengerId={4} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className='w-2/5'>
          <button className="rounded-lg bg-orange-500 text-white py-2 px-4 w-full">
            Lanjutkan
          </button>
        </div>
      </div>
    </>
  );
}
