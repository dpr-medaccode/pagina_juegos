// @ts-check

export default class Reddit {

    /**
    * @type {string}
    */
    reddit_url

    /**
    * @type {string}
    */
    reddit_name

    /**
        * @type {string}
    */
    reddit_description

    /**
    * @type {string}
    */
    reddit_logo

    /**
     * @type {number}
     */
    reddit_count

    /**
     * @param {string} reddit_url
     * @param {string} reddit_name
     * @param {string} reddit_description
     * @param {string} reddit_logo
     * @param {number} reddit_count
     */
    constructor(reddit_url,reddit_name,reddit_description,reddit_logo,reddit_count) {

        this.reddit_url = reddit_url
        this.reddit_name = reddit_name
        this.reddit_description = reddit_description
        this.reddit_logo = reddit_logo
        this.reddit_count = reddit_count

    }

}