/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let result = ''

    if(size >= 0){
        const letterArr = string.split('')

        let counter = {}

        letterArr.forEach(function(letter){
            counter[letter] = (counter[letter] || 0) + 1;

            if((counter[letter])<= size){
                result +=letter
            }
        })
    }else{
        result = string
    }
    return result
}
