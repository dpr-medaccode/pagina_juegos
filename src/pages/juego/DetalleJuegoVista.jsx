import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { containerVariants, itemVariants } from "../animacionGrid";
import TagMiniatura from "../../components/Tag/TagMiniatura";
import PublisherMiniaturaImagen from "../../components/Publisher/PublisherMiniaturaImagen";
import PlataformaMiniatura from "../../components/Plataforma/PlataformaMiniatura";

import { loadJuegoPorId, clearIdGame } from "../../features/juegos/idJuegoSlice";

export default function DetalleJuegoVista() {
    const { id } = useLoaderData();
    const dispatch = useDispatch();

    const { juego, loading, error } = useSelector((state) => state.idGame);

    useEffect(() => {
        dispatch(loadJuegoPorId(id));

        return () => {
            dispatch(clearIdGame());
        };
    }, [id, dispatch]);

    if (loading)
        return (
            <div className="text-center text-zinc-300 py-20">
                Cargando juego...
            </div>
        );

    if (error)
        return (
            <div className="text-center text-zinc-300 py-20">
                Error: {error}
            </div>
        );

    if (!juego)
        return (
            <div className="text-center text-zinc-300 py-20">
                Juego no encontrado
            </div>
        );

    return (
        <motion.div
            className="max-w-6xl mx-auto px-6 py-10 space-y-8 text-zinc-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >

            <motion.h1
                className="text-4xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {juego.name}
            </motion.h1>

            <motion.img
                src={juego.background_image}
                alt={juego.name}
                className="w-full h-105 object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
            />

            <motion.p
                className="text-zinc-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                dangerouslySetInnerHTML={{ __html: juego.description }}
            />

            {juego.released && (
                <motion.p
                    className="text-zinc-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    Lanzamiento: {new Date(juego.released).toLocaleDateString()}
                </motion.p>
            )}

            <motion.h2
                className="text-3xl font-extrabold tracking-tight m-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                Tags
            </motion.h2>
            <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
                <motion.div
                    className="max-w-7xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {juego.tags.map((tag) => (
                        <motion.div key={tag.id} variants={itemVariants}>
                            <TagMiniatura tag={tag} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.h2
                className="text-3xl font-extrabold tracking-tight m-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                Publishers
            </motion.h2>
            <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
                <motion.div
                    className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {juego.publishers.map((publisher) => (
                        <motion.div key={publisher.id} variants={itemVariants}>
                            <PublisherMiniaturaImagen publisher={publisher} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.h2
                className="text-3xl font-extrabold tracking-tight m-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                Plataformas
            </motion.h2>
            <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
                <motion.div
                    className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {juego.platforms.map((p) => (
                        <motion.div key={p.platform.id} variants={itemVariants}>
                            <PlataformaMiniatura plataforma={p.platform} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
