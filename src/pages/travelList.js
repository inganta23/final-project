import React from 'react'
import { CardDate } from '../components/cardDate'
import { CardTravelList } from '../components/cardTravelList'

export const TravelList = () => {
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

          <div className='mt-4'>
            <CardTravelList />
            <CardTravelList />
            <CardTravelList />
            <CardTravelList />
          </div>
        </div>
      </div>
    </div>
  );
}