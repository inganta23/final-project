import React from 'react'
import {FaSignOutAlt} from 'react-icons/fa'
import swal from 'sweetalert'

const Logout = ({dataUser, setIsLoggedIn}) => {
    const handleLogout = ( ) =>{
   swal({
      title: "Apakah anda yakin Keluar?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willBuy) => {
      if (willBuy) {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      } 
    });
    }

    
  return (
    <div className='mt-[100px] flex justify-center items-center h-[85vh]'>
        <div className='w-1/2 bg-[#FFFEFE] text-[#605F5F] rounded-xl p-5'>
            <div className='flex justify-between border-b-2 border-b-slate-400 py-4'>
                <p className='text-2xl'>Nama Lengkap</p>
                <p className='text-2xl'>{dataUser.nama}</p>
            </div>
            <div className='flex justify-between border-b-2 border-b-slate-400 py-4'>
                <p className='text-2xl'>Alamat Email</p>
                <p className='text-2xl'>{dataUser.email}</p>
            </div>
            <div className='flex justify-end py-4'>
                <p className='text-2xl flex items-center cursor-pointer' onClick={handleLogout}>Keluar<span className='ml-5'><FaSignOutAlt size={30}/></span></p>
            </div>
        </div>
    </div>
  )
}

export default Logout