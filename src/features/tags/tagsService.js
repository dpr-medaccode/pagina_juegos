import Tag from "../../rawg/tag";
import Juego from "../../rawg/juego";

export const fetchTags = async (search, page) => {
    if (search) {
        return await Tag.new_from_busqueda(search, page, 50);
    }
    return await Tag.new_mas_populares(page, 20);
};

export const fetchPopularTags = async (pagina = 1, cantidad = 20) => {
    let data = await Tag.new_mas_populares(pagina, cantidad)
    return data
}

export const fetchSearchTags = async (search, pagina = 1, cantidad = 50) => {
    let data = await Tag.new_from_busqueda(search, pagina, cantidad);
    return data
}

export const fetchIdTag = async (id) => {
    let data = await Tag.new_from_id(id);
    return data
}

export const fetchTagJuegos = async (id, pagina, cantidad) => {
    let data = await Juego.new_from_tag(id, pagina, cantidad)
    return data
}
