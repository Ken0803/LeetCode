/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let res = nums1.map((i) => i);
    let i = 0;
    let j = 0;
    let ri = 0;
    
    while (i < m && j < n) {
        if (res[i] > nums2[j]) {
            nums1[ri++] = nums2[j++];
        } else { 
            nums1[ri++] = res[i++];
        }
    }
    while (i < m) {
        nums1[ri++] = res[i++];
    }
    while (j < n) {
        nums1[ri++] = nums2[j++];
    }
    return nums1;
};