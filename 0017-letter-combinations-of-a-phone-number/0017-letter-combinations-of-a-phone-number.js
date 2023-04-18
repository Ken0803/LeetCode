/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    const letters = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    const result = [];
    const dfs = (remaining, current) => {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }
        for (let letter of letters[remaining[0]]) {
            dfs(remaining.slice(1), current + letter);
        }
    };
    dfs(digits, "");
    return result;
};