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

LinkedList.prototype.removeDupe = function() {
    var p = this.head;
    q = p.next;

    while(p && q) {
        if(p.val == q.val) {
            q = q.next;
            p.next = q;
        }
        p = p.next;
        q = q.next;
    }

    console.log(p);
};

var myList = new LinkedList();
myList.add(10);
myList.add(20);
myList.add(30);
myList.add(30);
myList.add(40);
myList.add(40);
myList.add(50);
// 10 -> 20 -> 30 -> 30 -> 40 -> 50 -> null
myList.removeDupe();
console.log(JSON.stringify(myList, null, 2));