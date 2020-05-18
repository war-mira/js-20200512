/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

    const filtered = Object.entries(obj).filter(([key, value], index, array)=>{
        if (![...fields].includes(key)) {
            return array;
        }       
    });

    return filtered.length ? Object.fromEntries(filtered) : {}
};
