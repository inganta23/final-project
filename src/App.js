import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Daftar from "./components/Daftar"
import Navbar from "./components/Navbar";
import { PayTicket } from "./pages/payTicket";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="daftar" element={<Daftar />}/>
      </Routes> 
      

      {/* <PayTicket/> */}

    </div>
  );
}

export default App;
