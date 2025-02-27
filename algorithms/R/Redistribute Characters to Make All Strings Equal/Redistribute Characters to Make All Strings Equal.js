/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    
    
    let length = words.length
    
    let map = {}
    for( let word of words ) {
        for( let ch of word ) {
            map[ch] = ( map[ch] || 0 )  + 1 
        }
    }
    
    for( let key of Object.keys(map)) {
        if( map[key] % length !=0 ) return false
    }
    
    return true
    
};
