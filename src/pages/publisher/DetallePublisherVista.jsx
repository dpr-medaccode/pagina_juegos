import { useEffect } from "react";
import { useLoaderData, useSearchParams } from "react-router"
import Publisher from "./../../rawg/publisher.js"
import { useState } from "react";
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../animacionGrid.js";
import JuegoMiniatura from "../../components/Juego/JuegoMiniatura.jsx";

export default function DetallePublisherVista() {

  const { id } = useLoaderData()

  const [params, setParams] = useSearchParams()

  const [publisher, setPublisher] = useState(null);
  const [juegos, setJuegos] = useState([]);
  const [loadingTag, setLoadingTag] = useState(true);
  const [loadingJuegos, setLoadingJuegos] = useState(true);
  const pagina = Number(params.get("page")) || 1

  useEffect(() => {

    async function loadPublisher() {
      setLoadingTag(true);
      const p = await Publisher.new_from_id(id)
      setPublisher(p);
      setLoadingTag(false);
    }

    loadPublisher();
  }, [id]);

  useEffect(() => {
    if (!publisher) return;

    async function loadJuegos() {
      setLoadingJuegos(true);
      const data = await publisher.juegos(pagina, 12);
      setJuegos(data);
      setLoadingJuegos(false);
    }

    loadJuegos();
  }, [publisher, pagina]);

  if (loadingTag)

    return (

      <div className="text-center text-zinc-300 py-20">
        Cargando Publisher...
      </div>

    )

  if (!publisher)

    return (
      <div className="text-center text-zinc-300 py-20">
        Publisher no encontrado
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
        {publisher.name}
      </motion.h1>

      {publisher.image_background && publisher.games_count !== 0 && (
        <motion.img
          src={publisher.image_background}
          alt={publisher.name}
          className="w-full h-105 object-cover rounded-2xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <motion.div
        className="text-zinc-300 leading-relaxed space-y-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: publisher.description }}
      />

      <motion.h2
        className="text-3xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >Juegos</motion.h2>

      {!loadingJuegos && <motion.div

        className="
        max-w-7xl
        mx-auto
        p-6 grid
        grid-cols-2 
        sm:grid-cols-2
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show">

        {juegos.map((juego) => (

          <motion.div key={juego.id} variants={itemVariants}>

            <JuegoMiniatura juego={juego} />

          </motion.div>

        ))}

      </motion.div>}

      <div
        className="
            flex 
            flex-wrap 
            justify-center 
            items-center  
            gap-4 
            mt-6 
            p-4"
      >
        <button
          onClick={() => {
            const newPage = Math.max(pagina - 1, 1);
            setParams({
              page: newPage
            });
          }}
          className="
                    px-5 
                    py-2 
                    bg-linear-to-r 
                    from-indigo-600 
                    to-indigo-500 
                    text-white 
                    rounded-lg 
                    shadow-md 
                    hover:from-indigo-700 
                    hover:to-indigo-600 
                    transition-all 
                    duration-300"
        >
          &larr; Previous
        </button>

        <span className="
                px-5 
                py-2 
                bg-zinc-800 
                text-zinc-100 
                rounded-lg 
                shadow-inner"
        >
          Página <span className="font-semibold">{pagina}</span>
        </span>

        <button
          onClick={() => {
            const newPage = pagina + 1;
            setParams({
              page: newPage
            });
          }}
          className="
                    px-5 
                    py-2 
                    bg-linear-to-r 
                    from-indigo-600 
                    to-indigo-500 
                    text-white 
                    rounded-lg 
                    shadow-md 
                    hover:from-indigo-700 
                    hover:to-indigo-600 
                    transition-all 
                    duration-300"
        >
          Next &rarr;
        </button>

      </div>

    </motion.div>
  );
}
