/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    arr.sort( (a, b) => a.localeCompare(b, 'ru', {ignorePunctuation: true, caseFirst: 'upper'}));

    return param === 'asc' ? arr : arr.reverse()
}
