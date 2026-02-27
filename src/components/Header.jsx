import { Fragment } from "react";
import { Link, useNavigate } from "react-router";
import { Popover, Transition, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { setBusqueda, setFiltro, resetBusqueda } from "../features/header/busquedaSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const busqueda = useSelector((state) => state.busqueda.busqueda);
  const filtro = useSelector((state) => state.busqueda.filtro);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && busqueda.trim() !== "") {
      navigate(`/${filtro}?search=${encodeURIComponent(busqueda)}&page=1`);
    }
  };

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
            onChange={(e) => dispatch(setBusqueda(e.target.value))}
            onKeyDown={handleKeyDown}
            placeholder={filtro === "plataforma" ? "" : `Buscar ${filtro}...`}
            disabled={filtro === "plataforma"}
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
              value={filtro}
              onChange={(e) => {
                dispatch(setFiltro(e.target.value));
                dispatch(resetBusqueda());
                navigate(`/${e.target.value}?page=1`);
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
                cursor-pointer
              "
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

        <Popover className="relative text-amber-50">
          <PopoverButton className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer">
            U
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition rounded"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/eventos"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition rounded"
                  >
                    Evento
                  </Link>
                </li>
                <li>
                  <Link
                    to="/favoritos"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white transition rounded"
                  >
                    Favoritos
                  </Link>
                </li>
              </ul>
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
}
