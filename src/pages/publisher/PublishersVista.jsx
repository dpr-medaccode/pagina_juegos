import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Publisher from "./../../rawg/publisher.js"
import TagMiniaturaImagen from "../../components/Tag/TagMiniaturaImagen.jsx";
import { containerVariants, itemVariants } from "../animacionGrid.js";
import { useEffect } from "react";
import { motion } from "framer-motion";
import TagMiniatura from "../../components/Tag/TagMiniatura.jsx";
import PublisherMiniaturaImagen from "../../components/Publisher/PublisherMiniaturaImagen.jsx";
import PublisherMiniatura from "../../components/Publisher/PublisherMiniatura.jsx";

export default function PublishersVista() {

  const [params, setParams] = useSearchParams()

  const [publishers, setPublishers] = useState([])
  const [imagen, setImagen] = useState(false)
  const [loading, setLoading] = useState(true)
  const pagina = Number(params.get("page")) || 1

  const search = params.get("search")

  useEffect(() => { //

    async function load() {

      setLoading(true)

      let data;

      if (!search) {

        data = await Publisher.new_mas_populares(pagina, 20);

        setImagen(true)

      } else {

        data = await Publisher.new_from_busqueda(search, pagina, 50);

        setImagen(false)

      }

      setPublishers(data);

      setLoading(false);

    }

    load();

  }, [search, pagina]);

  if (loading) return <div>Cargando Publishers...</div>

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

        {publishers.map((publisher) => (

          <motion.div key={publisher.id} variants={itemVariants}>

            {imagen && <PublisherMiniaturaImagen publisher={publisher} />}

            {!imagen && <PublisherMiniatura publisher={publisher} />}

          </motion.div>

        ))}

      </motion.div>

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
              ...(search && { search }),
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

    </>

  );

}
