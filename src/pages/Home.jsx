
import { useEffect, useState } from "react";
import axios from "axios";
import CafeCard from "../components/CafeCard";
import Header from "../components/Header";

export default function Home() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/itens")
      .then(res => setItens(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxHeight: "80vh",
          overflowY: "scroll"
        }}>
          {itens.map(item => (
            <CafeCard key={item.id} nome={item.nome} preco={item.preco} />
          ))}
        </div>
      </div>
    </>
  );
}
