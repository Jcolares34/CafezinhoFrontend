import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header';
import { API_BASE_URL } from "../config/api";
import "../styles/formStyles.css";

export default function Clientes() {
	const [formData, setFormData] = useState({
		email: "",
		nomeUsuario: "",
		senha: "",
		confirmacaoSenha: "",
		receberNovidades: false,
	});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Verifica se todos os campos estão preenchidos
		if (!formData.email || !formData.nomeUsuario || !formData.senha || !formData.confirmacaoSenha) {
			setMessage(<span className="message-error">Todos os campos devem ser preenchidos.</span>);
			return;
		}

		// Verifica se as senhas coincidem
		if (formData.senha !== formData.confirmacaoSenha) {
			setMessage(<span className="message-error">As senhas não coincidem.</span>);
			return;
		}

		console.log("submit!"); // Verifica se o evento está sendo disparado

		const payload = {
			email: formData.email,
			nomeUsuario: formData.nomeUsuario,
			senha: formData.senha,
			confirmacaoSenha: formData.confirmacaoSenha,
			receberNovidades: formData.receberNovidades,
		};

		console.log("Payload enviado:", payload); // Log para verificar o payload

		setMessage("Loading...");

		axios
			.post(`${API_BASE_URL}/auth/register`, JSON.stringify(payload), {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log("Resposta do backend:", response.data); // Log para verificar a resposta do backend
				setMessage(<span className="message-success">Usuário cadastrado!</span>);
			})
			.catch((error) => {
				console.error("Erro ao cadastrar:", error.response?.data); // Log para verificar o erro do backend
				if (error.response?.data?.message === "Email already registered") {
					setMessage(<span className="message-error">Este e-mail já está cadastrado.</span>);
				} else {
					setMessage(
						<span className="message-error">{
							error.response?.data?.message || "E-mail já cadastrado."
						}</span>
					);
				}
			});
	};

	useEffect(() => {
		console.log("Payload enviado:", formData);
	}, [formData]);

	return (
		<>
			<Header />
			<div style={{
				minHeight: "100vh",
				background: "#e6e4e3",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: 0,
				margin: 0,
			}}>
				<form className="form-container" onSubmit={handleSubmit}>
					<h2>Cadastro de Usuário</h2>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<label>Nome de Usuário:</label>
					<input
						type="text"
						name="nomeUsuario"
						value={formData.nomeUsuario}
						onChange={handleChange}
						required
					/>
					<label>Senha:</label>
					<input
						type="password"
						name="senha"
						value={formData.senha}
						onChange={handleChange}
						required
					/>
					<label>Confirmação de Senha:</label>
					<input
						type="password"
						name="confirmacaoSenha"
						value={formData.confirmacaoSenha}
						onChange={handleChange}
						required
					/>
					<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
						<input
							type="checkbox"
							name="receberNovidades"
							checked={formData.receberNovidades}
							onChange={handleChange}
						/>
						<label style={{ fontSize: 14 }}>Quero receber novidades e ofertas.</label>
					</div>
					<button type="submit">Cadastrar</button>
					{message && <p className="message-error">{message}</p>}
				</form>
			</div>
		</>
	);
}
