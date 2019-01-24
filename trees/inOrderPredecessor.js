function Node(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


function BST() {
    this.root = null;
}

BST.prototype.insert = function(val) {
    if(!val) return;
    if(this.root === null) {
        this.root = new Node(val);
    } else {
        var current = this.root;
        while(current) {
            if(val < current.val) {
                // left subtree WRT current
                if(current.left) {
                    current = current.left;
                } else {
                    // reached leaf node
                    current.left = new Node(val);
                    return;
                }
            } else {
                //right subtree WRT current
                if(current.right) {
                    current = current.right;
                } else {
                    // reached leaf node
                    current.right = new Node(val);
                    return;
                }
            }
        }
    }
};


BST.prototype.inOrderPredecessor = function(val) {
    if(!val || !this.root) return;
    
    var current = this.root;
    var last_right = null;

    while(current) {
        if(val <= current.val) {
            // go through the left subtree till you find the node with val=${val}
            if(current.left) {
                current = current.left;
            } else {
                return last_right;
            }
        } else {
            // go through the right subtree till you find the node with val=${val}
            if(current.right) {
                last_right = current.val;
                current = current.right;
            } else {
                return current.val;
            }
        }
    }


}

/*
        50
       /  \
     40   60
    /     / 
   20    55   
*/

var myTree = new BST();
myTree.insert(50);
myTree.insert(40);
myTree.insert(20);
myTree.insert(60);
myTree.insert(55);
// console.log(JSON.stringify(myTree, null, 2));
console.log(myTree.inOrderPredecessor(55));
console.log(myTree.inOrderPredecessor(60));
console.log(myTree.inOrderPredecessor(40));
console.log(myTree.inOrderPredecessor(50));