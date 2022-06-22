import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Navbar from "./components/Navbar";
import RiwayatTiket from "./pages/RiwayatTiket";
import Beranda from "./pages/Beranda";
import { PayTicket } from "./pages/PayTicket";
import { TravelList } from "./pages/TravelList";
import TiketLogin from "./pages/TiketLogin";
import Tiket from "./pages/Tiket";
import { TiketDetail } from "./pages/TiketDetail";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [stasiun, setStasiun] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tiket, setTiket] = useState('');
  const getStasiun = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/v1/stasiun/");
      setStasiun(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
    getStasiun();
  }, []);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="daftar" element={<Daftar />} />
        <Route path="tiketd" element={<Tiket  />} />
        <Route path="beranda" element={<Beranda setTiket={setTiket} stasiun={stasiun}/>} />
        <Route path="list-tiket" element={<TravelList tikets={tiket}/>} />
        <Route path="beli-tiket/:id" element={<PayTicket tiket={tiket}/>} />
        <Route path="tiket" element={<TiketLogin />} />
        <Route path="riwayat" element={<RiwayatTiket />} />
      <Route path="detail-tiket/:tiketUserId" element={<TiketDetail />} />
      </Routes>
    </div>
  );
}

export default App;
