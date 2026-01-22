// @ts-check

export default class Added {

    /**
     * @type {number}
     */
    total

    /**
     * @type {number}
     */
    yet

    /**
     * @type {number}
     */
    owned

    /**
     * @type {number}
     */
    beaten

    /**
     * @type {number}
     */
    toplay

    /**
     * @type {number}
     */
    dropped

    /**
     * @type {number}
     */
    playing

    /**
     * @param {number} total
     * @param {number} yet
     * @param {number} owned
     * @param {number} beaten
     * @param {number} toplay
     * @param {number} dropped
     * @param {number} playing
     */
    constructor(total, yet, owned, beaten, toplay, dropped, playing) {

        this.total = total
        this.yet = yet
        this.owned = owned
        this.beaten = beaten
        this.toplay = toplay
        this.dropped = dropped
        this.playing = playing

    }


    
}