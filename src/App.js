import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar"
import Navbar from "./components/Navbar";
import Tiket from "./pages/Tiket";
import Beranda from "./pages/Beranda";
import { PayTicket } from "./pages/payTicket";
import { TravelList } from "./pages/travelList";
import TiketLogin from "./pages/TiketLogin";
import { TiketDetail } from "./pages/TiketDetail";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="daftar" element={<Daftar />} />
        {/* <Route path="tiket" element={<Tiket />} /> */}
        <Route path="beranda" element={<Beranda />} />
        <Route path="list-tiket" element={<TravelList />} />
        <Route path="beli-tiket" element={<PayTicket />} />
        <Route path="tiket" element={<TiketLogin />} />
        <Route path="detail-tiket" element={<TiketDetail />} />
      </Routes>
    </div>
  );
}

export default App;
