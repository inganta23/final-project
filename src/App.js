import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Navbar from "./components/Navbar";
import Tiket from "./pages/Tiket";
import Beranda from "./pages/Beranda";
import { PayTicket } from "./pages/payTicket";
import { TravelList } from "./pages/travelList";
import TiketLogin from "./pages/TiketLogin";
import { TiketDetail } from "./pages/TiketDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from 'jwt-decode'
import Logout from "./pages/Logout";

function App() {
  const [stasiun, setStasiun] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tiket, setTiket] = useState("");
  const [dataUser, setDataUser] = useState({ nama: "", email: "", nik: "" });
  
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
      const data = jwtDecode(localStorage.getItem("token")).data;
      setDataUser({
        nama: data.username,
        email: data.email,
        nik: data.nik,
      });
    }
  }, []);

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
        <Route path="logout" element={<Logout dataUser={dataUser} />} />
        <Route path="daftar" element={<Daftar />} />
        <Route
          path="beranda"
          element={<Beranda setTiket={setTiket} stasiun={stasiun} />}
        />
        <Route path="list-tiket" element={<TravelList tikets={tiket} />} />
        <Route
          path="beli-tiket/:id"
          element={
            <PayTicket
              tiket={tiket}
              dataUser={dataUser}
              setDataUser={setDataUser}
            />
          }
        />
        <Route path="tiket" element={<TiketLogin />} />
        <Route
          path="detail-tiket/:id"
          element={<TiketDetail tiket={tiket} dataUser={dataUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
