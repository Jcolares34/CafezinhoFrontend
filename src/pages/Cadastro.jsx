import Header from '../components/Header';

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
        <form style={{
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          padding: '16px 32px',
          width: '100%',
          maxWidth: '450px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}>
          <h2 style={{
            textAlign: 'center',
            color: '#95553e',
            fontWeight: 700,
            fontSize: '2rem',
            marginBottom: 10
          }}>Cadastro</h2>
          <label style={{fontWeight: 500}}>E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" style={{padding: '10px', borderRadius: 5, border: '1px solid #ccc'}} />
          <label style={{fontWeight: 500}}>Usuário</label>
          <input type="text" placeholder="Digite seu nome de usuário" style={{padding: '10px', borderRadius: 5, border: '1px solid #ccc'}} />
          <label style={{fontWeight: 500}}>Senha</label>
          <input type="password" placeholder="Digite sua senha" style={{padding: '10px', borderRadius: 5, border: '1px solid #ccc'}} />
          <label style={{fontWeight: 500}}>Confirme a senha</label>
          <input type="password" placeholder="Confirme sua senha" style={{padding: '10px', borderRadius: 5, border: '1px solid #ccc'}} />
          <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <input type="checkbox" id="ofertas" />
            <label htmlFor="ofertas" style={{fontSize: 14}}>Quero receber novidades e ofertas.</label>
          </div>
          <button type="submit" style={{
            background: '#95553e',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '12px 0',
            fontWeight: 600,
            fontSize: 18,
            marginTop: 10,
            cursor: 'pointer'
          }}>Criar conta</button>
          <hr style={{margin: '18px 0 0 0'}} />
          <p style={{fontSize: 13, color: '#444', textAlign: 'center', marginTop: 10}}>
            Ao criar uma conta, você concorda com nossos <a href="#" style={{color: '#2340a0'}}>Termos de Serviço</a> e <a href="#" style={{color: '#2340a0'}}>Política de Privacidade</a>.
          </p>
        </form>
      </div>
    </>
  );
}
