import React from 'react'
import { CardTravel } from '../components/CardTravel'
import { CardContact } from '../components/CardContact'
import { Title } from '../components/title'
import { InputPassenger } from '../components/InputPassenger'
import { Button } from '../components/Button'

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
     <Button name={"lanjutkan"}/>
    </>
  );
}
