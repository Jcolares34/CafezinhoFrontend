import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Conta() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Recupera os dados do usuário diretamente da chave 'user'
    console.log("Dados do usuário no localStorage:", user); // Log para verificar os dados armazenados
    if (user) {
      setUserData(user); // Atualiza o estado com os dados do usuário
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
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px", textAlign: "left", paddingLeft: "10px", display: "flex", alignItems: "center" }}>
            <img src="/images/user.png" alt="User Icon" style={{ width: "24px", height: "24px", marginRight: "10px", paddingLeft: "8px" }} />
            {userData.nomeUsuario}
          </h2>
          <ul style={{ listStyleType: "none", padding: "10px" }}>
            <li style={{ marginBottom: "10px" }}>
              <i
                className="fas fa-user"
                style={{ marginRight: "10px" }}
              ></i>
              <img src="/images/user.png" alt="User Icon" style={{ width: "15px", height: "15px", marginRight: "10px", paddingLeft: "2px" }} />
              Minha conta
            </li>
            <li style={{ marginBottom: "10px" }}>
              <i className="fas fa-lock" style={{ marginRight: "10px" }}>
              <img src="/images/cadeado.png" alt="User Icon" style={{ width: "15px", height: "15px", marginRight: "0px", paddingLeft: "12px" }} />
              </i>
              Alterar Senha
            </li>
            <li style={{ marginBottom: "10px" }}>
              <i className="fas fa-list" style={{ marginRight: "10px" }}>
              <img src="/images/lista.png" alt="User Icon" style={{ width: "15px", height: "15px", marginRight: "0px", paddingLeft: "12px" }} />
              </i>
              Meus Pedidos
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
          <h3 style={{ fontSize: "25px", fontWeight: "bold" }}>Minha Conta</h3>
          <p style={{ marginBottom: "20px" }}>
            Confirme ou edite seus dados cadastrais abaixo.
          </p>
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Dados Cadastrais
          </h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Nome:</strong> {userData.nomeUsuario}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Email:</strong> {userData.email}
            </li>
          </ul>

          <div style={{ display: "flex", gap: "10px", marginTop: "22px" }}>
            <button style={{ backgroundColor: "#f0f0f0", border: "none", padding: "10px 20px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "5px" }}>
              <i className="fas fa-lock"></i> Alterar Senha
            </button>
            <button style={{ backgroundColor: "#000", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "5px" }}>
              <i className="fas fa-edit"></i> Editar dados cadastrais
            </button>
          </div>
        </main>
      </div>
    </>
  );
}