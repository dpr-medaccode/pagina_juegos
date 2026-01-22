// @ts-check

export default class Esrb {

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
     * @param {number} id
     * @param {string} name
     * @param {string} slug
     */
    constructor(id, name, slug) {

        this.id = id
        this.name = name
        this.slug = slug

    }
}