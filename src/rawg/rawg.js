export default class RWAG {

    static api = "750f16461d304a25a7108e02a2bb4f92"

    constructor() { }

    static async desarrolladores(pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/developers?key=${RWAG.api}&page=${pagina}&size=${cantidad}`
        )

        let data = await res.json()

        console.log(data);

        return data.results
    }

    static async generos(pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/genres?key=${RWAG.api}&page=${pagina}&size=${cantidad}`
        )

        let data = await res.json()

        return data.results
    }

    static async etiquetas(pagina = 1, cantidad = 10) {

        let res = await fetch(
            `https://api.rawg.io/api/tags?key=${RWAG.api}&page=${pagina}&size=${cantidad}`
        )

        let data = await res.json()

        return data.results
    }

}