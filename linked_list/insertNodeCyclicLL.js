/**
 * // Definition for a Node.
 * function Node(val,next) {
 *    this.val = val;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    
    
};



function Node(val, next) {
    this.val = val;
    this.next = null;
}

function CylicSinglyLinkedList() {
    this.head = null;
}

CylicSinglyLinkedList.prototype.insert = function(head, insertVal) {
    if(head === null) {
        this.head = new Node(insertVal);
    } else {
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = new Node(insertVal);
        console.log(this.head);
    }
}

var list = new CylicSinglyLinkedList();
list.insert(list.head, 3);
list.insert(list.head, 2);
//console.log(list);

{
    "$id":"1",
    "val":3,
    "next":{
        "$id":"2",
        "val":3,
        "next":{
            "$id":"3",
            "val":3,
            "next":{
                "$ref":"1"
            }
        }
    }
}



[
{sysId: "3ac8759b1311be40c906bcaf3244b044", name: "Jayadev Akkiraju (jakkiraju)"},
{sysId: "1b1a6f1085ad81007cb16e0f3cf843cf", name: "Aman Gulati (agulati)"}
]