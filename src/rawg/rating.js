// @ts-check

export class Tipo_rating {

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    title

    /**
     * @type {number}
     */
    count

    /**
     * @type {number}
     */
    percent

    /**
     * @param {number} id
     * @param {string} title
     * @param {number} count
     * @param {number} percent
     */
    constructor(id, title, count, percent) {

        this.id = id
        this.title = title
        this.count = count
        this.percent = percent

    }
}

export class Rating {

    /**
     * @type {number}
     */
    rating


    /**
    * @type {number}
    */
    rating_top

    /**
    * @type {Tipo_rating[]}
    */
    ratings

    /**
     * @param {number} rating
     * @param {number} rating_top
     * @param {Tipo_rating[]} ratings
     */
    constructor(rating, rating_top, ratings) {

        this.rating = rating
        this.rating_top = rating_top
        this.ratings = ratings

    }
}