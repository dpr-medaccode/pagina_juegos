import Tag from "../../rawg/tag";

export const fetchTags = async (search, page) => {
    if (search) {
        return await Tag.new_from_busqueda(search, page, 50);
    }
    return await Tag.new_mas_populares(page, 20);
};
