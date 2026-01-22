// @ts-check

export class Plataforma {

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
     * @type {string | null}
     */
    image

    /**
     * @type {number | null}
     */
    year_end

    /**
     * @type {number | null}
     */
    year_star

    /**
     * @type {number}
     */
    games_count

    /**
     * @type {string}
     */
    image_background

    /**
     * @type {Date}
     */
    released_at

    /**
     * @type {string | null}
     */
    minimum

    /**
     * @type {string | null}
     */
    recommended


    /**
     * @param {number} id
     * @param {string} name
     * @param {string} slug
     * @param {string | null} image
     * @param {number | null} year_end
     * @param {number | null} year_star
     * @param {number} games_count
     * @param {string} image_background
     * @param {Date} released_at
     * @param {string | null} minimum
     * @param {string | null} recommended
     */
    constructor(

        id,
        name,
        slug,
        image,
        year_end,
        year_star,
        games_count,
        image_background,
        released_at,
        minimum,
        recommended

    ) {
        this.id = id
        this.name = name
        this.slug = slug
        this.image = image
        this.year_end = year_end
        this.year_star = year_star
        this.games_count = games_count
        this.image_background = image_background

        if (typeof released_at === "string") {
            this.released_at = new Date(released_at)
        } else if (released_at instanceof Date) {
            this.released_at = released_at
        } else {
            throw new Error('released_at: ' + typeof released_at)
        }

        this.minimum = minimum
        this.recommended = recommended
    }
}

export class Familia_plataforma {
    /** @type {number} */
    id

    /** @type {string} */
    name

    /** @type {string} */
    slug

    /**
     * @param {number} id
     * @param {string} name
     * @param {string} slug
     */
    constructor(id, name, slug) {
        this.id = id;
        this.name = name;
        this.slug = slug;
    }
}
