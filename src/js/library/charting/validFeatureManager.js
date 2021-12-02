
/* Reports information about which features are available for graphing (have data)
 * or not (don't have data).
 * @author Pierce Smith
 */
export default class ValidFeatureManager {
    constructor(valids, onChangeCallback) {
        if(onChangeCallback !== undefined) {
            this.onChangeCallbacks = [onChangeCallback];
        }
        else {
            this.onChangeCallbacks = [];
        }

        if (valids === undefined) {
            valids = [];
        }
        this.update(valids);
    }

    /* @param {string} current The feature to start at (i.e. that "next" is relative to)
     * @param {Array<string>} barring An array of features that should be ignored
     * @returns {string} The next valid feature, if any in `barring` are ignored
     */
    getNextFeature(current, barring, direction = "next") {
        let currentIndex = this.validFeatures.indexOf(current);
        let oldIndex = currentIndex;
        while (true) {
            if(direction === "next") {
                currentIndex = (currentIndex + 1) % this.validFeatures.length;
            }
            else {
                currentIndex = currentIndex === 0 ? this.validFeatures.length-1 : (currentIndex - 1) % this.validFeatures.length;
            }

            let foundFeature = !barring.find(feature => { feature === this.validFeatures[currentIndex] });
            foundFeature = foundFeature || currentIndex === oldIndex;

            if (foundFeature) {
                break;
            }
        }
        return this.validFeatures[currentIndex];
    }

    /* @returns {string} Any arbitrary feature that is valid
     */
    getAnyFeature() {
        return this.validFeatures[0];
    }

    /* @returns {array<string>} An array containing all valid features
     */
    getAllFeatures() {
        return this.validFeatures;
    }

    /* @param {number} count The number of features that we should at least have
     * @returns {boolean} True if there are `count` or more features, false otherwise
     */
    enoughFeaturesExist(count) {
        return this.validFeatures.length >= count;
    }

    /* Replace the list of valid features with a new one.
     * Calls the onChangeCallback with the new values, if it is defined.
     * @param {Array<string>} A list of new valid features to replace the current ones
     */
    update(newValids) {
        this.validFeatures = newValids;
        this.onChangeCallbacks.forEach(cb => {
            cb(newValids);
        });
    }

    addCallback(callback) {
        this.onChangeCallbacks.push(callback);
    }
}
