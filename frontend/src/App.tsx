import './App.css'

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-[var(--bg)]">
      <div className="p-8 rounded-xl shadow-[var(--shadow)] border border-[var(--border)] bg-white">
        <h1 className="text-3xl font-bold text-[var(--accent)] mb-4">
          ¡Entorno Listo!
        </h1>
        <p className="text-[var(--text)]">
          Figma + React + Tailwind v4 conectados correctamente.
        </p>
      </div>
    </div>
  );
}

export default App;