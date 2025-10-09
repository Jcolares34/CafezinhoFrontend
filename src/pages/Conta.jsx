import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Conta() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        console.log("Parsed user data:", parsedUser); // Debugging log
        setUserData({ name: parsedUser.name, email: parsedUser.email });
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
      }
    } else {
      console.error(
        "User data not found in localStorage. Please ensure the user is logged in and their data is stored correctly."
      );
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
            padding: "20px",
            fontFamily: "Rubik, sans-serif",
          }}
        >
          <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            <img
              src="/images/user.png"
              alt="User Icon"
              style={{ height: "24px", marginRight: "10px" }}
            />
            {userData.name || "Nome não disponível"}
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <a href="/conta" style={{ textDecoration: "none", color: "#000" }}>
                <img
                  src="/images/user.png"
                  alt="Minha Conta"
                  style={{ height: "20px", marginRight: "10px" }}
                />
                Minha conta
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                <img
                  src="/images/cadeado.png"
                  alt="Alterar Senha"
                  style={{ height: "20px", marginRight: "10px" }}
                />
                Alterar Senha
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                <img
                  src="/images/lista.png"
                  alt="Meus Pedidos"
                  style={{ height: "20px", marginRight: "10px" }}
                />
                Meus Pedidos
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "20px" }}>
          <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            <img
              src="/images/dados.png"
              alt="Minha Conta"
              style={{ height: "24px", marginRight: "10px" }}
            />
            Minha Conta
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Confirme ou edite seus dados cadastrais abaixo.
          </p>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Dados Cadastrais
            </h3>
            <p>
              <strong>Nome:</strong> {userData.name || "Nome não disponível"}
            </p>
            <p>
              <strong>Email:</strong> {userData.email || "Email não disponível"}
            </p>
            <p>
              <strong>Telefone celular:</strong> (51) 99797-8053
            </p>
          </div>
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Editar dados cadastrais
          </button>
        </main>
      </div>
    </>
  );
}