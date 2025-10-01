
import { useEffect, useState } from "react";
import axios from "axios";
// import CafeCard from "../components/CafeCard";
import Header from "../components/Header";

// Adicione a imagem em public/images/cafecaramello-bg.jpg (ou .png)

export default function Home() {

  // Produtos fictícios para exibição
  const itens = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    nome: `Produto ${i + 1}`,
    preco: 35.00,
  }));

  return (
    <>
      <Header />
      <div style={{
        width: '100%',
        minHeight: '320px',
        backgroundImage: 'url(/images/cafecaramello-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          background: 'rgba(252, 246, 239, 0.85)',
          color: '#4f281a',
          padding: '32px 24px',
          borderRadius: 12,
          maxWidth: 600,
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
        }}>
          <h2 style={{ fontSize: 32, marginBottom: 12, fontWeight: 700, letterSpacing: 1 }}>O que é Café Caramello?</h2>
          <p style={{ fontSize: 18, lineHeight: 1.5 }}>
            Café Caramello é uma linha exclusiva de cremes de café para comer de colher, passar no pão, frutas, sobremesas ou misturar em bebidas. Experimente o sabor e a cremosidade que conquistam apaixonados por café em todo o Brasil!
          </p>
        </div>
      </div>
  <div style={{ width: '100%', minHeight: '60vh', background: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '0', marginTop: 0 }}>
        {/* Sidebar de filtros */}
        <aside style={{
          width: 260,
          minWidth: 200,
          background: '#fff',
          borderRight: '1.5px solid #e0d6c8',
          padding: '0 0 24px 0',
          marginLeft: 0,
          marginRight: 32,
          height: 'fit-content',
          alignSelf: 'flex-start',
          position: 'sticky',
          top: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop: 48
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 20, marginBottom: 18, color: '#222' }}>FILTROS</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>PROMO</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>PRONTA ENTREGA</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>DISCO DE VINIL</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>RARIDADES</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>ARTISTAS</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>PRIDE - URBAN OUTFITTERS</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>CDS</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>FITA CASSETE</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>MERCHANDISING</li>
            <li style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 0 }}>REVISTAS</li>
          </ul>
        </aside>
        {/* Grid de produtos */}
        <div style={{ flex: 1, marginTop: 0 }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: 28,
            marginBottom: 24,
            color: '#4f281a',
            letterSpacing: 1,
            marginTop: 0,
            textAlign: 'center',
            width: '100%',
            gridColumn: '1 / -1'
          }}>Produtos em destaque</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '32px',
            padding: '0 32px 32px 0',
          }}>
            {itens.slice(0, 8).map((item, idx) => (
              <div key={item.id} style={{
                background: '#faf7f3',
                border: '1.5px solid #e0d6c8',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 18,
                position: 'relative',
                minHeight: 220,
              }}>
                <div style={{
                  width: 120,
                  height: 120,
                  background: '#e0d6c8',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#4f281a',
                  marginBottom: 16,
                }}>{`imagem ${idx + 1}`}</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#4f281a', textAlign: 'center', marginBottom: 8 }}>{item.nome}</div>
                <div style={{ fontSize: 22, color: '#4f281a', fontWeight: 700, marginBottom: 6 }}>
                  R$ {item.preco.toFixed(2)}
                </div>
                <button style={{
                  background: '#4f281a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '10px 0',
                  width: '100%',
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: 'pointer',
                  marginTop: 'auto',
                  transition: 'background 0.2s',
                }}
                  onClick={() => alert(`Produto "${item.nome}" adicionado ao carrinho!`)}
                >Adicionar ao carrinho</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
