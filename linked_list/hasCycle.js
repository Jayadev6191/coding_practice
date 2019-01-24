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

LinkedList.prototype.hasCycle = function() {
    var slowPtr = this.head;
    var fastPtr = this.head;

    while(fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;

        if(slowPtr == fastPtr) {
            console.log(fastPtr.val);
            return true;
        }
    }

    return false;
};


var n0 = new Node(10);
var n1 = new Node(20);
var n2 = new Node(30);
var n3 = new Node(40);
var n4 = new Node(50);
var n5 = new Node(60);
// var n6 = new Node(70);

// 10 -> 20 -> 30 -> 40 -> 50 -> 60 -|
//                   |______<________|

var list = new LinkedList();
list.head = n0;
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;

console.log(list.hasCycle());
console.log(list);
