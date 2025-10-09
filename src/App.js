import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Login from "./pages/Login";
import Pedidos from "./pages/Pedidos";
import Itens from "./pages/Itens";
import HomeLogged from "./pages/HomeLogged";
import Conta from "./pages/Conta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeLogged />} />
        <Route path="/cadastro" element={<Clientes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/itens" element={<Itens />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </Router>
  );
}

export default App;
