/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let remain = 1;
    let i = digits.length - 1;
    let plusOne = [];
    while (remain && i >= 0) {
        plusOne.push((remain + digits[i]) % 10);
        remain = parseInt((remain + digits[i]) / 10);
        i --;
    };
    if (i >= 0) {
        while (i >= 0) {
            plusOne.push(digits[i]);
            i--;
        }
    } else {
        if (remain > 0) {
            plusOne.push(remain);
        }
    }
    plusOne = plusOne.reverse();
    return plusOne;
};