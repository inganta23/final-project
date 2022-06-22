import React from 'react'
import {FaSignOutAlt} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'

const Logout = ({dataUser}) => {
    const handleLogout = ( ) =>{
        console.log('log')
    }
  return (
    <div className='mt-[100px] flex justify-center items-center h-[85vh]'>
        <div className='w-1/2 bg-slate-500 text-white rounded-xl p-5'>
            <div className='flex justify-between border-b-2 border-b-slate-400 py-4'>
                <p className='text-2xl'>Nama Lengkap</p>
                <p className='text-2xl'>{dataUser.nama}</p>
            </div>
            <div className='flex justify-between border-b-2 border-b-slate-400 py-4'>
                <p className='text-2xl'>Alamat Email</p>
                <p className='text-2xl'>{dataUser.email}</p>
            </div>
            <div className='flex justify-end border-b-2 border-b-slate-400 py-4'>
                <p className='text-2xl flex items-center' >Ganti Kata Sandi<span className='ml-5'><FaChevronRight size={30} /></span></p>
            </div>
            <div className='flex justify-end py-4'>
                <p className='text-2xl flex items-center cursor-pointer' onClick={handleLogout}>Keluar<span className='ml-5'><FaSignOutAlt size={30}/></span></p>
            </div>
        </div>
    </div>
  )
}

export default Logout