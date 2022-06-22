import React from 'react'

export const CardContact = ({dataUser}) => {
  return (
      <div className="shadow-lg p-4 rounded-lg bg-white text-carbonGrey">
        <p className="font-light capitalize text-sm">Nama Lengkap</p>
        <p className="font-semibold text-lg">{dataUser.nama}</p>
        <p className="font-light capitalize text-sm">alamat email</p>
        <p className="font-semibold text-lg">{dataUser.email}</p>
        <p className="font-light capitalize text-sm">NIK</p>
        <p className="font-semibold text-lg">{dataUser.nik}</p>
        <p className="font-light capitalize text-sm">
          Informasi Tiket dan konfirmasi akan dikirimkan ke detail kontak yang
          tertera
        </p>
      </div>
  );
}
