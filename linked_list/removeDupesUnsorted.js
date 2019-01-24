// Unsorted Linked List

function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function(val) {
    if(this.head === null) {
        this.head = new Node(val);
    } else {
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = new Node(val);
    }
};

LinkedList.prototype.removeDuplicates = function() {
    if(this.head === null) return;
    // Use a map to track all occurances of the node values
    var map = new Map();
    
    var current = this.head;
    var prev = null;
    while(current) {
        if(!map.get(current.val)) {
            map.set(current.val, true);
            prev = current;
            current = current.next;
        } else {
            prev.next = current.next;
            current = prev.next;
        }
    }
};

var myList = new LinkedList();
myList.add(20);
myList.add(30);
myList.add(20);
myList.add(30);
myList.add(40);
myList.add(40);
// 20 -> 30 -> 20 -> 40 -> null
myList.removeDuplicates();
console.log(JSON.stringify(myList.head, null, 2));