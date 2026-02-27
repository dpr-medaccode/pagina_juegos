export default function MiEventoCard({ evento }) {

    // motion falla

    return (
        <div className="bg-zinc-800 rounded-xl p-4 text-zinc-100 shadow-md">
            <h3 className="font-bold text-lg">{evento.title}</h3>
            <p className="text-zinc-400">{evento.location}</p>
            {evento.image && (
                <img
                    src={`./images/${evento.image}`}
                    alt={evento.title}
                    className="mt-2 w-full h-32 object-cover rounded-lg"
                />
            )}
        </div>
    );
}