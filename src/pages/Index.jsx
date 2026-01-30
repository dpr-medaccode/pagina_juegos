import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Juego from "../rawg/juego"
import JuegoMiniatura from "../components/JuegoMiniatura"

export default function Index() {

  const [populares, setPopulares] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchPopulares() {

      setLoading(true);

      try {

        const data = await Juego.new_mas_populares(1, 9)
        data.push(await Juego.new_from_id(11859)) //favoritismo

        setPopulares(data)

      } catch (err) {

        console.error(err)

      } finally {

        setLoading(false)

      }

    }

    fetchPopulares()

  }, [])

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Cargando ...
      </div>

    )

  }

  const loopItems = [...populares, ...populares];

  return (

    <div className="min-h-screen bg-linear-to-b from-zinc-900 to-zinc-950 flex flex-col justify-start items-center px-6 text-center text-zinc-100 py-12 gap-12">

      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight text-indigo-400">
        Bienvenido a GameExplorer
      </h1>

      <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-xl">
        Explora los videojuegos más populares y descubre nuevos títulos usando la API de RAWG.
      </p>

      <div className="relative w-full max-w-7xl overflow-hidden">

        <motion.div
          className="flex gap-4"
          style={{ display: "flex", width: "max-content" }}
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}>

          {loopItems.map((juego, index) => (

            <div key={index} className="shrink-0 w-56">
              <JuegoMiniatura juego={juego} />
            </div>

          ))}

        </motion.div>

      </div>

    </div>
  )

}
