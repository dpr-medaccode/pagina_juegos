import Plataforma from "../../rawg/plataforma";
import Juego from "../../rawg/juego";

export const fetchPlatformas = async (pagina = 1, cantidad = 20) => {
    return await Plataforma.new_mas_populares(pagina, cantidad);
}

export const fetchPlataformaPorId = async (id) => {
    const data = await Plataforma.new_from_id(id)
    return data
}

export const fetchPlataformaJuegos = async (id, pagina, cantidad) => {
    const data = await Juego.new_from_plataforma(id, pagina, cantidad)
    return data
}