import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Juego from "../rawg/juego";
import JuegoMiniatura from "../components/JuegoMiniatura";

const containerVariants = {

    hidden: {},

    show: {
        transition: {
            staggerChildren: 0.1
        }
    }

}

const itemVariants = {

    hidden: { opacity: 0, y: 20 },

    show: {

        opacity: 1,

        y: 0,

        transition: {

            duration: 0.4,

            ease: "easeOut"

        }

    }

}

export default function JuegosVista() {

    const [params, setParams] = useSearchParams();

    const [juegos, setJuegos] = useState([]);
    const [loading, setLoading] = useState(true);
    const pagina = Number(params.get("page")) || 1;

    const search = params.get("search");

    useEffect(() => {

        async function fetchJuegos() {

            setLoading(true);

            let data;

            if (!search) {

                data = await Juego.new_mas_populares(pagina, 20);

            } else {

                data = await Juego.new_from_busqueda(search, pagina, 20);


            }

            setJuegos(data);

            setLoading(false);

        }

        fetchJuegos();

    }, [search, pagina]);

    if (loading) return <div>Cargando juegos...</div>;

    return (

        <>

            <motion.div

                className="
            max-w-7xl
            mx-auto
            p-6 grid
            grid-cols-2 
            sm:grid-cols-3
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-6"

                variants={containerVariants}
                initial="hidden"
                animate="show">

                {juegos.map((juego) => (

                    <motion.div key={juego.id} variants={itemVariants}>

                        <JuegoMiniatura juego={juego} />

                    </motion.div>

                ))}

            </motion.div>

            <div className="flex flex-wrap justify-center items-center  gap-4 mt-6 p-4">

                <button
                    onClick={() => {
                        const newPage = Math.max(pagina - 1, 1);
                        setParams({
                            ...(search && { search }),
                            page: newPage
                        });
                    }}
                    className="px-5 py-2 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
                >
                    &larr; Previous
                </button>

                <span className="px-5 py-2 bg-zinc-800 text-zinc-100 rounded-lg shadow-inner">
                    Página <span className="font-semibold">{pagina}</span>
                </span>

                <button
                    onClick={() => {
                        const newPage = pagina + 1;
                        setParams({
                            ...(search && { search }),
                            page: newPage
                        });
                    }}
                    className="px-5 py-2 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300">
                    Next &rarr;
                </button>

            </div>

        </>

    );

}
