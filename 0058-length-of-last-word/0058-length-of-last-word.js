/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedstrarr = s.trim().split(' ');
    return trimmedstrarr[trimmedstrarr.length - 1].length;
};