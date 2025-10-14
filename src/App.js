import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Login from "./pages/Login";
import Pedidos from "./pages/Pedidos";
import Itens from "./pages/Itens";
import HomeLogged from "./pages/HomeLogged";
import Conta from "./pages/Conta";
import AlterarSenha from "./pages/AlterarSenha";
import EditarDados from "./pages/EditarDados";
import MeusPedidos from "./pages/MeusPedidos";

function App() {
  useEffect(() => {
    localStorage.removeItem("usersArray"); // Remove o array de usuários ao carregar ou atualizar a página
  }, []);

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
        <Route path="/conta/alterarsenha" element={<AlterarSenha />} />
        <Route path="/conta/editardados" element={<EditarDados />} />
        <Route path="/conta/meuspedidos" element={<MeusPedidos />} />
      </Routes>
    </Router>
  );
}

export default App;
