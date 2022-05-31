import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="login" element={<Login />}/>
        {/* <Route path="daftar" element={<Daftar />}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
