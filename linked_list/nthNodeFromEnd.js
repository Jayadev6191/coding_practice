function Node(data) {
    this.data = data;
    this.next = null;
};

function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.count = 0;
    this.map = new Map();
};

SinglyLinkedList.prototype.insert = function(val) {
    if(this.head === null) {
        this.head = new Node(val);
        this.tail = this.head;
        this.map.set(this.count, this.tail.data);
        this.count++;
    } else {
        this.tail.next = new Node(val);
        this.map.set(this.count, this.tail.next.data);
        this.count++;
        this.tail = this.tail.next;
    }
};

/* find from end uses map to store and lookup */
SinglyLinkedList.prototype.findFromEnd = function(index) {
    console.log(this.map.get(this.count - 1 - index));
};

/* nthFromEnd uses two pointers */
SinglyLinkedList.prototype.nthFromEnd = function(index) {
    // 20 -> 25 -> 30 -> 35 -> null

    var count = 0;
    var first = this.head;
    var second = this.head;

    while(second.next) {
        if(count < index) {
            second = second.next;
        } else {
            first = first.next;
            second = second.next;
        }
        count++;
    }

    if(first === this.head) {
        console.log("index is greater than linked list length");
        return;
    }
    console.log(first);
    console.log(second);
};

var list = new SinglyLinkedList();
list.insert(20);
list.insert(25);
list.insert(30);
list.insert(35);
// list.findFromEnd(1);
list.nthFromEnd(7);
