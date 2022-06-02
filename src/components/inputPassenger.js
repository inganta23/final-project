import React from 'react'

export const InputPassenger = ({passengerId}) => {
  return (
    <div className='mb-2'>
      <p className="font-bold">Penumpang {passengerId}</p>
      <div className="flex">
        <div className="w-1/6">
          <p className="font-semibold text-sm">Tipe ID</p>
          <p className="text-underline">KTP</p>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">No ID</p>
          <input
            type="text"
            className="border-b-2 border-midBlue focus:outline-none w-5/6"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">Nama Lengkap</p>
          <input
            type="text"
            className="border-b-2 border-midBlue focus:outline-none w-5/6"
          />
        </div>
      </div>
      <p className="text-carbonGrey font-light text-xs mt-1">
        Penumpang dibawah 18 tahun dapat mengisi dengan nomor induk kependudukan
        (NIK)
      </p>
    </div>
  );
}
