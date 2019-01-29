/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Time Complexity: O(logn)
 * Space Complexity: O(n)
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function mergeSortedArrays(nums1, nums2) {
        var n1 = 0;
        var n2 = 0;
        var merged_array = [];
        var pointer = null;

        while(n1 < nums1.length || n2 < nums2.length) {
            if(nums1[n1] && n2 === nums2.length) {
                pointer = nums1[n1];
                n1++;
            } else if(n1 === nums1.length && nums2[n2]) {
                pointer = nums2[n2];
                n2++;
            } else {
                if(nums1[n1] <= nums2[n2]) {
                    pointer = nums1[n1];
                    n1++;
                } else {
                    //break;
                    pointer = nums2[n2];
                    n2++;
                }
            }
            merged_array.push(pointer);
        }
        return merged_array;
    }

    var arr = mergeSortedArrays(nums1, nums2);
    if(arr.length % 2 === 0) {
        var l1 = (arr.length) / 2;
        var l2 = (arr.length + 2) / 2;
        return (arr[l1 - 1] + arr[l2 - 1]) / 2;
    } else {
        return arr[((arr.length + 1) / 2) - 1];
    }
};

var nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var nums2 = [0,6];
console.log(findMedianSortedArrays(nums1, nums2));

/*
    brute force
    ------------------------------------------
    1) Merge two arrays [1,2,3]
    2) Check if the array count is even or odd
    3) If even return (n)/2 + (n+2)/2
    4) else return (n+1)/2

    [1, 3, 5]
    [2, 7]
*/