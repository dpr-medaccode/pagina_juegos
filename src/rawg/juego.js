import RWAG from "./rawg.js"

export default class Juego {

    constructor(data) {

        Object.assign(this, data)

        this.released = Juego.to_date(data.released)
        this.updated = Juego.to_date(data.updated)

    }

    static to_date(val) {

        if (!val) return null

        if (val instanceof Date) return val

        if (typeof val === "string") return new Date(val)

        throw new Error("Fecha inválida")

    }

    static async new_mas_populares(pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/games?key=${RWAG.api}&ordering=-added&page=${pagina}&page_size=${cantidad}`
        )

        let data = await res.json()

        return data.results.map(j => new Juego(j))

    }

    static async new_from_id(id) {

        let res = await fetch(
            `https://api.rawg.io/api/games/${id}?key=${RWAG.api}`
        )

        let data = await res.json()

        return new Juego(data)

    }

    static async new_from_busqueda(busqueda, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/games?key=${RWAG.api}&page=${pagina}&page_size=${cantidad}&search=${busqueda}`
        )

        let data = await res.json()

        return data.results.map(j => new Juego(j))

    }

    static async new_from_genero(genero, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/games?genres=${genero}&key=${RWAG.api}&page_size=${cantidad}&page=${pagina}`
        )

        let data = await res.json()

        return data.results.map(j => new Juego(j))

    }

    static async new_from_tag(tag, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/games?tags=${tag}&key=${RWAG.api}&page=${pagina}&page_size=${cantidad}`
        )

        let data = await res.json()

        return data.results.map(j => new Juego(j))

    }

    static async new_from_publisher(publisher, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/games?publishers=${publisher}&key=${RWAG.api}&page=${pagina}&page_size=${cantidad}`
        )

        let data = await res.json()

        return data.results.map(j => new Juego(j))

    }

    static async new_from_desarrollador(desarrollador, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/games?developers=${desarrollador}&key=${RWAG.api}&page=${pagina}&page_size=${cantidad}`
        )

        let data = await res.json()

        return data.results.map(j => new Juego(j))

    }

    static async new_from_plataforma(plataforma, pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/games?platforms=${plataforma}&key=${RWAG.api}&page=${pagina}&page_size=${cantidad}`
        )

        let data = await res.json()

        return data.results.map(j => new Juego(j))

    }



}