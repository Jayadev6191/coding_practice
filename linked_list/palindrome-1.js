/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Time complexity O(n) with O(n) extra space used by the stack[arr]
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    
    if(head === null) return true;
    
    while(head != null) {
        arr.push(head.val);
        head = head.next;
    }
    
    let start = 0;
    let end = arr.length - 1;
    
    while(start < end){
        if(arr[start] !== arr[end]) return false;
        start++;
        end--;
    }
    
    return true;
};

var p = {
    val: 10,
    next: {
        val: 20,
        next: {
            val: 30,
            next: null
        }
    }
};

console.log(isPalindrome(p));