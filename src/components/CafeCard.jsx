export default function CafeCard({ nome, preco }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      backgroundColor: "#f8f0e3",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h3 style={{ margin: 0 }}>{nome}</h3>
      <p style={{ margin: 0 }}>R$ {preco}</p>
    </div>
  );
}
