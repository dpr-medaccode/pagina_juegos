import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function TagMiniatura({ tag }) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/tags/${tag.id}?page=1`)}
      className="w-48 h-12 m-2 cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <div className="w-full h-full rounded-lg bg-zinc-900 shadow-sm 
                      flex items-center justify-center px-3
                      hover:bg-zinc-800 transition-colors duration-200">

        <span className="text-sm text-zinc-100 font-medium truncate">
          {tag.name}
        </span>

        <span className="text-xs text-zinc-400 ml-2">
          ({tag.games_count + 1}) {/*la api no esta bein hecha*/}
        </span>

      </div>
    </motion.div>
  );
}
