import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData); // Log para verificar o envio do formulário
    setMessage("Loading...");

    axios
      .post(`${API_BASE_URL}/auth/login`, formData)
      .then((response) => {
        const { token, email: userEmail, nomeUsuario } = response.data; // Ajusta para usar 'nomeUsuario' conforme o exemplo fornecido

        // Salvar token no localStorage
        localStorage.setItem("token", token);

        // Salvar dados do usuário no localStorage
        localStorage.setItem("user", JSON.stringify({ email: userEmail, nomeUsuario }));

        // Redirecionar para /home
        navigate("/home");
      })
      .catch((err) => {
        console.error("Erro ao fazer login:", err);
        setMessage("Erro ao fazer login. Verifique suas credenciais.");
      });
  };

  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "100vh",
          background: "#e6e4e3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "24px 32px",
            width: "100%",
            maxWidth: "450px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#95553e",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: 10,
            }}
          >
            Login
          </h2>
          <label style={{ fontWeight: 500 }}>E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            style={{
              padding: "10px",
              borderRadius: 5,
              border: "1px solid #ccc",
            }}
            required
          />
          <label style={{ fontWeight: 500 }}>Senha</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
            style={{
              padding: "10px",
              borderRadius: 5,
              border: "1px solid #ccc",
            }}
            required
          />
          <button
            onClick={handleSubmit} // Altera para disparar a função diretamente no clique
            style={{
              background: "#95553e",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "12px 0",
              fontWeight: 600,
              fontSize: 18,
              marginTop: 10,
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
          <hr style={{ margin: "18px 0 0 0" }} />
          <p
            style={{
              fontSize: 13,
              color: "#444",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Não tem uma conta?{" "}
            <a href="/cadastro" style={{ color: "#95553e" }}>
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </>
  );
}