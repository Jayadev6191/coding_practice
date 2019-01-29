/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result_list = null;
    var borrow = 0;
    
    if(l1 === null && l2 === null) return null;
    if(!l1) return l2;
    if(!l2) return l1;
    
    while(l1 || l2) {
        var val = 0;
        var newNode = null;
        if(l1) val+= l1.val;
        if(l2) val+= l2.val;
        
        if(val + borrow <= 9)  {
            newNode = new ListNode(val + borrow);
            borrow = 0;
        } else {            
            val += borrow;
            newNode = new ListNode(Number((''+val)[1]));
            borrow = 1;
        }
        
        if(result_list === null) {
            result_list = newNode;
            result_list.tail = result_list;
        } else {
            result_list.tail.next = newNode;
            result_list.tail = result_list.tail.next;
        }
        
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    
    if(borrow === 1) {
        result_list.tail.next = new ListNode(1);
        result_list.tail = result_list.tail.next;
    }
    
    return result_list;
};