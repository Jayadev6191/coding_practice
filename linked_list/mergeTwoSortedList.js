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


function mergeTwoLists(p,q) {
    var s = null;
    var new_list = null;
    // initialize s to lower val of lists
    if(p === null) return q;
    if(q === null) return p;
    if(p && q) {
        if(p.val <= q.val) {
            s = p;
            p = s.next;
        } else {
            s = q;
            q = s.next;
        }
    }

    // new_list will be the head of the merged linked list
    // s will be the temp pointer of merged linked list
    new_list = s;

    while(p && q) {
        if(p.val <= q.val) {
            s.next = p;
            p = p.next;
               s = s.next;
        } else {
            s.next = q;
            q = q.next;
               s = s.next;
        }
    }

    return new_list;
}

var p = new LinkedList();
p.add(10);
p.add(30);
p.add(50);

var q = new LinkedList();
q.add(20);
q.add(40);
q.add(60);

console.log(JSON.stringify(mergeTwoLists(p.head, q.head)));