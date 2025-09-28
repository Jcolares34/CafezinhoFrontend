import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{
      padding: "15px 30px",
      backgroundColor: "#f1c40f",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <h1 style={{ margin: 0 }}>☕ Caramello Café</h1>
      <nav>
        <Link to="/" style={{ marginRight: "15px", textDecoration: "none", color: "#000" }}>Home</Link>
        <Link to="/clientes" style={{ marginRight: "15px", textDecoration: "none", color: "#000" }}>Clientes</Link>
        <Link to="/itens" style={{ marginRight: "15px", textDecoration: "none", color: "#000" }}>Itens</Link>
        <Link to="/pedidos" style={{ textDecoration: "none", color: "#000" }}>Pedidos</Link>
      </nav>
    </header>
  );
}
