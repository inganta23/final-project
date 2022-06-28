import React from 'react'
import { instanceAxios } from '../api/instanceAxios';

export const CardDate = ({ date, day, setTiketGlobal, dataTiket }) => {
  const handleClick = async () => {
    // setTiketGlobal(date)
     const tanggal_berangkat = `${date}-07-2022`;
     const res = await instanceAxios.get(
       `tiket?tgl_berangkat=${tanggal_berangkat}&stasiun_berangkat=${dataTiket?.stasiun_berangkat}&stasiun_tujuan=${dataTiket?.stasiun_tujuan}&kelas=${dataTiket?.kelas_kereta_api}`
     );
      setTiketGlobal(res.data.data);
  };

  return (
    <div
      onClick={() => handleClick()}
      className="bg-midBlue text-white w-full mx-2 text-center rounded-lg shadow-lg py-1 cursor-pointer capitalize"
    >
      <p className='font-medium'>{day}</p>
      <p>{date}</p>
    </div>
  );
};
