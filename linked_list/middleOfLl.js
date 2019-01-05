/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var findMiddle = function(head) {
    if(head === null) return null;
    
    var slow = head;
    var fast = head;

    while (fast && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    

};

var list = {
    val: 30,
    next: {
        val: 20,
        next: {
            val: 30,
            next: null
        }
    }
};

console.log(findMiddle(list));