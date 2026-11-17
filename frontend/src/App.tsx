import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-[var(--bg)] gap-8">
      
      {/* 1. Tu tarjeta de estado */}
      <div className="p-8 rounded-xl shadow-[var(--shadow)] border border-[var(--border)] bg-white">
        <h1 className="text-3xl font-bold text-[var(--accent)] mb-4 text-center">
          ¡Entorno Listo!
        </h1>
        <p className="text-[var(--text)] text-center">
          Figma + React + Tailwind v4 conectados correctamente.
        </p>
      </div>

      {/* 2. Tu diseño de Figma incrustado */}
      <div className="w-full max-w-4xl p-4">
        <h2 className="text-xl font-semibold text-[var(--text-h)] mb-4 text-center">
          Vista previa del Proyecto
        </h2>
        <div className="flex justify-center">
          <iframe 
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "8px" }} 
            width="100%" 
            height="450" 
            src="https://embed.figma.com/design/afXTx4kudzvNGOfhCdfnMr/Proyecto-Videojuego?node-id=68-62&embed-host=share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default App;
