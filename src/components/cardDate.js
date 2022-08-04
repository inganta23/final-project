import React from 'react'
import { instanceAxios } from '../api/instanceAxios';

export const CardDate = ({
  date,
  day,
  setTiketGlobal,
  dataTiket,
  dateNow,
  setDateNow,
}) => {
  const handleClick = async () => {
    // setTiketGlobal(date)
    const tanggal_berangkat = `${date}-07-2022`;
    const res = await instanceAxios.get(
      `tiket?tgl_berangkat=${tanggal_berangkat}&stasiun_berangkat=${dataTiket?.stasiun_berangkat}&stasiun_tujuan=${dataTiket?.stasiun_tujuan}&kelas=${dataTiket?.kelas_kereta_api}`
    );
    setTiketGlobal(res.data.data);
    setDateNow(date);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={` w-full mx-2 text-center rounded-lg shadow-lg py-1 cursor-pointer capitalize ${
        date !== dateNow.substring(0, 2)
          ? "bg-white text-midBlue"
          : "bg-midBlue text-white"
      }`}
    >
      <p className="font-medium">{day}</p>
      <p>{date}</p>
    </div>
  );
};
