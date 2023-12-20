/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    const sortedPrice = prices.sort((a, b) => a - b);
    if (sortedPrice[0] + sortedPrice[1] <= money) return money - sortedPrice[0] - sortedPrice[1];
    else return money;
};