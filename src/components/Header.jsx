import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({ hideAuthButtons = false }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usersArray"); // Remove o array de usuários
    setIsLoggedIn(false);
    setMenuVisible(false);
    window.location.href = "http://localhost:3000/home"; // Redireciona para a página inicial padrão
  };

  return (
    <header
      style={{
        padding: "15px 30px",
        backgroundColor: "#4f281a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "#fff",
          fontFamily: "'Cavalier', sans-serif",
          letterSpacing: "2px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src="/images/cafecaramelologo.png"
          alt="Logo Café Caramello"
          style={{ height: "32px", width: "auto", verticalAlign: "middle" }}
        />
        Central de Pedidos Café Caramello Guaíba
      </h1>
      <nav style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <a
          href={isLoggedIn ? "http://localhost:3000/home" : "http://localhost:3000/"}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontFamily: "Rubik, sans-serif",
          }}
        >
          Home
        </a>
        {!isLoggedIn && !hideAuthButtons && (
          <>
            <a
              href="http://localhost:3000/cadastro"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              Cadastrar
            </a>
            <a
              href="http://localhost:3000/login"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Rubik, sans-serif",
              }}
            >
              Entrar
            </a>
          </>
        )}
        {isLoggedIn && (
          <div style={{ position: "relative" }}>
            <img
              src="/images/user_icon.png"
              alt="User Icon"
              style={{ height: "32px", width: "32px", cursor: "pointer" }}
              onClick={toggleMenu}
            />
            {menuVisible && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: "0",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  gap: "10px",
                  zIndex: 1000,
                }}
              >
                <a
                  href="http://localhost:3000/conta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                    color: "#4f281a",
                    fontFamily: "Rubik, sans-serif",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#f9f9f9",
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Minha Conta
                </a>
                <button
                  onClick={handleLogout}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#4f281a",
                    fontFamily: "Rubik, sans-serif",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#f9f9f9",
                    fontSize: "16px",
                  }}
                >
                  <img
                    src="/images/sair.png"
                    alt="Logout Icon"
                    style={{ height: "20px", width: "20px" }}
                  />
                  Sair
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
