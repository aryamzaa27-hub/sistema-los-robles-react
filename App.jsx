mport React, { useState } from 'react';

export default function App() {
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const avisos = [
    { id: 1, titulo: "Mantenimiento de Áreas Verdes", fecha: "05 de Septiembre", desc: "Podado de jardines principales a partir de las 8:00 AM." },
    { id: 2, titulo: "Asamblea General de Vecinos", fecha: "12 de Septiembre", desc: "Reunión en la palapa comunitaria para revisión de presupuesto." }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mensaje.trim()) {
      setEnviado(true);
      setMensaje('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ backgroundColor: '#2c3e50', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h1>Sistema de Administración Comunitaria Los Robles</h1>
        <p>Portal Oficial de Atención Residencial</p>
      </header>

      <section style={{ marginTop: '20px' }}>
        <h2>Avisos Comunitarios</h2>
        {avisos.map(item => (
          <div key={item.id} style={{ borderLeft: '4px solid #3498db', padding: '10px 15px', margin: '10px 0', backgroundColor: '#f8f9fa' }}>
            <h3>{item.titulo}</h3>
            <small>{item.fecha}</small>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: '30px', backgroundColor: '#ecf0f1', padding: '20px', borderRadius: '8px' }}>
        <h2>Contacto con Administración</h2>
        {enviado && <p style={{ color: 'green', fontWeight: 'bold' }}>¡Mensaje enviado con éxito a la administración!</p>}
        <form onSubmit={handleSubmit}>
          <textarea 
            rows="4" 
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Escriba su reporte o sugerencia aquí..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
          <button type="submit" style={{ marginTop: '10px', backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
            Enviar Reporte
          </button>
        </form>
      </section>
    </div>
  );
}
