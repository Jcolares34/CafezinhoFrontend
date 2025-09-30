import Header from '../components/Header';

export default function Entrar() {
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
          padding: '24px 32px',
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
          }}>Login</h2>
          <label style={{fontWeight: 500}}>E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" style={{padding: '10px', borderRadius: 5, border: '1px solid #ccc'}} />
          <label style={{fontWeight: 500}}>Senha</label>
          <input type="password" placeholder="Digite sua senha" style={{padding: '10px', borderRadius: 5, border: '1px solid #ccc'}} />
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
          }}>Entrar</button>
          <hr style={{margin: '18px 0 0 0'}} />
          <p style={{fontSize: 13, color: '#444', textAlign: 'center', marginTop: 10}}>
            Não tem uma conta? <a href="/cadastro" style={{color: '#95553e'}}>Cadastre-se</a>
          </p>
        </form>
      </div>
    </>
  );
}
