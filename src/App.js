import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar"
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="daftar" element={<Daftar />}/>
      </Routes>
      
    </div>
  );
}

export default App;
