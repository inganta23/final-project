import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Navbar from "./components/Navbar";
import Tiket from "./pages/Tiket";
import Beranda from "./pages/Beranda";
import { PayTicket } from "./pages/payTicket";
import TiketLogin from "./pages/TiketLogin";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { TravelList } from "./pages/travelList";

function App() {
 
  // const [login, setLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [nama, setNama] = useState("");
  useEffect(() => {
    refreshToken();
  }, [token]);
  // const cekToken = async () =>{
  //   try {
  //     const cek = await axios.get("http://localhost:5000/cek");
  //     setLogin(cek.data.msg);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setNama(decoded.name);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="App">
      <Navbar token={token} setToken={setToken} nama={nama} />
      <Routes>
        <Route
          path="/"
          element={
            token !== null ? (
              <h2 className="mt-[100px] text-center">Anda Sudah Login</h2>
            ) : (
              <Login setToken={setToken}/>
            )
          }
        />
        <Route path="daftar" element={<Daftar />} />
        <Route path="tiket" element={<Tiket />} />
        <Route
          path="beranda"
          element={<Beranda token={token} refreshToken={refreshToken} />}
        />
        <Route path="tickets" element={<TravelList />} />
      </Routes>
      {/* <TravelList /> */}
      {/* <PayTicket/> */}
      {/* <TiketLogin /> */}
    </div>
  );
}

export default App;
