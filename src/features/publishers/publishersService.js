import Publisher from "../../rawg/publisher";

export const fetchPublishers = async (search, page) => {
  if (search) {
    return await Publisher.new_from_busqueda(search, page, 50);
  }
  return await Publisher.new_mas_populares(page, 20);
};
