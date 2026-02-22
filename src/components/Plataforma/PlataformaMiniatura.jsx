import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function PlataformaMiniatura({ plataforma }) {

    const navigate = useNavigate();

    return (

        <motion.div onClick={() => navigate(`/plataforma/${plataforma.id}`)}
            className="w-56 m-3 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}>

            <div className="h-36 overflow-hidden rounded-lg shadow-md bg-zinc-900">

                <img src={plataforma.image_background}
                    alt={plataforma.name}
                    className="w-full h-full object-cover transition-transform duration-300" />

            </div>

            <div className="mt-2 flex flex-col justify-between">

                <h3 className="font-bold text-sm line-clamp-2 text-zinc-100">
                    {plataforma.name}
                </h3>

                <p className="text-xs text-zinc-400">
                    total games: {plataforma.games_count}
                </p>

            </div>

        </motion.div>
    );
}
