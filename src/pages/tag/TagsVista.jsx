import { useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animacionGrid.js";
import TagMiniaturaImagen from "../../components/Tag/TagMiniaturaImagen.jsx";
import TagMiniatura from "../../components/Tag/TagMiniatura.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPopularTags, loadSearchTags } from "../../features/tags/tagsSlice";

export default function TagsVista() {
  const [params, setParams] = useSearchParams();
  const pagina = Number(params.get("page")) || 1;
  const search = params.get("search");

  const dispatch = useDispatch();
  const { tags, loading } = useSelector((state) => state.tags);

  const imagen = !search

  useEffect(() => {
    if (search) {
      dispatch(loadSearchTags({ search, pagina, cantidad: 50 }));
    } else {
      dispatch(loadPopularTags({ pagina, cantidad: 20 }));
    }
  }, [dispatch, search, pagina]);

  if (loading) return <div>Cargando Tags...</div>;

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
        animate="show"
      >
        {tags.map((tag) => (
          <motion.div key={tag.id} variants={itemVariants}>
            {imagen ? (
              <TagMiniaturaImagen tag={tag} />
            ) : (
              <TagMiniatura tag={tag} />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* PAGINACIÓN */}
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
              ...(search && { search }),
              page: newPage,
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

        <span
          className="
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
              ...(search && { search }),
              page: newPage,
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
    </>
  );
}
