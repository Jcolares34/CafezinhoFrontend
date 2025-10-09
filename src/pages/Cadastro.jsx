import Header from '../components/Header';
import '../styles/formStyles.css';

export default function Cadastro() {
  return (
    <>
      <Header />
      <div style={{
        minHeight: '100vh',
        background: '#e6e4e3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0
      }}>
        <form className="form-container">
          <h2>Cadastro</h2>
          <label>E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" />
          <label>Usuário</label>
          <input type="text" placeholder="Digite seu nome de usuário" />
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
          <label>Confirme a senha</label>
          <input type="password" placeholder="Confirme sua senha" />
          <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <input type="checkbox" id="ofertas" />
            <label htmlFor="ofertas" style={{fontSize: 14}}>Quero receber novidades e ofertas.</label>
          </div>
          <button type="submit">Criar conta</button>
          <hr />
          <p>
            Ao criar uma conta, você concorda com nossos <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a>.
          </p>
        </form>
      </div>
    </>
  );
}
