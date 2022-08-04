import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Navbar from "./components/Navbar";
import RiwayatTiket from "./pages/RiwayatTiket";
import Beranda from "./pages/Beranda";
import { PayTicket } from "./pages/payTicket";
import { TravelList } from "./pages/travelList";
import TiketLogin from "./pages/TiketLogin";
import Tiket from "./pages/Tiket";
import { TiketDetail } from "./pages/TiketDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Logout from "./components/Logout";
import { UserAuthentication } from "./components/UserAuthentication";

function App() {
  const [stasiun, setStasiun] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tiket, setTiket] = useState("");
  const [tglBerangkat, setTglBerangkat] = useState("")
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
        nama: data.nama_lengkap,
        email: data.email,
        nik: data.nik,
      });
    }else{
      setDataUser({ nama: "", email: "", nik: "" });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
    getStasiun();
  }, []);

  return (
    <div className="App">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        dataUser={dataUser}
      />
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Logout setIsLoggedIn={setIsLoggedIn} dataUser={dataUser} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="daftar" element={<Daftar />} />
        <Route
          index
          path="/"
          element={
            <Beranda
              setTiket={setTiket}
              stasiun={stasiun}
              setTglBerangkat={setTglBerangkat}
            />
          }
        />

        <Route
          path="list-tiket"
          element={
            <TravelList
              tikets={tiket}
              setTiketGlobal={setTiket}
              tglBerangkat={tglBerangkat}
            />
          }
        />

        {/* Private Route */}
        <Route path="/" element={<UserAuthentication />}>
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
          <Route path="riwayat" element={<RiwayatTiket />} />
          <Route path="detail-tiket/:tiketUserId" element={<TiketDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
