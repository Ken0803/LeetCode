/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    let pos = {};
    for(let i = 0 ; i < nums.length ; i ++){
        pos[nums[i].toString()] = i;
    }
    nums.sort((a,b)=> a-b);
    let n = nums.length;
    let BIT = [];
    for(let i = 0 ; i <= n ; i ++ ){
        BIT[i] = 0;
    }
    function prefixSum(index){
        let sum = 0;
        index = index + 1;
        while (index>0)
        {
            sum += BIT[index];
            index -= index & (-index);
        }
        return sum;
    }
    function updateBIT(i, diff){
        i = i + 1;
        while (i <= n)
        {
        BIT[i] += diff;
        i += i & (-i);
        }
    }
    let result = 0;
    for(let i = 0 ; i < n ; i ++){
        let p = pos[nums[i]];
        if( i === 0 ) result += p+1;
        else {
            let rp = pos[nums[i-1]];
            if(p > rp){
                result += p-rp;
                result -= prefixSum(p-1)-prefixSum(rp);
            }
            else{
                result += p-prefixSum(p-1)+n-rp-prefixSum(n-1)+prefixSum(rp);
            }
        }
        updateBIT(p,1);
        
    }
    return result;
};