import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import JuegoMiniatura from "../components/Juego/JuegoMiniatura";
import { loadJuegos } from "../features/juegos/juegosSlice";
import Juego from "../rawg/juego";

export default function Index() {
  const dispatch = useDispatch();
  const { juegos, loading, error } = useSelector((state) => state.games);

  useEffect(() => {

    dispatch(loadJuegos({ page: 1, pageSize: 10 }));

    // descansa en paz tf2 por no funciona con redux

  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Cargando ...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }


  const topJuegos = juegos.slice(0, 9);

  const loopItems = [...topJuegos, ...topJuegos];

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-900 to-zinc-950 flex flex-col justify-start items-center px-6 text-center text-zinc-100 py-12 gap-12">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight text-indigo-400">
        Bienvenido a GameExplorer
      </h1>

      <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-xl">
        Explora los videojuegos más populares y descubre nuevos títulos usando la API de RAWG.
      </p>

      <div className="relative w-full max-w-7xl overflow-hidden">
        <motion.div
          className="flex gap-4"
          style={{ display: "flex", width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {loopItems.map((juego, index) => (
            <div key={index} className="shrink-0 w-56">
              <JuegoMiniatura juego={juego} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
