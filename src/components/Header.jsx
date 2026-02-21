import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const [busqueda, set_busqueda] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e) => {

    if (e.key === 'Enter' && busqueda.trim() !== '') {

      navigate(`/games?search=${encodeURIComponent(busqueda)}?page=1`)

      // set_busqueda('') 

    }

  }

  return (
    <header className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-extrabold tracking-tight text-indigo-400">
          GameExplorer
        </h1>

        <input
          type="text"
          value={busqueda}
          onChange={(e) => set_busqueda(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar juegos..."
          className="w-72 bg-zinc-900 text-zinc-100 placeholder-zinc-500 px-4 py-2 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <nav className="flex gap-6 text-zinc-300">
          <Link to="/" className="hover:text-indigo-400 transition">Inicio</Link>
          <Link to="/games?page=1" className="hover:text-indigo-400 transition">Juegos</Link>
        </nav>

      </div>
    </header>

  );
}
