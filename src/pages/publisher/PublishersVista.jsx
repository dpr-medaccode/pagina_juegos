import { useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animacionGrid.js";
import PublisherMiniaturaImagen from "../../components/Publisher/PublisherMiniaturaImagen.jsx";
import PublisherMiniatura from "../../components/Publisher/PublisherMiniatura.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPopularPublishers, loadSearchPublishers } from "../../features/publishers/publishersSlice";

export default function PublishersVista() {
  const [params, setParams] = useSearchParams();
  const pagina = Number(params.get("page")) || 1;
  const search = params.get("search");

  const dispatch = useDispatch();
  const { publishers, loading, error } = useSelector((state) => state.publishers);

  const mostrarImagen = !search; // igual comportamiento que antes

  useEffect(() => {
    if (search) {
      dispatch(loadSearchPublishers({ search, pagina, cantidad: 50 }));
    } else {
      dispatch(loadPopularPublishers({ pagina, cantidad: 20 }));
    }
  }, [dispatch, search, pagina]);

  if (loading) return <div className="text-center py-10 text-zinc-300">Cargando Publishers...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!publishers || publishers.length === 0) return <div className="text-center py-10 text-zinc-300">No se encontraron Publishers</div>;

  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {publishers.map((publisher) => (
          <motion.div key={publisher.id} variants={itemVariants}>
            {mostrarImagen ? (
              <PublisherMiniaturaImagen publisher={publisher} />
            ) : (
              <PublisherMiniatura publisher={publisher} />
            )}
          </motion.div>
        ))}
      </motion.div>


      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 p-4">
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
          ← Previous
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
          className="px-5 py-2 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
        >
          Next →
        </button>
      </div>
    </>
  )
}
