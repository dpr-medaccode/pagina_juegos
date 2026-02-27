import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { loadEventos, loadMisEventos, apuntarse, cancelar } from "../../features/eventos/eventosSlice";
import EventoCard from "../../components/Evento/EventoCard";
import MiEventoCard from "../../components/Evento/MiEventoCard";
import { containerVariants } from "../animacionGrid";

export default function EventosVista() {
    const dispatch = useDispatch();
    const { eventos, misEventos, loading } = useSelector(state => state.eventos);

    useEffect(() => {
        dispatch(loadEventos());
        dispatch(loadMisEventos());
    }, [dispatch]);

    const handleToggle = (id) => {
        if (misEventos.includes(id)) {
            dispatch(cancelar(id))
        } else {
            dispatch(apuntarse(id))
        }
    };

    if (loading) return <div className="text-center py-20 text-zinc-300">Cargando eventos...</div>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
            <h1 className="text-4xl font-extrabold text-zinc-100 mb-6">Eventos</h1>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {eventos.map(evento => (
                    <EventoCard
                        key={evento.id}
                        evento={evento}
                        estaApuntado={misEventos.includes(evento.id)}
                        onToggle={handleToggle}
                    />
                ))}
            </motion.div>

            {misEventos.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-zinc-100 mb-4">Mis Eventos</h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {eventos
                            .filter(evento => misEventos.includes(evento.id))
                            .map(evento => (
                                <MiEventoCard key={evento.id} evento={evento} />
                            ))}
                    </motion.div>
                </div>
            )}
        </div>
    );
}
