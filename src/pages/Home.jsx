import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeFilter, setActiveFilter] = useState('Creme de Café'); // Define Creme de Café como padrão

  const handleAddToCart = (item) => {
    setSelectedProduct(item);
    setQuantity(1);
    setModalOpen(true);
  };

  const handleConfirmAddToCart = () => {
    // Aqui você pode adicionar a lógica para adicionar ao carrinho
    alert(`${quantity} unidade(s) de ${selectedProduct.nome} adicionado(s) ao carrinho!`);
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handlePotes800mlClick = () => {
    const potes800mlSection = document.getElementById('potes800ml-section');
    if (potes800mlSection) {
      potes800mlSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterClick = (filter) => {
    if (activeFilter !== filter) {
      setActiveFilter(filter); // Atualiza o filtro apenas se for diferente do atual
    }
  };

  // Produtos fictícios para exibição
  const itens = [
    { id: 1, nome: "Tradicional", preco: 35.00 },
    { id: 2, nome: "Amarula", preco: 35.00 },
    { id: 3, nome: "Black 50%", preco: 35.00 },
    { id: 4, nome: "Black 75%", preco: 35.00 },
    { id: 5, nome: "Baunilha", preco: 35.00 },
    { id: 6, nome: "Espresso", preco: 35.00 },
    { id: 7, nome: "Caramelo", preco: 35.00 },
    { id: 8, nome: "Menta", preco: 35.00 },
    { id: 9, nome: "Pote 800ml", preco: 70.00 }, // Novo item
  ];

  const Modal = () => modalOpen ? (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '24px',
        borderRadius: '12px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <h3 style={{ margin: 0, color: '#4f281a', fontFamily: 'Rubik, sans-serif' }}>
          {selectedProduct?.nome}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            style={{
              background: '#4f281a',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >-</button>
          <span style={{ fontSize: '20px', color: '#4f281a', fontFamily: 'Rubik, sans-serif' }}>
            {quantity}
          </span>
          <button 
            onClick={() => setQuantity(q => q + 1)}
            style={{
              background: '#4f281a',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >+</button>
        </div>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <button 
            onClick={() => setModalOpen(false)}
            style={{
              flex: 1,
              padding: '10px',
              border: '2px solid #4f281a',
              borderRadius: '6px',
              background: 'transparent',
              color: '#4f281a',
              cursor: 'pointer',
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 600
            }}
          >
            Cancelar
          </button>
          <button 
            onClick={handleConfirmAddToCart}
            style={{
              flex: 1,
              padding: '10px',
              border: 'none',
              borderRadius: '6px',
              background: '#4f281a',
              color: '#fff',
              cursor: 'pointer',
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 600
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  ) : null;

  const ModalPotes800ml = () => modalOpen && selectedProduct?.nome === 'Pote 800ml' ? (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '24px',
        borderRadius: '12px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <h3 style={{ margin: 0, color: '#4f281a', fontFamily: 'Rubik, sans-serif' }}>
          {selectedProduct?.nome}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            style={{
              background: '#4f281a',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >-</button>
          <span style={{ fontSize: '20px', color: '#4f281a', fontFamily: 'Rubik, sans-serif' }}>
            {quantity}
          </span>
          <button 
            onClick={() => setQuantity(q => q + 1)}
            style={{
              background: '#4f281a',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >+</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
          <label style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 600, color: '#4f281a' }}>Escolha o sabor:</label>
          <select style={{
            padding: '8px',
            borderRadius: '6px',
            border: '1.5px solid #e0d6c8',
            fontFamily: 'Rubik, sans-serif',
            fontSize: '16px',
            color: '#4f281a'
          }}>
            {itens.map(item => (
              <option key={item.id} value={item.nome}>{item.nome}</option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <button 
            onClick={() => setModalOpen(false)}
            style={{
              flex: 1,
              padding: '10px',
              border: '2px solid #4f281a',
              borderRadius: '6px',
              background: 'transparent',
              color: '#4f281a',
              cursor: 'pointer',
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 600
            }}
          >Cancelar</button>
          <button 
            onClick={handleConfirmAddToCart}
            style={{
              flex: 1,
              padding: '10px',
              border: 'none',
              borderRadius: '6px',
              background: '#4f281a',
              color: '#fff',
              cursor: 'pointer',
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 600
            }}
          >Confirmar</button>
        </div>
      </div>
    </div>
  ) : null;

  useEffect(() => {
    // Garante que a seção Creme de Café esteja aberta ao carregar o site
    setActiveFilter('Creme de Café');
  }, []);

  return (
    <>
      <Modal />
      <ModalPotes800ml />
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
      <div style={{ width: '100%', minHeight: '60vh', background: '#fff', padding: '0', marginTop: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, paddingRight: 32 }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: 28,
            color: '#4f281a',
            letterSpacing: 1,
            marginTop: 48,
            marginBottom: 0,
            marginLeft: 85
          }}>Tipos</h2>
          <h2 style={{
            fontWeight: 700,
            fontSize: 28,
            color: '#4f281a',
            letterSpacing: 1,
            marginTop: 48,
            marginBottom: 0,
            marginRight: 0,
            flex: 1,
            textAlign: 'center'
          }}>Faça seu Pedido!</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
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
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: 0 }}>
            <li>
              <button
                onClick={() => { handleFilterClick('Creme de Café')}}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 15, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Creme de Café' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Creme de café
              </button>
            </li>
            <li>
              <button
                onClick={() => { handleFilterClick('Linha Zero')}}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Linha Zero' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Linha Zero
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilterClick('Linha Black')}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Linha Black' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Linha Black
              </button>
            </li>
            <li>
              <button
                onClick={() => { handleFilterClick('Sazonais Verão')}}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Sazonais Verão' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Sazonais Verão
              </button>
            </li>
            <li>
              <button
                onClick={() => { handleFilterClick('Sazonais Inverno')}}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Sazonais Inverno' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Sazonais Inverno
              </button>
            </li>
            <li>
              <button
                onClick={() => { handleFilterClick('Linha Fit')}}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Linha Fit' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Linha Fit
              </button>
            </li>
            <li>
              <button
                onClick={() => { handleFilterClick('Frutais')}}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Frutais' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Frutais
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilterClick('Potes 800ml')}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Potes 800ml' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Potes 800ml
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilterClick('Baldes')}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 20, // Reduzi o espaçamento
                  paddingLeft: 32,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeFilter === 'Baldes' ? '#2a1208' : '#4f281a',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'color 0.2s, background-color 0.2s',
                  padding: '8px 32px',
                  ':hover': {
                    color: '#2a1208',
                    backgroundColor: 'rgba(79, 40, 26, 0.05)'
                  }
                }}>
                Baldes
              </button>
            </li>
          </ul>
        </aside>
        {/* Grid de produtos */}
        <div style={{ flex: 1, marginTop: 0 }}>
          {activeFilter === 'Creme de Café' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '32px',
                padding: '0 32px 32px 0',
              }}>
                {itens.map((item, idx) => (
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
                      width: 140,
                      height: 140,
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}>
                      <img 
                        src={`/images/${
                          idx === 0 ? 'tradicional.png' :
                          idx === 1 ? 'amarula.png' :
                          idx === 2 ? 'b50.png' :
                          idx === 3 ? 'b75.png' :
                          idx === 4 ? 'baunilha.png' :
                          idx === 5 ? 'espresso.png' :
                          idx === 6 ? 'caramelo.png' :
                          'menta.png'
                        }`}
                        alt={item.nome}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: 8
                        }}
                      />
                    </div>
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
                      onClick={() => handleAddToCart(item)}
                    >Adicionar ao carrinho</button>
                  </div>
                ))}
              </div>
            )}
          {activeFilter === 'Linha Zero' && (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>Seção Linha Zero</h2>
            </div>
          )}
          {activeFilter === 'Linha Black' && (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>Seção Linha Black</h2>
            </div>
          )}
          {activeFilter === 'Sazonais Verão' && (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>Seção Sazonais Verão</h2>
            </div>
          )}
          {activeFilter === 'Sazonais Inverno' && (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>Seção Sazonais Inverno</h2>
            </div>
          )}
          {activeFilter === 'Linha Fit' && (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>Seção Linha Fit</h2>
            </div>
          )}
          {activeFilter === 'Frutais' && (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>Seção Frutais</h2>
            </div>
          )}
          {activeFilter === 'Potes 800ml' && (
            <div style={{
              display: 'flex',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '32px',
              padding: '0 32px 32px 0',
            }}>
              {itens.filter(item => item.nome === "Pote 800ml").map(item => (
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
                    width: 140,
                    height: 140,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <img 
                      src="/images/800ml.jpeg"
                      alt={item.nome}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: 8
                      }}
                    />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: '#4f281a', textAlign: 'center', marginBottom: 8 }}>{item.nome}</div>
                  <div style={{ fontSize: 22, color: '#4f281a', fontWeight: 700, marginBottom: 6 }}>
                    R$ {item.preco.toFixed(2)}
                  </div>
                  <button style={{
                    background: '#4f281a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '10px 34px',
                    width: '100%',
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: 'pointer',
                    marginTop: 'auto',
                    transition: 'background 0.2s',
                  }}
                    onClick={() => handleAddToCart(item)}
                  >Adicionar ao carrinho</button>
                </div>
              ))}
            </div>
          )}
          {activeFilter === 'Baldes' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '32px',
              padding: '0 32px 32px 0',
            }}>
              <div style={{
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
                  width: 140,
                  height: 140,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <img 
                    src="/images/baldes.png"
                    alt="Baldes"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: 8
                    }}
                  />
                </div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#4f281a', textAlign: 'center', marginBottom: 8 }}>Baldes</div>
                <div style={{ fontSize: 22, color: '#4f281a', fontWeight: 700, marginBottom: 6 }}>
                  R$ 165.00
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
                  onClick={() => handleAddToCart({ nome: 'Baldes', preco: 165 })}
                >Adicionar ao carrinho</button>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
}
