import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import PlataformaMiniatura from "../../components/Plataforma/PlataformaMiniatura";
import { containerVariants, itemVariants } from "../animacionGrid";
import { loadPlatformas } from "../../features/platformas/platformasSlice";

export default function PlataformaVista() {

  const [params, setParams] = useSearchParams();
  const pagina = Number(params.get("page")) || 1;

  const dispatch = useDispatch();
  const { plataformas, loading } = useSelector((state) => state.platforms);

  useEffect(() => {
    dispatch(loadPlatformas({ page: pagina }));
  }, [dispatch, pagina]);

  if (loading) return <div>Cargando plataformas...</div>;

  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {plataformas.map((plataforma) => (
          <motion.div key={plataforma.id} variants={itemVariants}>
            <PlataformaMiniatura plataforma={plataforma} />
          </motion.div>
        ))}
      </motion.div>

      {/* PAGINACIÓN igual que antes */}
    </>
  );
}
