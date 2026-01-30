import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-900 to-zinc-950 flex flex-col justify-center items-center px-6 text-center text-zinc-100">


      <motion.h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        Bienvenido a GameExplorer
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Explora los videojuegos más populares y descubre nuevos títulos usando la API de RAWG.
      </motion.p>

      <motion.button onClick={() => navigate("/games")}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
        Explorar Juegos
      </motion.button>

    </div>
  );
}
