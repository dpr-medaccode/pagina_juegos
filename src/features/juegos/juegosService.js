import Juego from "../../rawg/juego";

export const fetchPopularJuegos = async (page = 1, pageSize = 20) => {
    const data = await Juego.new_mas_populares(page, pageSize);
    return data;
};


export const fetchSearchJuegos = async (search, page = 1, pageSize = 20) => {
    const data = await Juego.new_from_busqueda(search, page, pageSize);
    return data;
};
