import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Plataforma from "./../../rawg/plataforma.js"
import PlataformaMiniatura from "../../components/Plataforma/PlataformaMiniatura";
import { containerVariants, itemVariants } from "../animacionGrid.js";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PlataformaVista() {

  const [params, setParams] = useSearchParams()

  const [plataformas, setPlataformas] = useState([])
  const [loading, setLoading] = useState(true)
  const pagina = Number(params.get("page")) || 1

  

  useEffect(() => {

    async function load() {

      setLoading(true)

      let data;

        data = await Plataforma.new_mas_populares(pagina, 20);

      setPlataformas(data);

      setLoading(false);

    }

    load();

  }, [pagina]);

  if (loading) return <div>Cargando Tags...</div>

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

        {plataformas.map((plataforma) => (

          <motion.div key={plataforma.id} variants={itemVariants}>

            <PlataformaMiniatura plataforma={plataforma} />

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

    </>

  );

}
