import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const [busqueda, set_busqueda] = useState('');
  const [filtro, setFiltro] = useState('games'); // el filtro selecionado al recargar
  const navigate = useNavigate();

  const handleKeyDown = (e) => {

    if (e.key === 'Enter' && busqueda.trim() !== '') {

      navigate(`/${filtro}?search=${encodeURIComponent(busqueda)}?page=1`)

    }

  }

  return (
    <header className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-extrabold tracking-tight text-indigo-400">
          GameExplorer
        </h1>

        <div className="flex items-center gap-3">

          <input
            type="text"
            value={busqueda}
            onChange={(e) => set_busqueda(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Buscar ${filtro}...`}
            className="
            w-72
          bg-zinc-900
          text-zinc-100
          placeholder-zinc-500
            px-4 py-2
            rounded-lg
            border border-zinc-700
            focus:outline-none
            focus:ring-2
          focus:ring-indigo-500
            "
          />

          <div className="relative w-44">
            <select
              onChange={(e) => {
                setFiltro(e.target.value)
                set_busqueda('')
                navigate(`/${e.target.value}?page=1`)
              }}
              className="
            w-full
            bg-zinc-900
            text-zinc-100
            border border-zinc-700
            rounded-lg
            px-4 py-2
            appearance-none
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            hover:border-indigo-500
            transition
            cursor-pointer"
              defaultValue=""
            >
              <option value="games">Juego</option>
              <option value="tags">Tag</option>
              <option value="publisher">Publisher</option>
              <option value="plataforma">Plataforma</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-400">
              ▼
            </div>
          </div>

        </div>


        <nav className="flex gap-6 text-zinc-300">
          <Link to="/" className="hover:text-indigo-400 transition">Inicio</Link>
        </nav>

      </div>
    </header >

  );
}
