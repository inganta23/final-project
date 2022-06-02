sprint-1/johanes/login
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";


import { PayTicket } from "./pages/payTicket";
main

function App() {
  return (
    <div className="App">
 sprint-1/johanes/login
      <Navbar />
      
      <Routes>
        <Route path="login" element={<Login />}/>
        {/* <Route path="daftar" element={<Daftar />}/> */}
      </Routes>
      

      <PayTicket/>
main
    </div>
  );
}

export default App;
