// @ts-check

export class Tienda {

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @type {string}
     */
    slug

    /**
     * @type {string}
     */
    domain

    /**
     * @type {number}
     */
    games_count

    /**
     * @type {string}
     */
    image_background

    /**
     * @param {number} id
     * @param {string} name
     * @param {string} slug
     * @param {string} domain
     * @param {number} games_count
     * @param {string} image_background
     */
    constructor(id, name, slug, domain, games_count, image_background) {

        this.id = id
        this.name = name
        this.slug = slug
        this.domain = domain
        this.games_count = games_count
        this.image_background = image_background
    }

}

export class Pagina_Tienda {

    /**
     * @type {number}
     */
    store_page_id


    /**
     * @type {string}
     */
    store_page_url

    /**
     * @param {number} store_page_id
     * @param {string} store_page_url
     */
    constructor(store_page_id, store_page_url) {

        this.store_page_id = store_page_id
        this.store_page_url = store_page_url

    }

}