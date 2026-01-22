// @ts-check

export default class Metacritic {

    /**
     * @type {number}
     */
    metascore

    /**
     * @type {string}
     */
    url

    /**
     * @type {number}
     */
    platform

    /**
     * @type {string}
     */
    platform_name

    /**
     * @type {string}
     */
    platform_slug // sulg class para buscar directamente por sulg

    /**
     * @param {number} metascore
     * @param {number} platform
     * @param {string} platform_name
     * @param {string} platform_slug
     * @param {string} url
     */
    constructor(metascore, url, platform, platform_name, platform_slug) {

        this.metascore = metascore
        this.url = url
        this.platform = platform
        this.platform_name = platform_name
        this.platform_slug = platform_slug

    }
}