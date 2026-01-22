// @ts-check

import Added from "./added.js"
import Desarrollador from "./desarrollador.js"
import Etiqueta from "./etiqueta.js"
import Genero from "./generos.js"
import Metacritic from "./metacritic.js"
import { Familia_plataforma, Plataforma } from "./plataforma.js"
import Publishers from "./publishers.js"
import { Rating, Tipo_rating } from "./rating.js"
import RWAG from "./rawg.js"
import Reddit from "./reddit.js"
import { Pagina_Tienda, Tienda } from "./tienda.js"

export default class Juego {

    /** @type {number} */
    id

    /**
     * @type {string}
     */
    slug

    /**
    * @type {string}
    */
    name

    /**
    * @type {string}
    */
    name_original

    /**
    * @type {string}
    */
    description

    /**
     * @type {number}
     */
    metacritic

    /**
     * @type {Metacritic[]}
     */
    metacritic_platforms

    /**
     * @type {Date}
     */
    released

    /**
     * @type {boolean}
     */
    tba

    /**
     * @type {Date}
     */
    updated

    /**
     * @type {string}
     */
    background_image

    /**
     * @type {string}
     */
    background_image_additional

    /**
    * @type {string}
    */
    website

    /**
     * @type {Rating}
     */
    rating

    /**
     * @type {Added}
     */
    added

    /**
     * @type {number}
     */
    playtime

    /**
     * @type {number}
     */
    screenshots_count

    /**
     * @type {number}
     */
    movies_count

    /**
     * @type {number}
     */
    creators_count

    /**
     * @type {number}
     */
    achievements_count

    /**
     * @type {number}
     */
    parent_achievements_count

    /**
     * @type {Reddit}
     */
    reddit

    /**
     * @type {number}
     */
    twitch_count

    /**
     * @type {number}
     */
    youtube_count

    /**
     * @type {number}
     */
    reviews_text_count

    /**
    * @type {number}
    */
    ratings_count

    /**
     * @type {number}
     */
    suggestions_count

    /**
    * @type {string[]}
    */
    alternative_names

    /**
     * @type {string}
     */
    metacritic_url

    /**
    * @type {number}
    */
    parents_count

    /**
    * @type {number}
    */
    additions_count

    /**
    * @type {number}
    */
    game_series_count

    /**
     * @type {number}
    */
    reviews_count

    /**
     * @type {string}
    */
    saturated_color

    /**
     * @type {string}
    */
    dominant_color

    /**
     * @type {Familia_plataforma[]}
     */
    parent_platforms

    /**
     * @type {Plataforma[]}
     */
    platforms

    /**
     * @type {Pagina_Tienda[]}
     */
    pages_store

    /**
     * @type {Tienda[]}
     */
    stores

    /**
     * @type {Desarrollador[]}
     */
    developers

    /**
     * @type {Genero[]}
     */
    genres

    /**
     * @type {Etiqueta[]}
     */
    tags

    /**
     * @type {Publishers[]}
     */
    publishers

    /**
     * @param {number} id
     * @param {string} slug
     * @param {string} name
     * @param {string} name_original
     * @param {string} description
     * @param {number} metacritic
     * @param {Metacritic[]} metacritic_platforms
     * @param {string | Date} released
     * @param {boolean} tba
     * @param {string | Date} updated
     * @param {string} background_image
     * @param {string} background_image_additional
     * @param {string} website
     * @param {Rating} rating
     * @param {Added} added
     * @param {number} playtime
     * @param {number} screenshots_count
     * @param {number} movies_count
     * @param {number} creators_count
     * @param {number} achievements_count
     * @param {number} parent_achievements_count
     * @param {Reddit} reddit
     * @param {number} twitch_count
     * @param {number} youtube_count
     * @param {number} reviews_text_count
     * @param {number} ratings_count
     * @param {number} suggestions_count
     * @param {string[]} alternative_names
     * @param {string} metacritic_url
     * @param {number} parents_count
     * @param {number} additions_count
     * @param {number} game_series_count
     * @param {number} reviews_count
     * @param {string} saturated_color
     * @param {string} dominant_color
     * @param {Familia_plataforma[]} parent_platforms
     * @param {Plataforma[]} platforms
     * @param {Pagina_Tienda[]} pages_store
     * @param {Tienda[]} stores
     * @param {Desarrollador[]} developers
     * @param {Genero[]} genres
     * @param {Etiqueta[]} tags
     * @param {Publishers[]} publishers
     */
    constructor(

        id,
        slug,
        name,
        name_original,
        description,
        metacritic,
        metacritic_platforms,
        released,
        tba,
        updated,
        background_image,
        background_image_additional,
        website,
        rating,
        added,
        playtime,
        screenshots_count,
        movies_count,
        creators_count,
        achievements_count,
        parent_achievements_count,
        reddit,
        twitch_count,
        youtube_count,
        reviews_text_count,
        ratings_count,
        suggestions_count,
        alternative_names,
        metacritic_url,
        parents_count,
        additions_count,
        game_series_count,
        reviews_count,
        saturated_color,
        dominant_color,
        parent_platforms,
        platforms,
        pages_store,
        stores,
        developers,
        genres,
        tags,
        publishers

    ) {

        this.id = id
        this.slug = slug
        this.name = name
        this.name_original = name_original
        this.description = description
        this.metacritic = metacritic
        this.metacritic_platforms = metacritic_platforms

        if (typeof released === "string") {
            this.released = new Date(released)
        } else if (released instanceof Date) {
            this.released = released
        } else {
            throw new Error('released: ' + typeof released)
        }

        this.tba = tba

        if (typeof updated === "string") {
            this.updated = new Date(updated)
        } else if (updated instanceof Date) {
            this.updated = updated
        } else {
            throw new Error('updated: ' + typeof updated)
        }

        this.background_image = background_image
        this.background_image_additional = background_image_additional
        this.website = website
        this.rating = rating
        this.added = added
        this.playtime = playtime
        this.screenshots_count = screenshots_count
        this.movies_count = movies_count
        this.creators_count = creators_count
        this.achievements_count = achievements_count
        this.parent_achievements_count = parent_achievements_count
        this.reddit = reddit
        this.twitch_count = twitch_count
        this.youtube_count = youtube_count
        this.reviews_text_count = reviews_text_count
        this.ratings_count = ratings_count
        this.suggestions_count = suggestions_count
        this.alternative_names = alternative_names
        this.metacritic_url = metacritic_url
        this.parents_count = parents_count
        this.additions_count = additions_count
        this.game_series_count = game_series_count
        this.reviews_count = reviews_count
        this.saturated_color = saturated_color
        this.dominant_color = dominant_color
        this.parent_platforms = parent_platforms
        this.platforms = platforms
        this.pages_store = pages_store
        this.stores = stores
        this.developers = developers
        this.genres = genres
        this.tags = tags
        this.publishers = publishers

    }


    /**
     * @param {number} id
     */
    static async new_from_id(id) {

        try {

            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${RWAG.api}`)

            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)

            const d = await response.json()

            //console.log(data)

            /**
             * @type {Metacritic[]}
             */
            let metacritic_platforms = []

            d.metacritic_platforms.forEach((/** @type {any} */ m) => {

                metacritic_platforms.push(new Metacritic(
                    m.metascore,
                    m.url,
                    m.platform.platform,
                    m.platform.name,
                    m.platform.slug
                ))

            });

            //

            /**
             * @type {Tipo_rating[]}
             */
            let tipos_rating = []

            d.ratings.forEach((/** @type {any} */ r) => {

                tipos_rating.push(new Tipo_rating(r.id, r.title, r.count, r.percent))

            })

            //

            /**
             * @type {Familia_plataforma[]}
             */
            let parent_platforms = []

            d.parent_platforms.forEach((/** @type {any} */ pp) => {

                parent_platforms.push(new Familia_plataforma(pp.id, pp.name, pp.slug))

            });

            //

            /**
           * @type {Plataforma[]}
           */
            let platforms = []

            d.platforms.forEach((/** @type {any} */ p) => {

                platforms.push(new Plataforma(
                    p.platform.id,
                    p.platform.name,
                    p.platform.slug,
                    p.platform.image,
                    p.platform.year_end,
                    p.platform.year_start,
                    p.platform.games_count,
                    p.platform.image_background,
                    p.released_at,
                    p.requirements?.minimum ?? null,
                    p.requirements?.recommended ?? null,
                ))

            })

            //

            /**
             * @type {Pagina_Tienda[]}
             */
            let pages_store = []

            d.stores.forEach((/** @type {any} */ ps) => {

                pages_store.push(new Pagina_Tienda(ps.id, ps.url))

            });

            //

            /**
           * @type {Tienda[]}
           */
            let stores = []

            d.stores.forEach((/** @type {any} */ s) => {

                stores.push(new Tienda(
                    s.store.id,
                    s.store.name,
                    s.store.slug,
                    s.store.domain,
                    s.store.games_count,
                    s.store.image_background
                ))

            });

            //

            /**
             * @type {Desarrollador[]}
             */
            let developers = []

            d.developers.forEach((/** @type {any} */ d) => {

                developers.push(new Desarrollador(
                    d.id,
                    d.name,
                    d.slug,
                    d.games_count,
                    d.image_background
                ))

            });

            //

            /**
             * @type {Genero[]}
             */
            let genres = []

            d.genres.forEach((/** @type {any} */ g) => {

                genres.push(new Genero(
                    g.id,
                    g.name,
                    g.slug,
                    g.games_count,
                    g.image_background
                ))

            });

            //

            /**
             * @type {Etiqueta[]}
             */
            let tags = []

            d.tags.forEach( ( /** @type {any} */ t)  => {

                tags.push(new Etiqueta(
                    t.id,
                    t.name,
                    t.slug,
                    t.language,
                    t.games_count,
                    t.image_background
                ))
                
            });

            //

            /**
             * @type {Publishers[]}
             */
            let publishers = []

            d.publishers.forEach((/** @type {any} */ p) => {

                publishers.push( new Publishers(
                    p.id,
                    p.name,
                    p.slug,
                    p.games_count,
                    p.image_background
                ))
                
            });

            //

            let juego = new Juego(
                d.id,
                d.slug,
                d.name,
                d.name_original,
                d.description,
                d.metacritic,
                metacritic_platforms,
                d.released,
                d.tba,
                d.updated,
                d.background_image,
                d.background_image_additional,
                d.website,
                new Rating(d.rating, d.rating_top, tipos_rating),
                new Added(
                    d.added,
                    d.added_by_status.yet,
                    d.added_by_status.owned,
                    d.added_by_status.beaten,
                    d.added_by_status.toplay,
                    d.added_by_status.dropped,
                    d.added_by_status.playing
                ),
                d.playtime,
                d.screenshots_count,
                d.movies_count,
                d.creators_count,
                d.achievements_count,
                d.parent_achievements_count,
                new Reddit(
                    d.reddit_url,
                    d.reddit_name,
                    d.reddit_description,
                    d.reddit_logo,
                    d.reddit_count
                ),
                d.twitch_count,
                d.youtube_count,
                d.reviews_count,
                d.ratings_count,
                d.suggestions_count,
                d.alternative_names,
                d.metacritic_url,
                d.parents_count,
                d.additions_count,
                d.game_series_count,
                d.reviews_count,
                d.saturated_color,
                d.dominant_color,
                parent_platforms,
                platforms,
                pages_store,
                stores,
                developers,
                genres,
                tags,
                publishers

            )

            return juego

        } catch (e) {

            console.error('Error al obtener juegos:', e)

            return null

        }



    }



}
