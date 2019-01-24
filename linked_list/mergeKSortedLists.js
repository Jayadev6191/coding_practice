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


var l1 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(3);

var l2 = new LinkedList();
l2.add(1);
l2.add(2);

var l3 = new LinkedList();
l3.add(2);
l3.add(3);

var arr = [l1,l2,l3];

console.log(arr);






