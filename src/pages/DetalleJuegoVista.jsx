import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { motion } from "framer-motion"
import Juego from "../rawg/juego"

export default function DetalleJuegoVista() {

    const { id } = useLoaderData()

    const [juego, setJuego] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchJuego() {

            setLoading(true)

            try {
                const data = await Juego.new_from_id(id)
                setJuego(data)

            } catch (error) {

                console.error("Error cargando el juego:", error)

            } finally {

                setLoading(false)

            }
        }

        fetchJuego()

    }, [id])

    if (loading)

        return (

            <div className="text-center text-zinc-300 py-20">
                Cargando juego...
            </div>

        )

    if (!juego)

        return (
            <div className="text-center text-zinc-300 py-20">
                Juego no encontrado
            </div>
        )

    return (
        <motion.div className="max-w-6xl mx-auto px-6 py-10 space-y-8 text-zinc-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} >

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
            >
                {juego.description_raw}
            </motion.p>

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


            <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="show"
                variants={{
                    show: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {juego.genres?.map((g) => (
                    <motion.span
                        key={g.id}
                        className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-sm"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            show: { opacity: 1, y: 0 }
                        }}
                    >
                        {g.name}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
}
