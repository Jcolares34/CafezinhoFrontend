import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Entrar from "./pages/Entrar";
import Pedidos from "./pages/Pedidos";
import Clientes from "./pages/Clientes";
import Itens from "./pages/Itens";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/itens" element={<Itens />} />
      </Routes>
    </Router>
  );
}

export default App;
