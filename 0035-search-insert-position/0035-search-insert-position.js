/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[0] >= target) return 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < target && nums[i] >= target) return i;
    }
    return nums.length;
};