import Juego from "./juego";
import RWAG from "./rawg"

export default class Plataforma {


    constructor(data) {

        Object.assign(this, data)

    }

    static async new_mas_populares(pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/platforms?key=${RWAG.api}&ordering=-added&page=${pagina}&size=${cantidad}`
        )

        let data = await res.json()

        console.log(data);

        return data.results.map(pl => new Plataforma(pl))

    }

    static async new_from_busqueda(busqueda, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/platforms?key=${RWAG.api}&page=${pagina}&page_size=${cantidad}&search=${busqueda}`
        )

        let data = await res.json()

        return data.results.map(pl => new Publisher(pl))

    }


    static async new_from_id(id) {

        let res = await fetch(
            `https://api.rawg.io/api/platforms/${id}?key=${RWAG.api}`
        )

        let data = await res.json()

        return new Plataforma(data)

    }

    async juegos(pagina = 1, cantidad = 10) {

        return Juego.new_from_plataforma(this.id, pagina, cantidad)

    }

}