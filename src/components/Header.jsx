import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{
      padding: "15px 30px",
  backgroundColor: "#4f281a",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
  <h1 style={{ margin: 0, color: '#fff', fontFamily: "'Cavalier', sans-serif", letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img src="/images/cafecaramelologo.png" alt="Logo Café Caramello" style={{ height: '32px', width: 'auto', verticalAlign: 'middle' }} />
    Central de Pedidos Café Caramello Guaíba
  </h1>
      <nav>
  <Link to="/" style={{ marginRight: "15px", textDecoration: "none", color: "#fff", fontFamily: 'Rubik, sans-serif' }}>Home</Link>
  <Link to="/cadastro" style={{ marginRight: "15px", textDecoration: "none", color: "#fff", fontFamily: 'Rubik, sans-serif' }}>Cadastro</Link>
  <Link to="/entrar" style={{ marginRight: "15px", textDecoration: "none", color: "#fff", fontFamily: 'Rubik, sans-serif' }}>Entrar</Link>
  <Link to="/pedidos" style={{ textDecoration: "none", color: "#fff", fontFamily: 'Rubik, sans-serif' }}>Pedidos</Link>
      </nav>
    </header>
  );
}
