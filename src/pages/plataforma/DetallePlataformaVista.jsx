import { useEffect } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { loadPlataformaPorId, loadPlataformaJuegos, clearPlataforma } from "../../features/platformas/idPlatformsSlice";
import { containerVariants, itemVariants } from "../animacionGrid.js";
import JuegoMiniatura from "../../components/Juego/JuegoMiniatura.jsx";


export default function DetallePlataformaVista() {

  const { id } = useLoaderData();

  const dispatch = useDispatch();

  const [params, setParams] = useSearchParams();

  const pagina = Number(params.get("page")) || 1;


  const {
    plataforma,
    juegos,
    loadingPlataforma,
    loadingJuegos,
    error
  } = useSelector(state => state.idPlatforms);

  useEffect(() => {

    dispatch(loadPlataformaPorId(id));

    return () => {
      dispatch(clearPlataforma());
    };

  }, [id, dispatch]);

  useEffect(() => {

    dispatch(loadPlataformaJuegos({
      id,
      pagina,
      cantidad: 12
    }));

  }, [id, pagina, dispatch]);


  if (loadingPlataforma)
    return (
      <div className="text-center text-zinc-300 py-20">
        Cargando plataforma...
      </div>
    );


  if (error)
    return (
      <div className="text-center text-red-400 py-20">
        Error: {error}
      </div>
    );


  if (!plataforma)
    return (
      <div className="text-center text-zinc-300 py-20">
        Plataforma no encontrada
      </div>
    );


  return (

    <motion.div
      className="max-w-6xl mx-auto px-6 py-10 space-y-8 text-zinc-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <motion.h1 className="text-4xl font-extrabold">
        {plataforma.name}
      </motion.h1>


      {plataforma.image_background && (
        <motion.img
          src={plataforma.image_background}
          alt={plataforma.name}
          className="w-full h-105 object-cover rounded-2xl shadow-lg"
        />
      )}


      <motion.h2 className="text-3xl font-extrabold">
        Juegos
      </motion.h2>


      {loadingJuegos ? (

        <div className="text-center py-10">
          Cargando juegos...
        </div>

      ) : (

        <motion.div
          className="max-w-7xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
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

      <div className="flex justify-center gap-4 mt-6">

        <button
          onClick={() => {
            setParams({ page: Math.max(pagina - 1, 1) });
          }}
          className="px-5 py-2 bg-indigo-600 rounded-lg"
        >
          Previous
        </button>


        <span>
          Página {pagina}
        </span>


        <button
          onClick={() => {
            setParams({ page: pagina + 1 });
          }}
          className="px-5 py-2 bg-indigo-600 rounded-lg"
        >
          Next
        </button>

      </div>


    </motion.div>
  );

}
