class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(val) {
        var node = this.root;
        if(node === null) {
            // tree is empty
            this.root = new Node(val);
            return;
        };

        while(node != null) {
            if(val > node.val) {
                if(node.right === null) {
                    // add the new node
                    node.right = new Node(val);
                    break;
                } else {
                    node = node.right;
                }
            }

            if(val < node.val) {
                if(node.left === null) {
                    // add the new node
                    node.left = new Node(val);
                    break;
                } else {
                    node = node.left;
                }
            }
        }
    }

    bfs() {
        var node = this.root;
        if(node === null) return;
        var result = [];
        // create a queue
        var queue = [];
        // perform enqueue on the queue
        queue.push(node);
        result.push(node.val);
        while(queue.length > 0) {
            // perform dequeue on the queue
            node = queue.shift();

            var temp_arr = [];

            if(node.left != null) {
                temp_arr.push(node.left.val);
                queue.push(node.left);
            }

            if(node.right != null) {
                temp_arr.push(node.right.val);
                queue.push(node.right);
            }

            if(temp_arr.length > 0) result.push(temp_arr);
        }
        console.log(result);
    }
}
/*
    20
   10 30
  5 12
   9
 8 
*/
var myTree = new Tree();
myTree.add(20);
myTree.add(30);
myTree.add(10);
myTree.add(5);
myTree.add(9);
myTree.add(8);
myTree.add(12);
myTree.bfs();
console.log(JSON.stringify(myTree));
