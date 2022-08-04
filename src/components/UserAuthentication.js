import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Tiket from '../pages/Tiket';

export const UserAuthentication = () => {

  const token = localStorage.getItem("token");
    console.log(token);
   return (
    <>
      {token && <Outlet />}
      {!token && <Tiket />}
    </>
   );
}
