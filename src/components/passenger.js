import React from 'react'

export const Passenger = () => {
  return (
    <>
      <div className="shadow-lg p-4 rounded-lg bg-white">
        <p className="border-b-2">Daftar Penumpang</p>
        <div className="flex">
          <div className="flex-1">
            <p>1. Ari Cahyono</p>
          </div>
          <div className="flex-1 text-orange-500 font-bold text-right ">
            PRE-2 / 1D
          </div>
        </div>
      </div>
    </>
  );
}
