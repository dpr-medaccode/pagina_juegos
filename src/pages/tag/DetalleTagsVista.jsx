import { useEffect } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animacionGrid.js";
import JuegoMiniatura from "../../components/Juego/JuegoMiniatura.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loadTagPorId, loadTagJuegos, clearTag } from "../../features/tags/idTagsSlice";

export default function DetalleTagVista() {

  const { id } = useLoaderData()

  const [params, setParams] = useSearchParams()
  const pagina = Number(params.get("page")) || 1

  const dispatch = useDispatch()
  const { tag, juegos, loadingTag, loadingJuegos } = useSelector(state => state.idTags)

  useEffect(() => {

    dispatch(loadTagPorId(id))
    return () => dispatch(clearTag())

  }, [dispatch, id])

  useEffect(() => {

    if (!tag) return

    dispatch(loadTagJuegos({ id, pagina, cantidad: 12 }))

  }, [dispatch, tag, id, pagina])


  if (loadingTag) return <div className="text-center text-zinc-300 py-20">Cargando Tag...</div>
  if (!tag) return <div className="text-center text-zinc-300 py-20">Tag no encontrado</div>

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
        {tag.name}
      </motion.h1>

      {tag.image_background && tag.games_count !== 0 && (

        <motion.img
          src={tag.image_background}
          alt={tag.name}
          className="w-full h-105 object-cover rounded-2xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />

      )}

      <motion.h2
        className="text-3xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Juegos
      </motion.h2>

      {!loadingJuegos && (

        <motion.div
          className="max-w-7xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {juegos.map(juego => (
            <motion.div key={juego.id} variants={itemVariants}>
              <JuegoMiniatura juego={juego} />
            </motion.div>
          ))}
        </motion.div>

      )}

      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 p-4">
        <button
          onClick={() => setParams({ page: Math.max(pagina - 1, 1) })}
          className="px-5 py-2 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
        >
          &larr; Previous
        </button>

        <span className="px-5 py-2 bg-zinc-800 text-zinc-100 rounded-lg shadow-inner">
          Página <span className="font-semibold">{pagina}</span>
        </span>

        <button
          onClick={() => setParams({ page: pagina + 1 })}
          className="px-5 py-2 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
        >
          Next &rarr;
        </button>
      </div>
      
    </motion.div>
  );
}
