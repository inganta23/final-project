import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Daftar from "./components/Daftar"
import Navbar from "./components/Navbar";
import Tiket from "./components/Tiket";
import Beranda from "./components/Beranda";
import { PayTicket } from "./pages/payTicket";


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="daftar" element={<Daftar />}/>
        <Route path="tiket" element={<Tiket />} />
        <Route path="beranda" element={<Beranda />}/>
      </Routes>     
      {/* <PayTicket/> */}
    </div>
  );
}

export default App;
