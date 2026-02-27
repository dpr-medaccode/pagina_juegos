import Juego from "../../rawg/juego";

const serializableJuego = (data) => ({
    ...data,
    released: data.released ? data.released.toISOString() : null,
    updated: data.updated ? data.updated.toISOString() : null,
});

export const fetchPopularJuegos = async (page = 1, pageSize = 20) => {
    const data = await Juego.new_mas_populares(page, pageSize);
    return data.map(serializableJuego);
};

export const fetchSearchJuegos = async (search, page = 1, pageSize = 20) => {
    const data = await Juego.new_from_busqueda(search, page, pageSize);
    return data.map(serializableJuego);
};

export const fetchJuegoPorId = async (id) => {
    const data = await Juego.new_from_id(id);
    const safeData = serializableJuego(data);
    return safeData;
};
