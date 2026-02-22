import Juego from "./juego";
import RWAG from "./rawg";

export default class Publisher {

    constructor(data) {

        Object.assign(this, data)

    }

    static async new_mas_populares(pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/publishers?key=${RWAG.api}&ordering=-added&page=${pagina}&page_size=${cantidad}`
        )

        let data = await res.json()

        console.log(data);

        return data.results.map(pu => new Publisher(pu))

    }

    static async new_from_busqueda(busqueda, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/publishers?key=${RWAG.api}&page=${pagina}&page_size=${cantidad}&search=${busqueda}`
        )

        let data = await res.json()

        return data.results.map(pu => new Publisher(pu))

    }

    static async new_from_id(id) {

        let res = await fetch(
            `https://api.rawg.io/api/publishers/${id}?key=${RWAG.api}`
        )

        let data = await res.json()

        return new Publisher(data)

    }

    async juegos(pagina = 1, cantidad = 10) {

        return Juego.new_from_publisher(this.id, pagina, cantidad)

    }

    async juegos(pagina = 1, cantidad = 10) {

        return Juego.new_from_publisher(this.id, pagina, cantidad)

    }

}