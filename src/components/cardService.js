import React from 'react'
import { CgCheckO } from "react-icons/cg";

export const CardService = () => {
  return (
    <div className="shadow-lg p-4 rounded-lg bg-white">
      <div className="text-center text-sm px-8 text-carbonGrey">
        <p className=" border-b-2">
          Dengan ini menyatakan saya sutuju dan mematuhi syarat dan ketentuan
          pemesanan{" "}
          <span className="font-bold text-black">PT Kereta Api Indonesia</span>
          (Persero) termasuk pmebayaran dan mematuhi semua peraturan dan batasan
          mengenai ketersediaan tarif dan layanan.
        </p>
        <p className="flex justify-center">
          <CgCheckO className="text-xl" /> Saya telah membaca dan setuju
          terhadap<span className='text-midBlue pl-1'>Syarat dan ketentuan pembelian tiket</span>
        </p>
      </div>
    </div>
  );
}
