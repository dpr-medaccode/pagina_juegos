// @ts-check

export default class Publishers {

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
     * @param {number} games_count
     * @param {string} image_background
     */
    constructor(id, name, slug, games_count, image_background) {

        this.id = id
        this.name = name
        this.slug = slug
        this.games_count = games_count
        this.image_background = image_background

    }
}