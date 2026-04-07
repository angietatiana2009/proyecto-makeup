import "./App.css";

// 1. Componente de Barra de Navegación
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Glow Beauty</div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Acerca de nosotros</li>
      </ul>
    </nav>
  );
}

// 2. Componente de Sección Principal
function MainSection() {
  return (
    <section className="card">
      <h2>Rutina de Glow Up 2026</h2>
      <p>Descubre los pasos esenciales para preparar tu piel antes del maquillaje y lograr un acabado profesional y duradero..</p>
    </section>
  );
}

// 3. Componente de Segunda Sección
function SecondSection() {
  return (
    <section className="card">
      <h3>Guia de pasos</h3>
      <p><strong>1. Prep:</strong> Hidrata tu piel 💧</p>
        <p><strong>2. Base:</strong> Aplica con esponja ✨</p>
        <p><strong>3. Sellar:</strong> Polvos en zona T ☁️</p>
        <p><strong>4. Color:</strong> Rubor e iluminador 🌸</p>
        <p><strong>5. Fix:</strong> Spray fijador 🌬️</p>
      <p>Contenido adicional estructurado de forma independiente.</p>
    </section>
  );
}

// 4. Componente Lateral (Aside)
function Aside() {
  return (
    <aside className="aside">
      <h4>Panel Lateral</h4>
      <p>Información complementaria o enlaces rápidos.</p>
    </aside>
  );
}

// 5. Componente de Pie de Página
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 - Tarea de React - Desarrollo Web</p>
    </footer>
  );
}

// COMPONENTE PRINCIPAL QUE UNE TODO
function App() {
  return (
    <div className="main-container">
      <Navbar />
      
      <div className="layout">
        <main className="content">
          <MainSection />
          <SecondSection />
        </main>
        
        <Aside />
      </div>

      <Footer />
    </div>
  );
}

export default App;
