/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let result = 0;
    if(numOnes >= k ) return k;
    result = numOnes;
    k -= numOnes;
    if(numZeros >= k) return result ;
    k -= numZeros;
    return result -k;
};