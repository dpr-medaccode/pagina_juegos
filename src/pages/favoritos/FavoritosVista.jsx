import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import JuegoMiniatura from "../../components/Juego/JuegoMiniatura";
import { loadFavoritos } from "../../features/favoritos/favoritosSlice";
import { containerVariants, itemVariants } from "../animacionGrid";
import { loadJuegos } from "../../features/juegos/juegosSlice";

export default function FavoritosVista() {
    const dispatch = useDispatch();
    const { juegos } = useSelector(state => state.games);
    const { favoritos } = useSelector(state => state.favoritos);

    useEffect(() => {
        dispatch(loadFavoritos());
        dispatch(loadJuegos({ search: "", page: 1 }));
    }, [dispatch]);

    const juegosFavoritos = juegos.filter(j => favoritos.includes(j.id));

    if (juegosFavoritos.length === 0) {
        return <div className="text-zinc-300 text-center py-20">No tienes juegos favoritos.</div>;
    }

    return (
        <motion.div
            className="max-w-7xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {juegosFavoritos.map(juego => (
                <motion.div key={juego.id} variants={itemVariants}>
                    <JuegoMiniatura juego={juego} />
                </motion.div>
            ))}
        </motion.div>
    );
}
