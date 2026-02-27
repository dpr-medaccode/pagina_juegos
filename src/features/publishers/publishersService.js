import Publisher from "../../rawg/publisher";
import Juego from "../../rawg/juego";

export const fetchPopularPublishers = async (pagina = 1, cantidad = 20) => {
  let data = await Publisher.new_mas_populares(pagina, cantidad)
  return data
}

export const fetchSearchPublishers = async (search, pagina = 1, cantidad = 50) => {
  let data = await Publisher.new_from_busqueda(search, pagina, cantidad);
  return data
}

export const fetchIdPublishers = async (id) => {
  let data = await Publisher.new_from_id(id);
  return data
}

export const fetchPublishersJuegos = async (id, pagina, cantidad) => {
  let data = await Juego.new_from_publisher(id, pagina, cantidad)
  return data
}
