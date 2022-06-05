import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar"
import Navbar from "./components/Navbar";
import Tiket from "./pages/Tiket";
import Beranda from "./pages/Beranda";
import { PayTicket } from "./pages/PayTicket";
import { TravelList } from "./pages/TravelList";
import TiketLogin from "./pages/TiketLogin";


function App() {
  return (
    <div className="App">
      <Navbar /> 
      {/* <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="daftar" element={<Daftar />}/>
        <Route path="tiket" element={<Tiket />} />
        <Route path="beranda" element={<Beranda />}/>
      </Routes>      */}
      {/* <TiketLogin /> */}
      <div className="mt-24"></div>
      <PayTicket/>
      <TravelList />
    </div>
  );
}

export default App;
