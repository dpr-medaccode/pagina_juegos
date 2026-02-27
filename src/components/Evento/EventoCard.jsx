import { motion } from "framer-motion";
import { itemVariants } from "../../pages/animacionGrid";

export default function EventoCard({ evento, estaApuntado, onToggle }) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={`./images/${evento.image}`}
        alt={evento.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-zinc-100">
        <h2 className="text-xl font-bold">{evento.title}</h2>
        <p className="text-zinc-400">{evento.location}</p>

        <button
          onClick={() => onToggle(evento.id)}
          className={`
            mt-4 
            w-full 
            py-2 
            rounded-lg 
            font-semibold 
            transition-colors 
            duration-300
            ${estaApuntado ? "bg-red-600 hover:bg-red-500" : "bg-indigo-600 hover:bg-indigo-500"}`}
        >
          {estaApuntado ? "Cancelar" : "Apuntarse"}
        </button>
      </div>
    </motion.div>
  );
}
