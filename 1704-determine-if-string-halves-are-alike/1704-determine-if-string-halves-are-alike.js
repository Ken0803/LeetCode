/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let firstStr = s.slice(0, s.length / 2);
    let secondStr = s.slice(s.length / 2);
    firstStr = firstStr.split('').filter((s) => vowels.includes(s))
    secondStr = secondStr.split('').filter((s) => vowels.includes(s));
    return firstStr.length === secondStr.length;
};