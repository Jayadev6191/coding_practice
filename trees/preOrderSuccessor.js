function Node(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;
}

BST.prototype.DFT = function(val) {
    var current = this.root;

    while(current) {
        console.log("val", val);
        if(val < current.val) {
            if(current.left) {
                console.log("current.val", current.val);
                current = current.left;
            } else {
                // reached the leaf node
                current.left = new Node(val);
                return;
            }
        }

        if(val > current.val) {
            if(current.right) {
                console.log("current.val", current.val);
                current = current.right;
            } else {
                current.right = new Node(val);
                return;
            }
        }
    }    
};


// group managers and members

BST.prototype.insert = function(val) {
    if(this.root === null) {
        this.root = new Node(val);
    } else {
        this.DFT(val);
    }
};

BST.prototype.preOrderSuccessor = function(val) {
    if(!this.root) return;

    var current = this.root;
    var result = [];
    
    function preOrderTraversal(node) {
        if(node === null) return;

        result.push(node.val);
        if(node.left) node = node.left;
        if(node.right) node = node.right;
    }

    preOrderTraversal(current);

    return result;
};

/*
            50
           /  \
         16   90
        /  \
       14  18
*/

var myTree = new BST();
myTree.insert(50);
myTree.insert(16);
myTree.insert(90);
console.log(JSON.stringify(myTree, null, 2));
// console.log(myTree.preOrderSuccessor(15));

// 50 -> 16 -> 14 -> 90
