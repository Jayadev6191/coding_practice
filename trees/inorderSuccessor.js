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
        if(val < current.val) {
            if(current.left) {
                current = current.left;
            } else {
                // reached the leaf node
                current.left = new Node(val);
                return;
            }
        }

        if(val > current.val) {
            if(current.right) {
                current = current.right;
            } else {
                current.right = new Node(val);
                current.right.parent = current;
                return;
            }
        }
    }    
};

BST.prototype.insert = function(val) {
    if(this.root === null) {
        this.root = new Node(val);
    } else {
        this.DFT(val);
    }
};


BST.prototype.inOrderSuccessor = function(val) {
    console.log(`finding the inorder successor for ${val}`);
    // starting from the root
    var current = this.root;
    var case_2_successor = null;
    
    while(current) {
        // check if val is less than current.val
        //console.log(current.val);
        if(val < current.val) {
            // move into left subtree
            if(current.left) {
                case_2_successor = current.val;
                current = current.left;
            } else {
                return current.val;
            }
        } else {
            if(current.right) {
                case_2_successor = current.val;
                current = current.right;
            } else {
                /*
                 current has hit the end of right subtree
                 This means the inorder successor would be a parent
                 node where the traversal has taken a last left
                */

                return case_2_successor;
            }
        }
    }
};


var myTree = new BST();
myTree.insert(50);
myTree.insert(16);
myTree.insert(90);
// myTree.insert(14);
// myTree.insert(40);
// myTree.insert(80);
// myTree.insert(100);
// myTree.insert(10);
// myTree.insert(15);
// myTree.insert(35);
// myTree.insert(45);
// myTree.insert(75);
// myTree.insert(82);
// myTree.insert(105);
// myTree.insert(5);
// myTree.insert(32);
// myTree.insert(36);
// myTree.insert(81);
// myTree.insert(85);
// myTree.insert(30);
// myTree.insert(37);
// myTree.insert(87);
console.log(myTree.inOrderSuccessor(50));
//console.log(JSON.stringify(myTree.root,null,2));