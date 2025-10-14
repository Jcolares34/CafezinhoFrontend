import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function EditarDados() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Recupera os dados do usuário diretamente da chave 'user'
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
            <img src={`${process.env.PUBLIC_URL}/images/user.png`} alt="User Icon" style={{ width: "24px", height: "24px", marginRight: "10px", paddingLeft: "8px" }} />
            {userData.nomeUsuario}
          </h2>
          <ul style={{ listStyleType: "none", padding: "10px" }}>
            <li style={{ marginBottom: "10px" }}>
              <a href="http://localhost:3000/conta" style={{ textDecoration: "none", color: "inherit" }}>
                <i
                  className="fas fa-user"
                  style={{ marginRight: "10px" }}
                ></i>
                <img src={`${process.env.PUBLIC_URL}/images/user.png`} alt="User Icon" style={{ width: "15px", height: "15px", marginRight: "10px", paddingLeft: "2px" }} />
                Minha conta
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="http://localhost:3000/conta/alterarsenha" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-lock" style={{ marginRight: "10px" }}>
                <img src={`${process.env.PUBLIC_URL}/images/cadeado.png`} alt="User Icon" style={{ width: "15px", height: "15px", marginRight: "0px", paddingLeft: "12px" }} />
                </i>
                Alterar Senha
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="http://localhost:3000/conta/meuspedidos" style={{ textDecoration: "none", color: "inherit" }}>
                <i className="fas fa-list" style={{ marginRight: "10px" }}>
                <img src={`${process.env.PUBLIC_URL}/images/lista.png`} alt="User Icon" style={{ width: "15px", height: "15px", marginRight: "0px", paddingLeft: "12px" }} />
                </i>
                Meus Pedidos
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "0 20px", fontFamily: "Arial, sans-serif", textAlign: "left", marginLeft: "0" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Atualizar cadastro</h3>
          <p style={{ marginBottom: "20px" }}>Atualize os seus dados pessoais abaixo.</p>
          <form style={{ maxWidth: "600px", margin: "0", textAlign: "left" }}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>E-mail</label>
              <input type="email" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Nome completo</label>
              <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>CPF</label>
              <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Sexo</label>
              <select style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}>
                <option>- Selecione -</option>
                <option>Masculino</option>
                <option>Feminino</option>
                <option>Outro</option>
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Celular</label>
              <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Telefone fixo</label>
              <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
            </div>
            <button style={{ backgroundColor: "#000", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Salvar</button>
          </form>
        </main>
      </div>
    </>
  );
}