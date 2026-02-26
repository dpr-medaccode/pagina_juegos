import Plataforma from "../../rawg/plataforma";

export const fetchPlatformas = async (page = 1, pageSize = 20) => {
    return await Plataforma.new_mas_populares(page, pageSize);
};
