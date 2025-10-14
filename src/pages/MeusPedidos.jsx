import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function MeusPedidos() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserData(user);
    }
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: "flex", marginTop: "20px" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "250px",
            borderRight: "1px solid #ddd",
            padding: "10px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "left",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/images/user.png"
              alt="User Icon"
              style={{
                width: "24px",
                height: "24px",
                marginRight: "10px",
                paddingLeft: "8px",
              }}
            />
            {userData.nomeUsuario}
          </h2>
          <ul style={{ listStyleType: "none", padding: "10px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="http://localhost:3000/conta"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src="/images/user.png"
                  alt="User Icon"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "10px",
                    paddingLeft: "2px",
                  }}
                />
                Minha conta
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="http://localhost:3000/conta/alterarsenha"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src="/images/cadeado.png"
                  alt="Lock Icon"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "10px",
                    paddingLeft: "2px",
                  }}
                />
                Alterar Senha
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="http://localhost:3000/conta/meuspedidos"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src="/images/lista.png"
                  alt="List Icon"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "10px",
                    paddingLeft: "2px",
                  }}
                />
                Meus Pedidos
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Meus Pedidos</h3>
          <p style={{ marginBottom: "20px" }}>
            Aqui estão os seus pedidos realizados.
          </p>
          {/* Add content for displaying orders here */}
        </main>
      </div>
    </>
  );
}