/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b)=>b-a);
        let y = stones.shift();
        let x = stones.shift();
        if(y > x ) stones.push(y-x);
    }
    return stones.length > 0 ? stones[0] : 0;
};